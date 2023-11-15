<script setup>
import TheLogo from './components/TheLogo.vue'
import TheLinks from './components/TheLinks.vue'
import TheBuddys from './components/TheBuddys.vue'
import TheNiceGuys from './components/TheNiceGuys.vue'
import TheMeetings from './components/TheMeetings.vue';
</script>

<template>
  <div class="the-layout">
    <aside class="sidebar-left">
      <TheLinks />
    </aside>

    <main>
      <TheLogo />
      <TheNiceGuys />
    </main>

    <aside class="sidebar-right">
      <h2>November 2023</h2>
      <TheMeetings />
      <TheBuddys />
    </aside>
  </div>
</template>

<style scoped lang="scss">
.the-layout {
  display: grid;
  grid-template-columns: auto repeat(3, 1fr) auto;
  grid-template-areas: "sidebar-left main main main sidebar-right";
  grid-auto-rows: auto;
  gap: 1rem;
  padding: 1rem;

  main {
    grid-area: main;
  }

  aside {
    grid-area: sidebar-left;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;


  }

  .sidebar-right {
    grid-area: sidebar-right;
  }
}
</style>