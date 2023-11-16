<script setup lang="ts">
  import { onMounted, watch } from 'vue';
  import { useGeneralStore } from './stores/generalStore';
  import { storeToRefs } from 'pinia';
  import router from './router';
  const store = useGeneralStore();
  const { token } = storeToRefs(store);

  onMounted(() => {
    watch(token, () => {
      if (token.value && token.value !== 'undefined') return;
      router.push({ name: 'login' });
    }, { immediate: true })
  })

</script>

<template>
  <router-view />
</template>
