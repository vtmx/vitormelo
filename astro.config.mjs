import vue from '@astrojs/vue';
import netlify from '@astrojs/netlify/functions';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  adapter: netlify(),
});
