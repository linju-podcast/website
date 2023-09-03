import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import preact from '@astrojs/preact'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

// https://astro.build/config
export default defineConfig({
  site: 'https://linju.io',
  integrations: [tailwind(), preact()],

  vite: {
    plugins: [
      Icons({
        scale: null,
        compiler: 'jsx',
        jsx: 'preact',
        customCollections: {
          'my-icons': FileSystemIconLoader('./src/assets/icons', (svg) =>
            svg.replace(/^<svg /, '<svg fill="currentColor" ')
          )
        }
      })
    ]
  }
})
