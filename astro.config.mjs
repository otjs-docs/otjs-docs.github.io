import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://ot.js.org",
  compressHTML: true,
  integrations: [
    icon(),
    react(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: 'github-dark-dimmed' },
      gfm: true,
    }),
    sitemap(),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  redirects: {
    "/docs": "/docs/getting-started"
  },
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
  },
});
