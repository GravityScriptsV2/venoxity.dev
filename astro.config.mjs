// @ts-check

import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://venoxity.dev",
  trailingSlash: "never",
  integrations: [mdx({ optimize: true })],
  vite: {
    plugins: [tailwindcss()],
  },
});
