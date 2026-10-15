// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sarahmertens.netlify.app',

  redirects: {
    '/': '/nl/',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});