<template>
  <nav class="spaced-nav-link">
    <div v-if="loggedIn" class="spaced-nav-link">
      <app-link :to="{ name: RouteName.BlogIndex }">Blog</app-link>
      <app-link :to="{ name: RouteName.UserLogout }">Logout</app-link>
    </div>
    <div v-else class="spaced-nav-link">
      <app-link :to="{ name: RouteName.UserLogin }">Login</app-link>
      <app-link :to="{ name: RouteName.UserRegister }">Register</app-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuth } from '@/composables/useAuth';
import { RouteName } from '@/enums/RouteName';
import { computed } from 'vue';

const loggedIn = computed(() => useAuth().isLoggedIn.value);
console.log('app-nav>loggedIn', loggedIn.value);
</script>

<style scoped>
.spaced-nav-link {
  @apply flex items-center gap-2;
}
</style>
