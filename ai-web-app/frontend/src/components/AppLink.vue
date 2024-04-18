<template>
  <a
    v-if="isExternal"
    :href="to"
    target="_blank"
    rel="noopener"
    class="underline hover:outline-dashed"
  >
    <slot />
  </a>
  <router-link
    v-else
    v-bind="$props"
    :to="$props.to"
    class="underline hover:outline-dashed"
  >
    <slot></slot>
  </router-link>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  // @ts-ignore
  ...RouterLink.props,
});

console.log('app-link', props);

const isExternal = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http');
});
</script>
