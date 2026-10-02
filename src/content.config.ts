import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const seoSchema = z.object({
  title: z.string().min(5).max(120),
  description: z.string().min(15).max(160),
  pageType: z.enum(["website"]).default("website"),
  robots: z
    .object({
      index: z.boolean().default(true),
      follow: z.boolean().default(true),
    })
    .prefault({}),
});

export const collections = {
  pages: defineCollection({
    loader: glob({ base: "./src/content/pages", pattern: "**/*.{md,mdx}" }),
    schema: () =>
      z.object({
        seo: seoSchema,
        updated_date: z
          .date()
          .describe("The date this content was last updated."),
      }),
  }),
};
