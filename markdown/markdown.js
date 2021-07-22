import marked from 'marked'
import mdRenderer from './renderer'
import { extractDemo } from './demo'

export function createMarkdown(options) {
  return function(raw, id) {
    const { content, scripts } = extractDemo(raw, id)

    raw = content

    const html = marked(raw)

    const sfc = `<template>${html}</template>\n<script setup>\n${scripts.join('\n')}\n</script>`

    return sfc
  }
}
