<template>
  <app-credentials-form @@handle-auth="nextPage"> Login </app-credentials-form>
</template>

<script setup lang="ts">
import appendRouteHelper from '@/helpers/appendRouteHelper';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const nextPage = () =>
  router.push(appendRouteHelper().toSuccessRedirect(route));
</script>

<style scoped></style>
