function VitePluginElement(userOptions) {
  console.log('userOptions: ', userOptions)
  return {
    name: 'vite-plugin-element',
    enforce: 'pre',
    transform(src, id) {
      if (id.endsWith('.md')) {
        try {
          console.log('src: ', src)
          // return markdownToVue(id, raw)
        } catch (e) {
          this.error(e)
          return ''
        }
      }
    },
  }
}

export default VitePluginElement
