<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCountriesStore } from '@/stores/countriesStore';
import { ArrowLeftIcon } from '@heroicons/vue/24/outline';

const route = useRoute();
const router = useRouter();
const store = useCountriesStore();

const countryCode = computed(() => route.params.code as string);

onMounted(async () => {
  if (store.countries.length === 0) await store.fetchCountries();
});

const country = computed(() => store.getCountryByCode(countryCode.value));

</script>

<template>
  <div class="px-6 md:px-16 py-12 min-h-screen">
    <button 
      @click="router.back()" 
      class="flex items-center gap-2 bg-white dark:bg-dm-element py-2 px-8 shadow-md rounded mb-16 hover:opacity-75 transition"
    >
      <ArrowLeftIcon class="h-4 w-4" /> Back
    </button>

    <div v-if="country" class="flex flex-col lg:flex-row gap-10 lg:gap-28 items-center">
      <div class="w-full lg:w-1/2">
        <img :src="country.flags.svg" :alt="country.name" class="w-full shadow-xl" />
      </div>

      <div class="w-full lg:w-1/2 py-10">
        <h1 class="text-3xl font-extrabold mb-8">{{ country.name }}</h1>

        <div class="flex flex-col md:flex-row gap-8 md:gap-20 mb-10">
          <div class="space-y-2">
            <p><span class="font-semibold">Native Name:</span> {{ country.nativeName || 'N/A' }}</p>
            <p><span class="font-semibold">Population:</span> {{ country.population.toLocaleString() }}</p>
            <p><span class="font-semibold">Region:</span> {{ country.region }}</p>
            <p><span class="font-semibold">Sub Region:</span> {{ country.subregion || 'N/A' }}</p>
            <p><span class="font-semibold">Capital:</span> {{ country.capital || 'N/A' }}</p>
          </div>
          <div class="space-y-2">
            <p><span class="font-semibold">Currencies:</span> {{ country.currencies?.map(c => c.name).join(', ') || 'N/A' }}</p>
            <p><span class="font-semibold">Languages:</span> {{ country.languages?.map(l => l.name).join(', ') || 'N/A' }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>