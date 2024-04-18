<template>
  <header class="bg-blue-600 p-4 text-white flex justify-between align-middle">
    <p class="text-3xl font-bold">
      <app-link :to="{ name: RouteName.TheHome }"> AI Blog App </app-link>
    </p>
    <app-nav-bar />
  </header>
</template>

<script setup lang="ts">
import { RouteName } from '@/enums/RouteName';
</script>

<style scoped></style>
