import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Button from '../../../packages/components/button'

import 'vite-plugin-vitepress-demo/dist/demo/code.css'
import DemoBlock from 'vite-plugin-vitepress-demo/dist/demo/index.vue'

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.component('demo', DemoBlock)
    app.component(Button.name, Button)
  },
} as Theme
