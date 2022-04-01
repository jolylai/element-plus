import { defineConfig } from 'vitepress'
import path from 'path'
// import demoPlugin from './plugins/demo'
import Components from 'unplugin-vue-components/vite'

console.log('process.cwd(): ', process.cwd())

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
  // markdown: {
  //   config: md => demoPlugin(md),
  // },

  vite: {
    plugins: [
      // @ts-ignore
      Components({
        dirs: ['/docs/components/table/demos'],
        deep: true,
        extensions: ['vue'],
        // // directoryAsNamespace: true,
        dts: true,
        // globalNamespaces: ['global'],
        // importPathTransform: path => {
        //   console.log('path: ', path)

        //   return path.endsWith('.svg') ? `${path}?component` : undefined
        // },
        include: [/\.vue$/, /\.md$/],
        resolvers: [
          name => {
            console.log('name: ', name)
            if (name === 'Basic') return '/components/table/demos/basic.vue'
          }
        ]
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../packages')
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
      children: [{ text: 'Table', link: '/components/table/' }]
    }
  ]
}
