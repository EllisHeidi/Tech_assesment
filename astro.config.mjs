// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ellisheidi.github.io',
  base: '/Tech_assesment',
  vite: {
    plugins: [tailwindcss()]
  }
});