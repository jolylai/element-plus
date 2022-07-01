import type { PluginOption } from 'vite'
import { createFilter } from '@rollup/pluginutils'

function transformCode(code: string, id: string) {
  console.log('code: ', code)
  const reg = /<demo([^>]*)/g

  return code
}

const vitePluginVitepressDemo = (): PluginOption => {
  console.log('vitePluginVitepressDemo')

  /** filter out files which aren't Markdown files */
  const filter = createFilter(/\.md$/)

  return {
    name: 'vite-plugin-vitepress-demo',
    enforce: 'pre',
    load(id) {
      console.log('id: ', id)
      return null
    },
    transform(code: string, id: string) {
      console.log('code: ', code)
      console.log('id: ', id)
      if (!filter(id)) return

      try {
        return transformCode(id, code)
      } catch (error) {
        this.error(error)
      }
    },
  }
}

export default vitePluginVitepressDemo
