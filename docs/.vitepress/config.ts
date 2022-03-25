import { defineConfig } from 'vitepress'
import path from 'path'
// import demoPlugin from './plugins/demo'
import { vitePluginVitepressDemo } from 'vite-plugin-vitepress-demo'

export default defineConfig({
  title: 'Pomelo Plus',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,

  themeConfig: {
    repo: 'jolylai/pomelo-plus',
    docsDir: 'docs',
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
    // @ts-ignore
    plugins: [vitePluginVitepressDemo()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../packages')
        // 'pomelo-plus': path.resolve(__dirname, '../../packages')
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
