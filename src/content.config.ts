import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),

  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(160),
      featured: z.boolean().default(false),
      order: z.number(),
      year: z.number(),
      context: z.enum(['school', 'personal', 'volunteer', 'internship']),
      role: z.string(),
      tech: z.array(z.string()).min(1),
      github: z.url().optional(),
      demo: z.url().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = { projects };
