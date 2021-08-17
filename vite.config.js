import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Markdown from './markdown'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/packages'),
      'pomelo-plus': path.resolve(__dirname, '/packages'),
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
  ],
})
