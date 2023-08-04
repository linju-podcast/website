import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import Icons from 'unplugin-icons/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://linju.io',
  integrations: [tailwind(), preact()],
  experimental: {
    assets: true,
  },

  vite: {
    plugins: [
      Icons({
        scale: null,
        compiler: 'jsx',
        jsx: 'preact',
        // customCollections: {
        //   app: FileSystemIconLoader('./src/icons'),
        // },
      }),
    ],
  },
});
