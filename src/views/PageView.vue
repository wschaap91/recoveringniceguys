<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue'
  // import { useGeneralStore } from '@/stores/generalStore'
  // const store = useGeneralStore();

  import TheLogo from '@/components/TheLogo.vue'
  import TheLinks from '@/components/TheLinks.vue'
  import TheBuddys from '@/components/TheBuddys.vue'
  import TheNiceGuys from '@/components/TheNiceGuys.vue'
  import TheMeetings from '@/components/TheMeetings.vue';
  import { generateDateFromDutchString } from '@/utilities/dates';
  import router from '@/router'

  const lists = ref<any>([]);
  const meetingCards = ref<any>([]);
  const meditation = ref<{ date: Date, person: string }[]>([]);

  async function getBoards() {
    lists.value = await window.Trello.get(`boards/${import.meta.env.VITE_TRELLO_BOARD_ID}/lists`);

    const listId = lists.value.find((l: any) => l.name.includes('Meetings'))?.id;

    if (listId) {
      meetingCards.value = await window.Trello.get(`lists/${listId}/cards`);
      const comingUpCard = meetingCards.value.findIndex((c: any) => {
        return c.labels.length === 0;
      })
      meetingCards.value.splice(comingUpCard, 1);
    }

    const _tempMeditation = await window.Trello.get(`cards/${import.meta.env.VITE_MEDITATION_CARD_ID}`)

    let year: number;
    if (_tempMeditation) {
      meditation.value = _tempMeditation.desc.split('\n').filter(Boolean).reduce((acc: Record<string, any>[], curr: string) => {
        const [date, person] = curr.split(': ');

        if (date && !person) { year = parseInt(date); return acc; };

        // console.log(`date: ${new Date(date)}`, year, person);

        if (generateDateFromDutchString(date, year) < new Date()) return acc;

        acc.push({
          date: generateDateFromDutchString(date, year),
          person
        })

        return acc;
      }, [])
    }

  }

  const comingUpMeetings = computed(() => {
    return meetingCards.value.filter((card: any) => {
      return card.badges.dueComplete === false;
    })
  })

  onMounted(async () => {
    window.Trello.authorize({
      type: 'popup',
      name: 'Recovering Nice Guys',
      success: getBoards,
      error: () => {
        router.push({ name: 'login' })
      }
    })
  });




</script>

<template>
  <div class="the-layout">
    <aside class="sidebar-left">
      <TheLinks />
    </aside>

    <main>
      <TheLogo />
      <TheNiceGuys />
      <ul v-if="lists">
        <li v-for="list in lists"
            :key="list.id">{{ list.name }}</li>
      </ul>

    </main>

    <aside class="sidebar-right">
      <h2>November 2023</h2>
      <TheMeetings :cards="comingUpMeetings"
                   :meditation="meditation" />
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