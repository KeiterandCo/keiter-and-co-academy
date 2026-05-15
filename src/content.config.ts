import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const modules = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/modules' }),
  schema: z.object({
    title: z.string(),
    partSlug: z.enum(['welcome', 'tools', 'how-we-think', 'how-we-build', 'business', 'practice']),
    moduleNumber: z.string(),
    learningGoal: z.string(),
    learningResourceType: z.enum(['reading', 'walkthrough', 'practice', 'reference']),
    estimatedMinutes: z.union([z.number(), z.literal('Variable')]),
    prerequisites: z.array(z.string()).default([]),
    sourceOfTruth: z.array(z.string()).default([]),
    lastReviewed: z.coerce.date(),
    audioFile: z.string().optional(),
    transcriptFile: z.string().optional(),
    interactiveComponent: z.string().optional(),
  }),
});

const glossary = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/glossary' }),
  schema: z.object({
    term: z.string(),
    definition: z.string(),
    seeAlso: z.array(z.string()).default([]),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    fileType: z.enum(['template', 'cheat-sheet', 'worked-example']),
    downloadPath: z.string().optional(),
    downloads: z
      .array(
        z.object({
          label: z.string(),
          path: z.string(),
        })
      )
      .default([]),
  }),
});

export const collections = { modules, glossary, resources };
