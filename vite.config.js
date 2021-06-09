import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import styleImport from 'vite-plugin-style-import'
import hljs from 'highlight.js'

import markdown from 'vite-plugin-md'

// import elementMarkdown from './website/plugin'

const highlight = (str, lang) => {
  if (!lang || !hljs.getLanguage(lang)) {
    return '<pre><code class="hljs">' + str + '</code></pre>'
  }
  const html = hljs.highlight(lang, str, true, undefined).value
  return `<pre><code class="hljs language-${lang}">${html}</code></pre>`
}

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
    markdown({
      markdownItOptions: {
        highlight,
      },
    }),
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
