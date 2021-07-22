import marked from 'marked'

function genAnchorTemplate(children, options = {}) {
  return `
    <n-anchor
      :bound="16"
      style="width: 144px; position: sticky; top: 32px;"
      offset-target="#doc-layout"
      :ignore-gap="${options.ignoreGap}"
    >
      ${children}
    </n-anchor>
  `
}

function genAnchorLinks(headingTokens) {
  const links = headingTokens.map(({ text }) => `<n-anchor-link title="${text}" href="#${text}" />`)
  return links.join('\n')
}

export const createAnchor = md => {
  const tokens = marked.lexer(md)

  const headingTokens = tokens.filter(token => token.type === 'heading' && token.depth !== 1)

  const anchorLinks = genAnchorLinks(headingTokens)

  const anchorTemplate = genAnchorTemplate(anchorLinks, { ignoreGap: false })

  return anchorTemplate
}
