import marked from 'marked'
import fs from 'fs-extra'
import path from 'path'
import { capitalize } from 'lodash'

const getAttrs = code => {
  const reg = /<code ([\s\S]*?) \/>/
  const match = code.match(reg)

  if (!match) {
    return {}
  }

  const pairs = match[1].trim().split(/\s+/)

  return pairs.reduce((attrs, pair) => {
    const [key, value] = pair.split('=')

    attrs[key] = value.replace(/['"]([\s\S]*?)['"]/, '$1')
    return attrs
  }, {})
}

const resolveDemoInfo = (code, id) => {
  const codeAttrs = getAttrs(code)
  const fileName = path.basename(codeAttrs.src, '.vue')
  const absolutePath = path.resolve(path.dirname(id), codeAttrs.src)
  const name = `${capitalize(fileName)}Demo`
  const tag = `<${capitalize(fileName)}Demo />`

  return {
    name,
    tag,
    fileName,
    absolutePath,
    relativePath: codeAttrs.src,
  }
}

export const extractDemo = (raw, id) => {
  const scripts = []

  const content = raw.replace(/(<code ([\s\S]*?) \/>)/, code => {
    const { name, tag, absolutePath } = resolveDemoInfo(code, id)
    scripts.push(`import ${name} from '${absolutePath}'`)
    return tag
  })

  return { content, scripts }
}
