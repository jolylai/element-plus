import MarkdownIt from 'markdown-it'
import Config from 'markdown-it-chain'
import hljs from 'highlight.js'
import overWriteFenceRule from './fence'
import containers from './containers'

const config = new Config()

const highlight = (str, lang) => {
  if (!lang || !hljs.getLanguage(lang)) {
    return '<pre><code class="hljs">' + str + '</code></pre>'
  }
  const html = hljs.highlight(lang, str, true, undefined).value
  return `<pre><code class="hljs language-${lang}">${html}</code></pre>`
}

config.options
  .html(true)
  .highlight(highlight)
  .end()
  .plugin('containers')
  .use(containers)
  .end()

const md = config.toMd()
overWriteFenceRule(md)

export default md
