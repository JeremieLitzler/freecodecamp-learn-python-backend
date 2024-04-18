<template>
  <section class="block">
    <h1 class="text-2xl">
      Oops, the link isn't valid or doesn't exist anymore.
    </h1>
    <router-link :to="{ name: RouteName.TheHome }"
      >Back to a safe place</router-link
    >
  </section>
</template>

<script setup lang="ts">
import { RouteName } from '@/enums/RouteName';
</script>

<style scoped></style>
