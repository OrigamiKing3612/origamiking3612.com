<template>
    <div class="main">
        <Card title="I'm OrigamiKing3612">
            I enjoy creating scalable and efficient applications that solve real problems and provide great user
            experiences.
        </Card>
        <div v-for="project in projects" :key="project.name">
            <Project :name="project.name" :link="project.link" :description="project.description"
                :image="project.image" />
        </div>
        <Card title="My Skills">
            <ul class="tools">
                <li><b>Languages:</b>
                    <ul>
                        <li>Go</li>
                        <li>Typescript</li>
                        <li>Swift</li>
                        <li>Vue</li>
                    </ul>
                </li>
                <li><b>Tools:</b>
                    <ul>
                        <li>Git</li>
                        <li>Docker</li>
                        <li>Vite</li>
                        <li>Nuxt 4</li>
                    </ul>
                </li>
            </ul>
        </Card>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
