import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,

  themeConfig: {
    repo: 'jolylai/pomelo-plus',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav: [
      {
        text: '组件',
        link: '/components',
        activeMatch: '^/components/',
      },
    ],

    sidebar: {
      '/components/': getComponentsSidebar(),
    },
  },
})

function getComponentsSidebar() {
  return [
    {
      text: 'Introduction',
      children: [{ text: 'Table', link: '/components/table' }],
    },
  ]
}
