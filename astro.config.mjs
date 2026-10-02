// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

// https://astro.build/config
export default defineConfig({
  site: "https://venoxity.dev",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          properties: { class: "anchor", ariaLabel: "Link to section" },
          content: { type: "text", value: "#" },
        },
      ],
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
