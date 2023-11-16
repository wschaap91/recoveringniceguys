<script setup lang="ts">
    import { computed } from 'vue';
    import { areDatesOnSameDayOfYear } from '@/utilities/dates'
    import WidgetCard from './WidgetCard.vue';

    const props = defineProps<{ cards: Record<string, any>[], meditation: { date: Date, person: string }[] }>()

    function getMeetingName(val: string) {
        return val.split(': ')[1];
    }

    const meetings = computed(() => {
        return props.cards.map((c: any) => {
            const meetingDate = new Date(c.badges.due);

            const meditation = props.meditation.find((m: any) => {
                console.log(m.date, meetingDate)
                return areDatesOnSameDayOfYear(m.date, meetingDate);
            })

            return {
                date: new Date(c.badges.due).getDate(),
                title: getMeetingName(c.name),
                meditation: meditation?.person
            }

        })
    })
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
                    <span v-if="meditation"
                          class="u-subtext u-text-small">Meditatie: {{ meditation }}</span>
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

ul {
    gap: 0.25rem;
}
</style>