import { defineConfig } from 'vitepress'
import Components from 'unplugin-vue-components/vite'

import Demo from './plugins/demo'
import PomeloPlusResolver from './plugins/resolver'

import Inspect from 'vite-plugin-inspect'
export default defineConfig({
  title: 'Pomelo Plus',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,
  themeConfig: {
    nav: [
      {
        text: '指南',
        link: '/guide/getting-started',
        activeMatch: '^/guide/',
      },
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
      Inspect(),
      Demo(),
      Components({
        dts: true,
        resolvers: [PomeloPlusResolver()],
      }),
    ],
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
