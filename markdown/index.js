import { createMarkdown } from './markdown'
// import { resolveOptions } from './options'

function VitePluginMarkdown(userOptions) {
  // const options = resolveOptions(userOptions)
  const markdownToVue = createMarkdown()

  return {
    name: 'vite-plugin-md',
    enforce: 'pre',
    transform(raw, id) {
      if (id.endsWith('.md')) {
        try {
          return markdownToVue(raw, id)
        } catch (e) {
          this.error(e)
          return ''
        }
      }
    },
    async handleHotUpdate(ctx) {
      if (ctx.file.endsWith('.md')) {
        const defaultRead = ctx.read
        ctx.read = async function() {
          return markdownToVue(ctx.file, await defaultRead())
        }
      }
    },
  }
}

export default VitePluginMarkdown
