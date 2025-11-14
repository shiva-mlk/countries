<script setup lang="ts">
import type { Country } from '@/types/api';
import { useRouter } from 'vue-router';

const props = defineProps<{ country: Country }>();
const router = useRouter();

const goToDetails = () => {
  router.push(`/details/${props.country.alpha3Code}`);
};
</script>

<template>
  <div 
    @click="goToDetails"
    class="bg-white dark:bg-dm-element rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105"
  >
    <div class="h-40 w-full relative">
      <img 
        :src="country.flags.png" 
        :alt="`Flag of ${country.name}`" 
        class="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    
    <div class="p-6 pb-10">
      <h2 class="font-extrabold text-lg mb-4">{{ country.name }}</h2>
      <div class="text-sm space-y-1">
        <p><span class="font-semibold">Population:</span> {{ country.population.toLocaleString() }}</p>
        <p><span class="font-semibold">Region:</span> {{ country.region }}</p>
        <p><span class="font-semibold">Capital:</span> {{ country.capital }}</p>
      </div>
    </div>
  </div>
</template>