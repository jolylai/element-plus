import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import styleImport from 'vite-plugin-style-import'

import markdown from 'vite-plugin-md'

import elementMarkdown from './website/plugin/vite-plugin-element-md'

// https://vitejs.dev/config/
export default defineConfig({
  root: './website',
  resolve: {
    alias: {
      'element-plus': path.resolve(__dirname, 'packages'),
      '@': path.resolve(__dirname, 'packages'),
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    elementMarkdown({}),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          resolveStyle: name => {
            name = name.slice(3)
            return `element-plus/theme-chalk/src/${name}.scss`
          },
          resolveComponent: name => {
            return `element-plus/packages/${name}`
          },
        },
      ],
    }),
  ],
})
