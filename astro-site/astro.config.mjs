// astro-site/astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://raisex-llc.github.io/ai-news-curation-site/",
  base: "/ai-news-curation-site/",
  output: "static", // ← ✅ GitHub Pages用に必要
  contentDir: "src/content",
  integrations: [
    tailwind(),
    mdx(),
    react(),      // ✅ 追加
    sitemap()
  ],
  outDir: "dist",
  build: {
    format: "directory",
  },
  markdown: {
    syntaxHighlight: "prism",
  },
});
