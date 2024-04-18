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
  <router-link v-else v-bind="$props" class="underline hover:outline-dashed">
    <slot></slot>
  </router-link>
</template>
<script setup>
import { computed, guardReactiveProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  ...RouterLink.props,
});

const isExternal = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http');
});
</script>
