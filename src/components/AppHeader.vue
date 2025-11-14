<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline';

const { theme, toggleTheme } = useTheme();
</script>

<template>
  <header class="bg-white dark:bg-dm-element shadow-md py-6 px-4 md:px-16 flex justify-between items-center z-10 relative">
    <h1 class="font-extrabold text-lg md:text-2xl">Where in the world?</h1>
    <button @click="toggleTheme" class="flex items-center gap-2 font-semibold">
      <MoonIcon v-if="theme === 'light'" class="h-5 w-5" />
      <SunIcon v-else class="h-5 w-5" />
      <span>{{ theme === 'light' ? 'Dark Mode' : 'Light Mode' }}</span>
    </button>
  </header>
</template>