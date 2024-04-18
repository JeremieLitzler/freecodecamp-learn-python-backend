<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <app-header></app-header>
  <main class="justify-self-start flex">
    <router-view :key="`${$route.fullPath}`" />
  </main>
  <footer class="bg-blue-600 p-4 text-white">
    Made with 💕 by Jeremie, using the tutorial
    <app-link to="https://www.youtube.com/watch?v=ftKiHCDVwfA">
      "Learn Python Backend Development" of Tomi
    </app-link>
  </footer>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
