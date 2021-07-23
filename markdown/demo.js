import marked from 'marked'
import fs from 'fs-extra'
import path from 'path'
import { capitalize } from 'lodash'
import renderer from './renderer'

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

const resolveDemoInfo = (codeElement, id) => {
  const codeAttrs = getAttrs(codeElement)
  const fileName = path.basename(codeAttrs.src, '.vue')
  const absolutePath = path.resolve(path.dirname(id), codeAttrs.src)

  const content = fs.readFileSync(absolutePath).toString()

  marked.use({ renderer })
  const code = marked(
    fs.readFileSync(path.resolve(__dirname, './test.md')).toString(),
  )
  const name = `${capitalize(fileName)}Demo`
  const tag = `<${capitalize(fileName)}Demo />`

  return {
    name,
    tag,
    fileName,
    absolutePath,
    relativePath: codeAttrs.src,
    code,
  }
}

export const extractDemo = (raw, id) => {
  const scripts = []

  const content = raw.replace(/(<code ([\s\S]*?) \/>)/g, codeElement => {
    const { name, tag, absolutePath, code } = resolveDemoInfo(codeElement, id)
    console.log('code: ', code)

    scripts.push(`import ${name} from '${absolutePath}'`)
    return `<demo-block title='title'>
    <template #description>description</template>
    <template #code>
 ${code}
    </template>
    ${tag}</demo-block>`
  })

  return { content, scripts }
}
