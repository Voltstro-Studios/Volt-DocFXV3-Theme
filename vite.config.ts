import { defineConfig, UserConfig } from 'vite'
import { resolve } from 'path'
import {terser} from 'rollup-plugin-terser'
import viteVDocfx from './vite-plugin-vdocfx'

export default defineConfig(({command, mode}) => {
  let config: UserConfig = {
    build: {
      rollupOptions: {
        input: {
            main: resolve(__dirname, 'src/main.ts')
        },
        output: {
            entryFileNames: () => 'docfx.js',
            assetFileNames: () => '[name][extname]',
            sourcemap: false
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
  else {
    config.build.rollupOptions.plugins = [terser({
      format: {
          comments: false
      },
      compress: {
          defaults: true,
          drop_console: true,
          drop_debugger: true
      },
      ecma: 2020
    })]
  }

  return config;
})