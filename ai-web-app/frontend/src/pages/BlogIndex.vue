<template>
  <div class="text-center flex-grow container mx-auto my-10 px-4 sm:px-0">
    <div class="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md flex-col">
      <section class="text-center">
        <h1 class="text-2xl font-semibold mb-4">Blog</h1>
        <router-link
          v-for="article in data"
          :key="article.id"
          :to="{ name: RouteName.BlogDetails, params: { id: article.id } }"
          class="hover:underline"
        >
          <article class="bg-orange-100 text-left mb-4 p-6 shadow-md">
            <h2 class="text-xl font-semibold">➡️ {{ article.title }}</h2>
          </article>
        </router-link>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
//import { ref } from 'vue';
import data from '@/posts.json';
import { RouteName } from '@/enums/RouteName';

//const articles = ref(data);
</script>

<style scoped></style>
