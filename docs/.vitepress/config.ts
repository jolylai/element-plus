import { defineConfig } from 'vitepress'
import Demo from './plugins/demo'

export default defineConfig({
  title: 'Pomelo Plus',
  srcDir: '../packages',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,
  themeConfig: {
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
    plugins: [Demo()],
    server: {
      watch: {
        cwd: process.cwd(),
      },
    },
  },
})

function getComponentsSidebar() {
  return [
    {
      text: '通用组件',
      items: [{ text: 'Button 按钮', link: '/components/button/' }],
    },
    {
      text: '数据展示',
      items: [
        { text: 'Table', link: '/components/table/' },
        { text: 'popper', link: '/components/popper/' },
        { text: 'Tooltip', link: '/components/tooltip/' },
      ],
    },
  ]
}
