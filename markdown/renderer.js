import highlight from './highlight'

const renderer = {
  table(header, body) {
    if (body) body = '<tbody>' + body + '</tbody>'
    return (
      '<div class="md-table-wrapper"><n-table single-column class="md-table">\n' +
      '<thead>\n' +
      header +
      '</thead>\n' +
      body +
      '</n-table>\n' +
      '</div>'
    )
  },

  tablerow(content) {
    return '<tr>\n' + content + '</tr>\n'
  },

  tablecell(content, flags) {
    const type = flags.header ? 'th' : 'td'
    const tag = flags.align
      ? '<' + type + ' align="' + flags.align + '">'
      : '<' + type + '>'
    return tag + content + '</' + type + '>\n'
  },
  code: highlight,
  heading: (text, level) => {
    const id = text.replace(/ /g, '-')
    return `<n-h${level} id="${id}">${text}</n-h${level}>`
  },
  blockquote: quote => {
    return `<n-blockquote>${quote}</n-blockquote>`
  },
  hr: () => '<n-hr />',
  paragraph: text => {
    return `<n-p>${text}</n-p>`
  },
  link(href, title, text) {
    if (/^(http:|https:)/.test(href)) {
      return `<n-a href="${href}" target="_blank">${text}</n-a>`
    }
    return `<router-link to="${href}" #="{ navigate, href }" custom><n-a :href="href" @click="navigate">${text}</n-a></router-link>`
  },
  list(body, ordered, start) {
    const type = ordered ? 'n-ol' : 'n-ul'
    const startatt = ordered && start !== 1 ? ' start="' + start + '"' : ''
    return `<${type}${startatt}>\n` + body + `</${type}>\n`
  },
  listitem(text) {
    return `<n-li>${text}</n-li>`
  },
  codespan(code) {
    return `<n-text code>${code}</n-text>`
  },
  strong(text) {
    return `<n-text strong>${text}</n-text>`
  },
  checkbox(checked) {
    return `<n-checkbox :checked="${checked}" style="vertical-align: -2px; margin-right: 8px;" />`
  },
}

export default renderer
