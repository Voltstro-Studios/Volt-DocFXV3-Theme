import { defineConfig, UserConfig } from 'vite'
import { resolve } from 'path'
import viteVDocfx from './vite-plugin-vdocfx'

export default defineConfig(({command, mode}) => {
  let config: UserConfig = {
    build: {
      rollupOptions: {
        inlineDynamicImports: true,
        input: {
            main: resolve(__dirname, 'src/main.ts')
        },
        output: {
            manualChunks: () => 'docfx',
            entryFileNames: () => 'docfx.js',
            assetFileNames: () => '[name][extname]'
        },
      },
    },
    server: {
      base: '/samples/_site/',
      origin: 'http://127.0.0.1:8080'
    }
  }

  if(mode == 'development') {
    config.plugins = [viteVDocfx()]
  }

  return config;
})