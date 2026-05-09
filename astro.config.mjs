// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  site: 'https://learn.keiterandco.com',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), mdx(), sitemap(), pagefind()],
  build: {
    format: 'directory',
  },
});