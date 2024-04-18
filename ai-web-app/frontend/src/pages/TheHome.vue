<template>
  <div class="text-center flex-grow container mx-auto my-10 px-4 sm:px-0">
    <div class="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md flex-col">
      <section class="text-center">
        <h1 class="text-2xl font-semibold mb-4">
          Welcome to the AI Blog Generator
        </h1>
        <p class="text-gray-700">
          Generate high-quality blog articles from YouTube videos using
          artificial intelligence. Simply enter the link to the YouTube video
          below and let the AI create the content for you!
        </p>
      </section>
      <section>
        <h2 class="sub-section">Let's generate a blog post</h2>
        <form
          @submit.prevent="generate"
          class="flex items-center justify-around gap-4"
        >
          <label class="flex-grow flex items-center space-x-4">
            <span> YouTube link: </span>
            <input
              type="url"
              name="yt-link"
              id="yt-link"
              placeholder="Paste the YouTube link here..."
              v-model="youtubeLink"
              class="flex-grow p-2 border border-blue-400 rounded-md"
            />
          </label>

          <button
            class="bg-blue-600 hover:bg-blue-900 text-white px-4 py-2 rounded-md"
          >
            Generate
          </button>
        </form>
      </section>
      <section>
        <h2 class="sub-section">Generated Blog article</h2>

        <app-spinner v-if="submitted"></app-spinner>
        <div v-if="!generated" class="result">No result yet.</div>
        <div v-else class="result">
          {{ generationResult }}
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const youtubeLink = ref('');
const generationResult = ref('...');
const submitted = ref(false);
const generated = ref(false);
const generate = () => {};
</script>

<style scoped>
.sub-section {
  @apply text-xl font-semibold my-4;
}
.result {
  @apply mt-2 text-gray-700 space-y-4;
}
</style>
