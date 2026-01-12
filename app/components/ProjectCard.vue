<template>
    <NuxtLink :to="project.link" external class="link">
        <Card :title="project.name">
            <div class="project-card">
                <NuxtImg :src="project.images.dark ? project.images.dark : project.images.light"
                    :alt="`${project.name} Preview Image`" class="image" :class="{ border: !project.hide_border }" />
                <div class="content">
                    <span class="description">{{ project.description }}</span>
                </div>
            </div>
        </Card>
    </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
    project: Project,
}>();

const image = computed(() => {
    const images = props.project.images;
    if (images.dark) {
        return useColorMode().value === 'dark' ? images.dark : images.light;
    }
    return images.light;
})
</script>

<style lang="scss" scoped>
.image {
    max-width: 98%;
    max-height: 100%;
    border-radius: var(--border-radius);

}

.border {
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
