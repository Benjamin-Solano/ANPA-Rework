// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Usado para generar URLs absolutas (Open Graph, sitemap). Ajustar al dominio real.
  site: 'https://anpa.or.cr',
  integrations: [react()],
});
