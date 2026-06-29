// @ts-check

import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import expressiveCode from "astro-expressive-code";

export default defineConfig({
    site: "https://origamiking3612.com",
    output: "static",
    integrations: [
        solidJs(),
        sitemap(),
        expressiveCode({
            themes: ["catppuccin-latte", "catppuccin-mocha"],
            useDarkModeMediaQuery: false,
            themeCssSelector: (theme) => {
                return theme.name === "catppuccin-latte" ? ":root" : ":root.dark";
            },
        }),
        mdx(),
    ],
    experimental: {
        contentIntellisense: true,
    },
    prefetch: true,
    fonts: [
        {
            name: "Handlee",
            provider: fontProviders.google(),
            cssVariable: "--font-handlee",
            weights: [400, 500, 600, 700, 800],
            styles: ["normal"],
        },
    ],
    markdown: {
        shikiConfig: {
            theme: "github-dark",
        },
    },
});
