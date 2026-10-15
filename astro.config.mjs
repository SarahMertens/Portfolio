// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sarahmertens.netlify.app',
  redirects: {
    '/': '/nl/',
  },
});