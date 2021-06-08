import md from './config'
import { stripScript, stripTemplate, genInlineComponentText } from './util'

function VitePluginElement(userOptions) {
  return {
    name: 'vite-plugin-element-md',
    enforce: 'pre',
    transform(src, id) {
      if (id.endsWith('.md')) {
        try {
          const content = md.render(src)
          // console.log('content: 666', content)

          const startTag = '<!--element-demo:'
          const startTagLen = startTag.length
          const endTag = ':element-demo-->'
          const endTagLen = endTag.length

          let componenetsString = ''
          let id = 0 // demo 的 id
          let output = [] // 输出的内容
          let start = 0 // 字符串开始位置

          let commentStart = content.indexOf(startTag)
          let commentEnd = content.indexOf(endTag, commentStart + startTagLen)
          while (commentStart !== -1 && commentEnd !== -1) {
            output.push(content.slice(start, commentStart))

            const commentContent = content.slice(commentStart + startTagLen, commentEnd)
            const html = stripTemplate(commentContent)
            const script = stripScript(commentContent)
            let demoComponentContent = genInlineComponentText(html, script)
            const demoComponentName = `element-demo${id}`
            output.push(`<template #source><${demoComponentName} /></template>`)
            componenetsString += `${JSON.stringify(demoComponentName)}: ${demoComponentContent},`

            // 重新计算下一次的位置
            id++
            start = commentEnd + endTagLen
            commentStart = content.indexOf(startTag, start)
            commentEnd = content.indexOf(endTag, commentStart + startTagLen)
          }

          // console.log('componenetsString', componenetsString)
          // console.log('content: ', content)
          let pageScript = ''
          if (componenetsString) {
            pageScript = `<script lang="js">
              import * as Vue from 'vue';
              export default {
                name: 'component-doc',
                components: {
                  ${componenetsString}
                }
              }
            </script>`
          } else if (content.indexOf('<script>') === 0) {
            // 硬编码，有待改善
            start = content.indexOf('</script>') + '</script>'.length
            pageScript = content.slice(0, start)
          }

          output.push(content.slice(start))
          // console.log('output: ', output)
          const result = `
          <template>
            <section class="content element-doc">
              ${output.join('')}
            </section>
          </template>
          ${pageScript}
          `
          // console.log('result: ', result)
          return result
        } catch (e) {
          this.error(e)
          return ''
        }
      }
    },
  }
}

export default VitePluginElement
