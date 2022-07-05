import { AttributeNode, baseParse, ElementNode } from '@vue/compiler-core'
import type { PluginOption } from 'vite'
import { createFilter } from '@rollup/pluginutils'

import fs from 'fs'
import path from 'path'

let index = 0

const ComponentsDir = path.resolve(process.cwd(), '../packages')

function createComponentName() {
  return `Demo${index++}`
}

type DemoElement = {
  tag: string
  props: Record<string, any>
}

function parseDemoElement(code: string): DemoElement {
  const { children } = baseParse(code)

  const elementNode = children[0] as ElementNode

  const props = {}

  for (const prop of elementNode.props) {
    props[prop.name] = (prop as AttributeNode).value?.content
  }

  return {
    tag: elementNode.tag,
    props,
  }
}

function transformCode(code: string, id: string) {
  const reg = /<demo(.*)\/>/g

  const scripts: string[] = []

  code = code.replace(reg, (match) => {
    const ast = parseDemoElement(match)
    const componentName = createComponentName()

    const filePath = path.resolve(id.replace('index.md', ''), ast.props.src)
    scripts.push(`import ${componentName} from '${filePath}'`)

    return `<${componentName} />`
  })

  const scriptsCode = `<script setup> ${scripts.join('\n')} </script>`

  code = scriptsCode + '\n' + code

  return code
}

const vitePluginVitepressDemo = (): PluginOption => {
  /** filter out files which aren't Markdown files */
  const filter = createFilter(/\.md$/)
  let filePath = ''

  return {
    name: 'vite-plugin-vitepress-demo',
    enforce: 'pre',
    load(id: string) {
      if (!filter(id)) return

      if (id.indexOf('/components') > -1) {
        filePath = path.join(ComponentsDir, id)

        return fs.readFileSync(filePath, 'utf-8')
      }
    },

    transform(code: string, id: string) {
      if (!filter(id)) return

      try {
        return transformCode(code, filePath)
      } catch (error) {
        this.error(error)
      }
    },
  }
}

export default vitePluginVitepressDemo
