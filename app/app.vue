<template>
    <Card title="I'm OrigamiKing3612">
        <p>
            I built
            <NuxtLink to="https://github.com/OrigamiKing3612/Terminal-Kingdom" external>Terminal Kingdom</NuxtLink>
            and
            <NuxtLink to="https://the-house-app.com" external>The House App</NuxtLink>.
        </p>

        <section>
            <h2>Some of my projects</h2>
            <ul class="projects">
                <li>
                    <NuxtLink to="https://github.com/OrigamiKing3612/The-House-App-Website" external>The House App
                    </NuxtLink> –
                    A cutting-edge app for tracking a house system
                </li>
                <li>
                    <NuxtLink to="https://github.com/OrigamiKing3612/Terminal-Kingdom" external>Terminal Kingdom
                    </NuxtLink> –
                    Text-based RPG
                </li>
                <li>
                    <NuxtLink to="https://github.com/OrigamiKing3612/Terminal-Kingdom-2.0" external>Terminal Kingdom 2.0
                    </NuxtLink> –
                    2D top-down version of Terminal Kingdom
                </li>
                <li>
                    <NuxtLink to="https://github.com/OrigamiKing3612/dotfiles" external>Dotfiles</NuxtLink> –
                    My personal dev setup
                </li>
            </ul>
        </section>

        <section>
            <h2>Currently</h2>
            <ul>
                <li>Preparing <NuxtLink to="https://github.com/OrigamiKing3612/The-House-App-Website" external>The House
                        App</NuxtLink> for
                    production</li>
                <li>Learning Godot 4 for 2D game development</li>
                <li>Experimenting with workflow automation using n8n</li>
            </ul>
        </section>

        <section>
            <h2>What I use</h2>
            <ul class="tools">
                <li><strong>Languages:</strong> Go, TypeScript, Swift, Vue</li>
                <li><strong>Tools:</strong> Neovim, Nuxt 4, Obsidian</li>
            </ul>
        </section>
    </Card>
</template>

<script setup lang="ts">
// no script needed yet
</script>

<style scoped lang="scss">
@use "@/assets/styles/main.scss" as *;

// .profile {
//     max-width: 800px;
//     margin: 0 auto;
//     font-family: system-ui, sans-serif;
//     line-height: 1.6;
//
//     h1 {
//         font-size: 2rem;
//         margin-bottom: 0.5rem;
//
//         .highlight {
//             color: var(--primary);
//         }
//     }
//
//     h2 {
//         margin-top: 2rem;
//         font-size: 1.4rem;
//         border-bottom: 2px solid #ddd;
//         padding-bottom: 0.25rem;
//     }
//
//     p {
//         margin: 0.5rem 0 1rem;
//     }
//
//     ul {
//         padding-left: 1.2rem;
//
//         li {
//             margin: 0.4rem 0;
//         }
//     }
//
//     .projects li a {
//         font-weight: 600;
//     }
// }</style>
