import { defineCollection, z } from 'astro:content';
import { image } from 'astro:assets';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().optional(),
    image: image().optional(),
    tags: z.array(z.string()).default([]),
    externalLink: z.string().optional(),
  }),
});

export const collections = { posts };