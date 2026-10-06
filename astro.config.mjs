// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://divyanshugrover.github.io',
  output: 'static',
  compressHTML: true,
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
