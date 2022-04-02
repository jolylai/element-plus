import { defineConfig } from 'vitepress'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { kebabCase } from 'lodash'

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
        activeMatch: '^/components/'
      }
    ],

    sidebar: {
      '/components/': getComponentsSidebar()
    }
  },

  vite: {
    plugins: [
      // @ts-ignore
      Components({
        dirs: ['/docs/components', 'packages/components'],
        deep: true,
        extensions: ['vue'],
        dts: true,
        include: [/\.vue$/, /\.md$/],
        // importPathTransform: path => {
        //   console.log('path: ', path)
        //   return path.endsWith('.svg') ? `${path}?component` : undefined
        // },
        resolvers: [
          {
            type: 'component',
            resolve: name => {
              console.log('name: ', name)

              if (!name.match(/^Po[A-Z]/)) return

              const partialName = kebabCase(name.slice(2))

              const componentName = partialName.split('-')
              console.log('componentName: ', componentName)

              return {
                name,
                importName: name,
                path: `pomelo-plus/${componentName[0]}`
              }
            }
          },
          {
            type: 'component',
            resolve: name => {
              if (!name.match(/^Demo[A-Z]/)) return
              const kebabCaseName = kebabCase(name)
              const componentName = kebabCaseName.split('-')[1]
              return {
                name: kebabCaseName,
                path: `@/demo/${componentName}/demos/${kebabCaseName}.vue`
              }
            }
          }
        ]
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../packages'),
        'pomelo-plus': path.resolve(__dirname, '../packages/component'),
        '@/demo': path.resolve(__dirname, '../components')
      }
    }
  }
})

function getComponentsSidebar() {
  return [
    {
      text: '通用组件',
      children: [{ text: 'Button 按钮', link: '/components/button/' }]
    },
    {
      text: '数据展示',
      children: [
        { text: 'Table', link: '/components/table/' },
        { text: 'popper', link: '/components/popper/' }
      ]
    }
  ]
}
