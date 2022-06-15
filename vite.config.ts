import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      inlineDynamicImports: true,
      input: {
          main: resolve(__dirname, 'src/main.ts')
      },
      output: {
          manualChunks: () => "docfx",
          entryFileNames: () => "docfx.js",
          assetFileNames: () => "[name][extname]"
      },
    },
  }
})