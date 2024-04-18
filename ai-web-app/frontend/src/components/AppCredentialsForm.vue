<template>
  <div class="text-center flex-grow container mx-auto my-10 px-4 sm:px-0">
    <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md flex-col">
      <section>
        <h1 class="text-2xl font-semibold mb-8">
          <slot name="title"> Login </slot>
        </h1>
        <form @submit.prevent="submit" class="flex flex-col">
          <slot name="inputs">
            <label class="flex-grow flex flex-col items-start gap-4 mb-4">
              <p class="font-bold">Username:</p>
              <input
                type="text"
                name="yt-link"
                placeholder="Your username"
                v-model="form.username"
                class="w-full p-2 border border-blue-400 rounded-md"
              />
            </label>
            <label class="flex-grow flex flex-col items-start gap-4 mb-4">
              <p class="font-bold">Password:</p>
              <input
                type="password"
                name="yt-link"
                placeholder="Your password"
                v-model="form.password"
                class="w-full p-2 border border-blue-400 rounded-md"
              />
            </label>
          </slot>
          <button
            class="bg-blue-600 hover:bg-blue-900 text-white px-4 py-2 rounded-md"
          >
            <slot name="submit-btn"> Login </slot>
          </button>
        </form>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type CredentialsData from '@/types/CredentialsData.ts';
import { useAuth } from '@/composables/useAuth';
import { useRouter } from 'vue-router';
import { RouteName } from '@/enums/RouteName';

const router = useRouter();
const form = ref<CredentialsData>({ username: null, password: null });
const formValid = computed(() => form.value.username && form.value.password);
/**
 * This is a simple app, so the login and register execute the same logic
 */
const submit = () => {
  if (!formValid.value) {
    alert('Please provide your credentials');
    return;
  }
  useAuth().authenticate(form.value);
  router.push({ name: RouteName.TheHome });
};
</script>

<style scoped></style>
@/composables/useAuth
