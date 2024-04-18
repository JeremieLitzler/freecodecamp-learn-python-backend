<template>
  <div class="text-center flex-grow container mx-auto my-10 px-4 sm:px-0">
    <div class="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md flex-col">
      <section class="text-left">
        <h1 class="text-2xl font-semibold mb-4">{{ article?.title }}</h1>
        <app-link :to="article?.ytLink">📺 View video</app-link>
        <hr class="my-4" />
        <p v-html="article?.html"></p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import data from '@/posts.json';
import { computed } from 'vue';

const { id } = defineProps<{ id: string }>();
console.log('BlogDetails', id);

const article = computed(() => data.find((item) => item.id === id));
</script>

<style scoped>
p {
  margin-bottom: 1em;
}
</style>
