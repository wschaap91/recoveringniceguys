<script setup lang="ts">
    import WidgetCard from './WidgetCard.vue';

</script>
<template>
    <WidgetCard title="Belangrijke links">
        <ul class="card-list">
            <li>
                <a class="card"
                   href="https://us02web.zoom.us/j/82471309568?pwd=OXJiY0ZBT2htQ2hRQVBBRnl4UUVvUT09"><i
                       class="fa-sharp fa-regular fa-campfire"></i><span>Zoom meeting</span></a>
            </li>
            <li>
                <a class="card"
                   href="https://docs.google.com/document/d/1-xyIq-GCd03Ynq5Nn-sJKhFKU3uheNPa2kuFiIcYKpM/edit?usp=sharing"><i
                       class="fa-sharp fa-solid fa-file-word"></i><span>Container 2.0</span></a>
            </li>
        </ul>
    </WidgetCard>
</template>



<style scoped lang="scss">
a {
    text-decoration: none;
    color: var(--rng-black);
}

.card {
    display: inline-flex;
    align-items: center;
    --card-bg: var(--rng-red-50);
    background-color: var(--card-bg);
    box-shadow: inset 0 0 0 2px color-mix(in oklab, var(--rng-red), transparent 85%);
    border-radius: 6px;
    padding: 0.75rem 1rem;
    gap: 0.5rem;
}

.card-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
</style>
