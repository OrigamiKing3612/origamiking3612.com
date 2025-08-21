import { defineNuxtConfig } from 'nuxt/config';

const title = "OrigamiKing3612";
const description = "OrigamiKing3612's personal website"

export default defineNuxtConfig({
    future: {
        compatibilityVersion: 4
    },
    compatibilityDate: '2025-07-15',
    app: {
        head: {
            htmlAttrs: {
                lang: "en"
            },
            title: title,
            meta: [
                { name: "description", content: title },
                { name: "publisher", content: "OrigamiKing3612" },
                { name: "keywords", content: "OrigamiKing3612" },
                { name: "theme-color", media: "(prefers-color-scheme: light)", content: "#ffffff" },
                { name: "theme-color", media: "(prefers-color-scheme: dark)", content: "#000000" },
                { name: "background-color", media: "(prefers-color-scheme: light)", content: "#ffffff" },
                { name: "background-color", media: "(prefers-color-scheme: dark)", content: "#000000" },
                { property: "og:locale", content: "en_US" },
                { property: "og:type", content: "website" },
                { property: "og:title", content: title },
                { property: "og:site_name", content: title },
                { property: "og:description", content: description },
                { property: "og:url", content: "https://origamiking3612.com" },
            ],
            link: [
            ]
        },
        viewTransition: true
    },
    nitro: {
        prerender: {
            failOnError: true,
            crawlLinks: true,
            routes: ["/sitemap.xml", "/robots.txt"],
        },
        logLevel: 3,
    },
    ssr: true,
    modules: ["@nuxtjs/color-mode", "@nuxt/eslint", "@nuxtjs/robots", "@nuxtjs/sitemap"],
    devtools: { enabled: true },
    css: ['~/assets/styles/main.scss'],
    components: [
        { path: "~/components/", pathPrefix: false }
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: ``
                }
            }
        }

    },
    colorMode: {
        classSuffix: "",
        preference: "system",
        fallback: "dark",
    },
    site: {
        url: 'https://origamiking3612.com',
        name: title,
    },
    robots: {
        sitemap: '/sitemap.xml',
    }
})

