import { defineConfig } from 'vitepress'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'

import Inspect from 'vite-plugin-inspect'

import Demo from './plugins/demo'
import PomeloPlusResolver from './plugins/resolver'

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
      DefineOptions(),
      AutoImport({
        imports: ['vue'],
      }),
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
      text: '布局',
      items: [{ text: 'Space 间距', link: '/components/space/' }],
    },
    {
      text: '数据录入',
      items: [{ text: 'Checkbox', link: '/components/checkbox/' }],
    },
    {
      text: '数据展示',
      items: [
        { text: 'Table', link: '/components/table/' },
        { text: 'Popper', link: '/components/popper/' },
        { text: 'Tooltip', link: '/components/tooltip/' },
      ],
    },
  ]
}
