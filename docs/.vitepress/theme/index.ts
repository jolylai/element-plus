import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import components from '../../../packages/components'
import '../../../packages/theme/index.scss'

import 'vite-plugin-vitepress-demo/dist/demo/code.css'
import DemoBlock from 'vite-plugin-vitepress-demo/dist/demo/index.vue'

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.component('demo', DemoBlock)
    // @ts-ignore
    app.use(components)
  }
} as Theme
