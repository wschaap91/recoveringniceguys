<script setup lang="ts">
    import { ref } from 'vue';
    import WidgetCard from './WidgetCard.vue';

    const meetings = ref([
        {
            date: 20,
            title: 'Truth speaking',
            meditation: 'Wouter S'
        },
        {
            date: 27,
            title: 'Celebrations',
            meditation: 'Wouter E'
        },

    ])
</script>

<template>
    <WidgetCard title="Meetings"
                subtitle="Coming up:">
        <ul class="u-flex u-flex-column">
            <li v-for="{ date, title, meditation } in meetings"
                class="meeting-card">
                <span class="meeting-card__date">
                    {{ date }}
                </span>
                <div>
                    <p>{{ title }}</p>
                    <span class="u-subtext u-text-small">Meditatie: {{ meditation }}</span>
                </div>
            </li>
        </ul>
    </WidgetCard>
</template>

<style lang="scss" scoped>
.meeting-card {
    display: inline-flex;
    padding-block: 0.75rem;
    padding-inline-end: 1rem;
    background-color: var(--rng-red-50);
    align-items: center;
    gap: 1rem;
    border-radius: 3px;

    &__date {
        display: grid;
        place-items: center;
        background-color: color-mix(in oklab, var(--rng-red), transparent 85%);
        padding: 0.25rem;
        width: 2rem;
        aspect-ratio: 1/1;
        border-top-right-radius: 100px;
        border-bottom-right-radius: 100px;
        font-weight: bold;
    }
}
</style>