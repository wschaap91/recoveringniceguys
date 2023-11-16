<script setup lang="ts">
  import { watch } from 'vue';
  import { useGeneralStore } from './stores/generalStore';
  import { storeToRefs } from 'pinia';
  import router from './router';
  const store = useGeneralStore();
  const { token } = storeToRefs(store);

  watch(token, () => {
    if (token.value && token.value !== 'undefined') return;
    router.push({ name: 'login' });
  })
</script>

<template>
  <router-view />
</template>
