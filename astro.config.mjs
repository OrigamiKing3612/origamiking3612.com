// @ts-check

import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

import solidJs from "@astrojs/solid-js";

export default defineConfig({
    site: "https://origamiking3612.com",
    output: "static",
    integrations: [solidJs(), sitemap(), mdx({
        optimize: false, // allow for custom components https://github.com/withastro/astro/issues/14611
    })],
    experimental: {
        contentIntellisense: true,
        rustCompiler: true,
    },
    prefetch: true,
    fonts: [{
        name: "Handlee",
        provider: fontProviders.google(),
        cssVariable: "--font-handlee",
        weights: [400, 500, 600, 700, 800],
        styles: [
            "normal"
        ],
    }, {
        name: "DM Sans",
        provider: fontProviders.google(),
        cssVariable: "--font-dm-sans",
        weights: [400, 500, 600, 700, 800],
        styles: [
            "normal"
        ]
    }]
});
