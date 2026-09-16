import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    summary: z.string(),
    year: z.string(),
    role: z.string(),
    status: z.string(),
    stack: z.array(z.string()),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, posts };
