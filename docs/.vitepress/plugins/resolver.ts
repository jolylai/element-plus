import { kebabCase } from 'lodash'
import path from 'path'
import {
  ComponentResolver,
  SideEffectsInfo,
} from 'unplugin-vue-components/types'

const ComponentsDir = path.resolve(process.cwd(), '../packages/components')
const ThemeDir = path.resolve(process.cwd(), '../packages/theme/src')

const componentsPath = (partialName: string) => {
  return path.join(ComponentsDir, partialName)
}

const resolveScss = (filename: string) =>
  path.join(ThemeDir, `${filename}.scss`)

function getSideEffectsLegacy(
  partialName: string
): SideEffectsInfo | undefined {
  return [resolveScss('base'), resolveScss(partialName)]
}

export default function PomeloPlusResolver(): ComponentResolver[] {
  return [
    {
      type: 'component',
      resolve: (name: string) => {
        if (!name.match(/^Po[A-Z]/)) return

        const partialName = kebabCase(name.slice(2))

        return {
          name,
          path: componentsPath(partialName),
          sideEffects: getSideEffectsLegacy(partialName),
        }
      },
    },
  ]
}
