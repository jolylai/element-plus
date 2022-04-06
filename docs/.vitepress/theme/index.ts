import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {},
} as Theme
