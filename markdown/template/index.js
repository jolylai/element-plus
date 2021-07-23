import fs from 'fs'
import path from 'path'

export const templateCompiler = (templateName, data) => {
  const templatePath = path.resolve(__dirname, templateName)
  let templateContent = fs.readFileSync(templatePath).toString()

  for (let key in data) {
    const slot = `<!--${key.toUpperCase()}_SLOT-->`

    const reg = new RegExp(slot)

    templateContent = templateContent.replace(reg, data[key])
  }
  return templateContent
}
