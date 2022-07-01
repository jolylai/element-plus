import { PluginOption } from 'vite'
import fs from 'fs'
import { createFilter } from '@rollup/pluginutils'
import path from 'path'

export default function docsPlugin(): PluginOption {
  const filter = createFilter(/\.md$/)

  const componentDir = path.relative(process.cwd(), '../packages')

  return {
    name: 'vite-docs',
    enforce: 'pre',
    load(id) {
      if (!filter(id)) return
      if (id.indexOf('components') > -1) {
        const filepath = path.join(componentDir, id)

        return fs.readFileSync(filepath, 'utf-8')
      }
      return null
    },
  }
}
