<template>
    <div class="blog-post">
        <Card :title="post.title">
            <slot />
        </Card>
    </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '#imports';

const props = defineProps<{
    post: BlogPost,
}>();
</script>

<style lang="scss" scoped>
.blog-post {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
