import marked from 'marked'
import renderer from './renderer'
import { extractDemo } from './demo'
import { createAnchor } from './anchor'
import { create } from 'naive-ui'

export function createMarkdown(options) {
  return function(raw, id) {
    const anchor = createAnchor(raw)
    console.log('anchor: ', anchor)

    const { content, scripts } = extractDemo(raw, id)

    raw = content

    marked.use({ renderer })

    const html = marked(raw)

    const sfc = `<template>
    <div style='display: flex; flex-wrap: nowrap;'>
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

    return sfc
  }
}
