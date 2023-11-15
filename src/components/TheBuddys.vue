<script setup lang="ts">
    import { ref } from 'vue';
    import WidgetCard from './WidgetCard.vue';

    const buddys = ref([['Wouter E', 'Wouter S'], ['Jan', 'Robert'], ['Jefta', 'Fedor']]);
</script>
<template>
    <WidgetCard title="Buddy Schema"
                subtitle="13 nov tm 27 nov">
        <table class="buddy-table">
            <tr v-for="[bud1, bud2] in buddys"
                :key="`${bud1 + bud2}`">
                <td>{{ bud1 }}</td>
                <td><i class="u-subtext fa-sharp fa-solid fa-arrows-left-right"></i></td>

                <td>{{ bud2 }}</td>
            </tr>
        </table>
    </WidgetCard>
</template>

<style lang="scss" scoped>
.buddy-table {
    td:nth-child(2) {
        padding-inline: 0.5rem;
    }

    td {
        padding-block: 0.125rem;
    }

}
</style>