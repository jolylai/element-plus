import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import { PoButton } from 'pomelo-plus'

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.use(PoButton)
  },
} as Theme
