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

const genDemosTemplate = (code, id) => {
  const demoInfo = resolveDemoInfo(code, id)
  console.log('demoInfo: ', demoInfo)
  const demoContent = fs.readFileSync(demoInfo.absolutePath).toString()
  console.log('demoContent: ', demoContent)

  return '<div>Demo</div>'
}

export const extractDemo = (raw, id) => {
  raw = raw.replace(/(<code ([\s\S]*?) \/>)/, code => {
    console.log('code: ', code)
    return genDemosTemplate(code, id)
  })

  return raw
}
