<template>
    <div class="main">
        <Card title="Hi! I'm Malachi">
            <div class="profile">
                <img class="avatar" :src="gravatarUrl" alt="Profile picture" />
                I enjoy creating scalable and efficient applications that solve real problems and provide great user
                experiences.
            </div>
        </Card>
        <div v-for="project in projects" :key="project.name">
            <ProjectCard :project />
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
const gravatarUrl = `https://www.gravatar.com/avatar/fcea678228cec5ddcfe7deb46411693d?s=160&d=identicon`;
</script>

<style scoped lang="scss">
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile {
    display: flex;
    align-items: center;
    gap: 16px;
}

.avatar {
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    border-radius: var(--border-radius);
    border: 3px solid var(--card-border);
}

.tools {
    margin: 0;
}
</style>
