import marked from 'marked'
import mdRenderer from './renderer'
import { extractDemo } from './demo'

export function createMarkdown(options) {
  return function(raw, id) {
    raw = extractDemo(raw, id)

    const html = marked(raw)

    const sfc = `<template>${html}</template>`

    return sfc
  }
}
