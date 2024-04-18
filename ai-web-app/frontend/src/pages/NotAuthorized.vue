<template>
  <section class="block">
    <h1 class="text-2xl">⛔ Sorry ⛔</h1>
    <p>The page requested is off limit...</p>
    <router-link :to="{ name: RouteName.TheHome }"
      >Back to a safe place</router-link
    >
  </section>
</template>

<script setup lang="ts">
import { RouteName } from '@/enums/RouteName';
</script>

<style scoped></style>
