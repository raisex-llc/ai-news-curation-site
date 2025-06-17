// 📑 Markdown スキーマ `astro-site/src/content/config.ts`

import { defineCollection, z } from "astro:content";

export const collections = {
  posts: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.coerce.date(),
      source: z.string(),
      tags: z.array(z.string()).optional(),
      url: z.string().url(),
    }),
  }),
};
