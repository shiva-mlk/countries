<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { SEARCH_PLACEHOLDER } from '@/constants/constant';

defineProps<{
  modelValue: string
}>();

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();
</script>

<template>
  <div class="relative w-full md:w-1/3 shadow-md rounded-lg text-lm-text dark:text-white">
    <div class="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none">
      <MagnifyingGlassIcon class="h-5 w-5 text-lm-input dark:text-white" />
    </div>
    <input 
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      type="text"
      :placeholder="SEARCH_PLACEHOLDER"
      class="block w-full pl-20 p-4 rounded-lg bg-white dark:bg-dm-element placeholder-lm-input dark:placeholder-white focus:outline-none transition-colors duration-300"
    />
  </div>
</template>
