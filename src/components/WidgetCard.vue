<script setup lang="ts">
    const props = defineProps<{
        title: String,
        subtitle?: String
    }>()
</script>
<template>
    <article>
        <section>
            <h2>{{ props.title }}</h2>
            <span v-if="props.subtitle"
                  class="u-subtext">{{ props.subtitle }}</span>
        </section>
        <slot></slot>
    </article>
</template>
<style scoped lang="scss">
article {
    display: inline-flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1.5rem;
    background-color: var(--rng-grey-50);
    border-radius: 5px;
    color: var(--rng-black);
}
</style>