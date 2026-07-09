---
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://provider-evo.github.io',
  base: '/provider-docs',
  integrations: [react()],
});
