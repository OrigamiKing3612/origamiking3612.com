<template>
    <NuxtLink :to="props.link" external class="link">
        <Card :title="name">
            <div class="project-card">
                <NuxtImg :src="props.image" :alt="`${props.name} Preview Image`" class="image" />
                <div class="content">
                    <span class="description">{{ props.description }}</span>
                </div>
            </div>
        </Card>
    </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
    name: string,
    link: string,
    description: string,
    image: string,
}>();
</script>

<style lang="scss" scoped>
.image {
    max-width: 98%;
    max-height: 100%;
    border-radius: var(--border-radius);
    border: 3px solid var(--card-border);
}

.project-card {
    text-decoration: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    align-items: center;
    gap: 1rem;

    :deep() {
        flex: 1;
        overflow: auto;
        max-width: 100%;
    }
}

.content {
    // border-left: 2px solid var(--card-border);
    text-align: left;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

.description {
    text-decoration: none;
    color: var(--text);
}
</style>
