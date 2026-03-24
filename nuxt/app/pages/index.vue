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


.tools {
    margin: 0;
}
</style>
