import marked from 'marked'
import renderer from './renderer'
import { extractDemo } from './demo'
import { createAnchor } from './anchor'

export function createMarkdown(options) {
  return function(raw, id) {
    const anchor = createAnchor(raw)

    marked.use({ renderer })

    // 解析 md 成 HTML
    let html = marked(raw)

    const { content, scripts } = extractDemo(html, id)
    html = content

    return `<template>
      <div style="display: flex; flex-wrap: nowrap;">
        <div :style="'width: calc(100% - 180px); margin-right: 36px;'">
          ${html}
        </div>
        <div style="width: 144px;">
          ${anchor}
        </div>
      </div>
    </template>
    <script setup>
      ${scripts.join('\n')}
    </script>`
  }
}
