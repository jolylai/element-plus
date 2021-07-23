import prism from 'prismjs'
import loadLanguages from 'prismjs/components/index'

loadLanguages(['markup', 'css', 'javascript'])

function wrap(code, lang) {
  return `<pre v-pre class="language-${lang}"><code>${code}</code></pre>`
}

export default highlight = (str, lang) => {
  lang = lang.toLowerCase()
  const rawLang = lang
  if (lang === 'vue' || lang === 'html') {
    lang = 'markup'
  }
  if (lang === 'md') {
    lang = 'markdown'
  }
  if (lang === 'ts') {
    lang = 'typescript'
  }
  if (lang === 'py') {
    lang = 'python'
  }
  if (!prism.languages[lang]) {
    try {
      loadLanguages([lang])
    } catch (e) {
      throw Error(`Syntax highlight for language "${lang}" is not supported.`)
    }
  }
  if (prism.languages[lang]) {
    const code = prism.highlight(str, prism.languages[lang], lang)
    return wrap(code, rawLang)
  }

  return wrap(str, 'text')
}
