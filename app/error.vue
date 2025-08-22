<template>
    <div class="all">
        <h1>An Error Occurred</h1>
        <h2 v-if="error">
            {{ error.statusCode }}
        </h2>
        <p v-if="error?.message">
            Message: {{ error.message }}
        </p>
        <h2 v-else>
            No Status Code
        </h2>

        <AppButton @click="handleError">
            Back
        </AppButton>
    </div>
</template>
<script setup lang="ts">
import type { NuxtError } from "#app";

const handleError = () => clearError({ redirect: "/" });

defineProps({
    error: Object as () => NuxtError,
});
</script>
<style scoped lang="scss"></style>
