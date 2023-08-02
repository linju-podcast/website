import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://linju.io',
  integrations: [tailwind()],
  experimental: {
    assets: true,
  },
});
