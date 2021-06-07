import MarkdownIt from 'markdown-it'
import MarkdownItContainer from 'markdown-it-container'
const { compileTemplate, TemplateCompiler } = require('@vue/compiler-sfc')

function stripTemplate(content) {
  content = content.trim()
  if (!content) {
    return content
  }

  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim()
}

function stripScript(content) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

const templateReplaceRegex = /<template>([\s\S]+)<\/template>/g
function genInlineComponentText(template, script) {
  // https://github.com/vuejs/vue-loader/blob/423b8341ab368c2117931e909e2da9af74503635/lib/loaders/templateLoader.js#L46
  let source = template
  if (templateReplaceRegex.test(source)) {
    source = source.replace(templateReplaceRegex, '$1')
  }
  const finalOptions = {
    source: `<div>${source}</div>`,
    filename: 'inline-component', // TODO：这里有待调整
    compiler: TemplateCompiler,
    compilerOptions: {
      mode: 'function',
    },
  }
  const compiled = compileTemplate(finalOptions)
  // tips
  if (compiled.tips && compiled.tips.length) {
    compiled.tips.forEach(tip => {
      console.warn(tip)
    })
  }
  // errors
  if (compiled.errors && compiled.errors.length) {
    console.error(
      `\n  Error compiling template:\n${pad(compiled.source)}\n` +
        compiled.errors.map(e => `  - ${e}`).join('\n') +
        '\n',
    )
  }
  let demoComponentContent = `
    ${compiled.code.replace('return function render', 'function render')}
  `
  // todo: 这里采用了硬编码有待改进
  script = script.trim()
  if (script) {
    script = script
      .replace(/export\s+default/, 'const democomponentExport =')
      .replace(/import ({.*}) from 'vue'/g, (s, s1) => `const ${s1} = Vue`)
      .replace(/import ({.*}) from 'element-plus'/g, (s, s1) => `const ${s1} = require('element-plus')`)
  } else {
    script = 'const democomponentExport = {}'
  }
  demoComponentContent = `(function() {
    ${demoComponentContent}
    ${script}
    return {
      render,
      ...democomponentExport
    }
  })()`
  return demoComponentContent
}

function VitePluginElement(userOptions) {
  // console.log('userOptions: ', userOptions)
  const md = new MarkdownIt()

  md.use(MarkdownItContainer, 'demo', {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      // opening tag
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : ''
        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
        return `<demo-block>
        ${description ? `<div>${md.render(description)}</div>` : ''}
        <!--element-demo: ${content}:element-demo-->
        `
      }
      return '</demo-block>'
    },
  })

  return {
    name: 'vite-plugin-element-md',
    enforce: 'pre',
    transform(src, id) {
      if (id.endsWith('.md')) {
        try {
          const content = md.render(src)
          console.log('content: 666', content)

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
          console.log('output: ', output)
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
