<script setup lang="ts">
import { onMounted, ref, watch, computed } from 'vue';
import { useCountriesStore } from '@/stores/countriesStore';
import { useRouter, useRoute } from 'vue-router';
import Fuse from 'fuse.js';
import { SORT_OPTIONS, DEFAULT_SORT, FUSE_CONFIG, LOADING_MESSAGE } from '@/constants/constant';
import CountryCard from '@/components/CountryCard.vue';
import SearchInput from '@/components/SearchInput.vue';
import RegionFilter from '@/components/RegionFilter.vue';

const store = useCountriesStore();
const router = useRouter();
const route = useRoute();

const searchQuery = ref('');
const selectedRegion = ref('');
const sortBy = ref(DEFAULT_SORT);

onMounted(async () => {
  if (store.countries.length === 0) await store.fetchCountries();
  
  if (route.query.search) searchQuery.value = route.query.search as string;
  if (route.query.region) selectedRegion.value = route.query.region as string;
  if (route.query.sort) sortBy.value = route.query.sort as string;
});

watch([searchQuery, selectedRegion, sortBy], () => {
  router.replace({
    query: {
      search: searchQuery.value || undefined,
      region: selectedRegion.value || undefined,
      sort: sortBy.value
    }
  });
});

const fuse = computed(() => {
  return new Fuse(store.countries, FUSE_CONFIG);
});

const processedCountries = computed(() => {
  let result = store.countries;

  if (selectedRegion.value) {
    result = result.filter(c => c.region === selectedRegion.value);
  }

  if (searchQuery.value) {
    result = fuse.value.search(searchQuery.value).map(r => r.item);
  }

  return [...result].sort((a, b) => {
    switch (sortBy.value) {
      case 'population-desc':
        return b.population - a.population;
      case 'population-asc':
        return a.population - b.population;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });
});
</script>

<template>
  <div class="min-h-screen px-4 md:px-16 py-8 transition-colors duration-300">
    
    <div class="flex flex-col lg:flex-row justify-between gap-8 mb-12">
      <SearchInput v-model="searchQuery" />

      <div class="flex flex-col md:flex-row gap-4">
        <div class="relative w-full md:w-48">
          <select 
            v-model="sortBy"
            class="appearance-none w-full p-4 px-6 rounded-lg shadow-md bg-white dark:bg-dm-element dark:text-white border-none focus:outline-none cursor-pointer"
          >
            <option 
              v-for="option in SORT_OPTIONS" 
              :key="option.value" 
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </div>

        <RegionFilter v-model="selectedRegion" />
      </div>
    </div>

    <div v-if="store.loading" class="text-center mt-10">{{ LOADING_MESSAGE }}</div>
    
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
      <CountryCard 
        v-for="country in processedCountries" 
        :key="country.alpha3Code" 
        :country="country" 
      />
    </div>
  </div>
</template>