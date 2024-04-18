<template>
  <app-credentials-form @@handle-auth="nextPage">
    <template v-slot:title>Register</template>
    <template v-slot:submit-btn>Register</template>
  </app-credentials-form>
</template>

<script setup lang="ts">
import appendRouteHelper from '@/helpers/appendRouteHelper';
import { useRouter } from 'vue-router';

const router = useRouter();
const nextPage = () => router.push(appendRouteHelper().toHomePage());
</script>

<style scoped></style>
