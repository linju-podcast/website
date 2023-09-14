import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import preact from '@astrojs/preact'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

// https://astro.build/config
export default defineConfig({
  site: 'https://linju.io',
  integrations: [
    tailwind(),
    preact(),
    {
      name: 'load-shikwasa',
      hooks: {
        'astro:config:setup': ({ injectScript, updateConfig }) => {
          updateConfig({
            vite: {
              plugins: [
                (() => {
                  const virtualModuleId = 'virtual:shikwasa';
                  const resolvedVirtualModuleId = '\0' + virtualModuleId;

                  return {
                    name: 'vite-plugin-shikwasa-init',
                    async resolveId(id) {
                      if (id === virtualModuleId) {
                        return resolvedVirtualModuleId;
                      }
                    },
                    async load(id) {
                      if (id === resolvedVirtualModuleId) {
                        return `
                        import { Player } from 'shikwasa'
                        export default Player
                      `;
                      }
                    },
                  };
                })()
              ],
            },
          });
          injectScript(
            'page',
            `
            import Player from 'virtual:shikwasa';
            globalThis.Player = Player;
            
            const player = new Player({
              container: () => document.querySelector('#shikwasa-player-container'),
              audio: {
                title: 'Hello World!',
                artist: 'Shikwasa FM',
              },
            })
            `,
          );
          injectScript(
            'page-ssr',
            `import 'shikwasa/dist/style.css';`
          );
        },
      }
    }],

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
