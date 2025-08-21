<template>
    <div class="card">
        <h4 v-if="props.title" class="title">
            {{ props.title }}
        </h4>
        <div class="v-container">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title?: string,
}>();

const padding_top = computed(() => {
    return props.title ? '50px' : '20px';
});
</script>


<style lang="scss" scoped>
.card {
    position: relative;
    padding: v-bind(padding_top) 0px 20px 0px;
    background: var(--card-background);
    border-radius: 1rem;
    margin: 1.5rem 0;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--card-border);
    transition: transform 0.2s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .title {
        position: absolute;
        top: -12px;
        left: 15px;
        font-size: 1.4em;
        letter-spacing: -1px;
        text-align: left;
    }

    .v-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 0 20px;

        :deep(form),
        :deep(.card-ignore),
        :deep(.link) {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        :deep(.disclosure-group) {
            margin: 0 -10px;
        }
    }
}

:deep(p) {
    text-align: left;
}
</style>
