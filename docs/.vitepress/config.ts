import { defineConfig } from 'vitepress'
import path from 'path'
import { kebabCase } from 'lodash'

import Components from 'unplugin-vue-components/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'

import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  title: 'Pomelo Plus',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,

  themeConfig: {
    repo: 'jolylai/pomelo-plus',
    docsDir: 'packages',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav: [
      {
        text: '组件',
        link: '/components/button/',
        activeMatch: '^/components/',
      },
    ],

    sidebar: {
      '/components/': getComponentsSidebar(),
    },
  },

  vite: {
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
  },
})

function getComponentsSidebar() {
  return [
    {
      text: '通用组件',
      children: [{ text: 'Button 按钮', link: '/components/button/' }],
    },
    {
      text: '数据展示',
      children: [
        { text: 'Table', link: '/components/table/' },
        { text: 'popper', link: '/components/popper/' },
        { text: 'Tooltip', link: '/components/tooltip/' },
      ],
    },
  ]
}
