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
        type: z.enum(['release', 'announcement']),
        timestamp: z.date(),
        tags: z.array(z.string()),
    }),
});

export const collections = { blog, };

