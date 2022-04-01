import type { Plugin } from 'vite'

function transformCode(code: string, id: string) {
  const reg = /<demo([^>]*)/g

  return code
}

const vitePluginMdDemo = (): Plugin => {
  return {
    name: 'vite-plugin-vitepress-demo',
    enforce: 'pre',

    transform(code: string, id: string) {

      if (/\.md$/.test(id)) {
        console.log('id: ', id)
        console.log('code: ', code)
        return transformCode(id, code)
      }
      return code
    }
  }
}

export default vitePluginMdDemo
