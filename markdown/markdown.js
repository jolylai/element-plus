import marked from 'marked'
import renderer from './renderer'
import { extractDemo } from './demo'
import { createAnchor } from './anchor'
import { templateCompiler } from './template'

export function createMarkdown(options) {
  return function(raw, id) {
    const anchor = createAnchor(raw)

    marked.use({ renderer })

    // 解析 md 成 HTML
    let html = marked(raw)

    const { content, scripts } = extractDemo(html, id)
    html = content

    return templateCompiler('sfcTemplate.vue', {
      html,
      anchor,
      script: `<script setup>${scripts.join('\n')}</script>`,
    })
  }
}
