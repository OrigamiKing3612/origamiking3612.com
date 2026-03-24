//@ts-check
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.mdx' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        slug: z.string().describe("Should be the file name without prefix and '.mdx' extension"),
        timestamp: z.date(),
        tags: z.array(z.string()).optional(),
        color: z.enum(["red", "orange", "yellow", "green", "light-blue", "teal", "blue", "purple", "pink"]),


    }),
});

export const collections = { blog, };

