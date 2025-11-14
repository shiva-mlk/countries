<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <div class="min-h-screen bg-lm-bg dark:bg-dm-bg text-lm-text dark:text-white">
    <AppHeader />
    <router-view />
  </div>
</template>