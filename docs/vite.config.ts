import { defineConfig, Plugin } from 'vite'
import path from 'path'
import { kebabCase } from 'lodash'
import Inspect from 'vite-plugin-inspect'

import Components from 'unplugin-vue-components/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import Docs from './.vitepress/plugins/docs'
import Demo from './.vitepress/plugins/demo'

export default defineConfig({
  // root: '../packages',
  // plugins: [Docs()],
})

defineConfig({
  plugins: [
    DefineOptions(),
    Inspect(),
    // @ts-ignore
    Components({
      dirs: ['/docs/components', 'packages/components'],
      deep: true,
      extensions: ['vue'],
      dts: true,
      include: [/\.vue$/, /\.md$/],
      // importPathTransform: path => {
      //
      //   return path.endsWith('.svg') ? `${path}?component` : undefined
      // },
      resolvers: [
        {
          type: 'component',
          resolve: (name) => {
            if (!name.match(/^Po[A-Z]/)) return

            return {
              name,
              importName: name,
              path: `pomelo-plus`,
            }
          },
        },
        {
          type: 'component',
          resolve: (name) => {
            if (!name.match(/^Demo[A-Z]/)) return
            const kebabCaseName = kebabCase(name)
            const componentName = kebabCaseName.split('-')[1]
            return {
              name: kebabCaseName,
              path: `@/demo/${componentName}/demos/${kebabCaseName}.vue`,
            }
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@/demo': path.resolve(__dirname, '../components'),
    },
  },
})
