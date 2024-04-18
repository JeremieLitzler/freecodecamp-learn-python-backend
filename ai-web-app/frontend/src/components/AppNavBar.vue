<template>
  <nav class="flex items-center gap-2">
    <app-link v-if="loggedIn" :to="{ name: RouteName.UserLogout }"
      >Logout</app-link
    >
    <app-link v-if="!loggedIn" :to="{ name: RouteName.UserLogin }"
      >Login</app-link
    >
    <app-link v-if="!loggedIn" :to="{ name: RouteName.UserRegister }"
      >Register</app-link
    >
  </nav>
</template>

<script setup lang="ts">
import { useAuth } from '@/composables/useAuth';
import { RouteName } from '@/enums/RouteName';
import { computed } from 'vue';

const loggedIn = computed(() => useAuth().isLoggedIn.value);
console.log('app-nav>loggedIn', loggedIn.value);
</script>

<style scoped></style>
@/composables/useAuth
