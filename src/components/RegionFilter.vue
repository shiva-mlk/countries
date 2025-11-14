<script setup lang="ts">
import { REGIONS } from '@/constants/constant';

defineProps<{
  modelValue: string
}>();

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();
</script>

<template>
  <div class="relative w-2/3 md:w-48 text-lm-text dark:text-white">
    <select 
      :value="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      class="appearance-none w-full p-4 pl-6 pr-12 rounded-lg shadow-md bg-white dark:bg-dm-element border-none focus:outline-none cursor-pointer transition-colors duration-300"
    >
      <option 
        v-for="region in REGIONS" 
        :key="region.value" 
        :value="region.value"
      >
        {{ region.label }}
      </option>
    </select>
    
    <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
      <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
      </svg>
    </div>
  </div>
</template>