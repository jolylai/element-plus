import { kebabCase } from 'lodash'

import { ComponentResolver } from 'unplugin-vue-components/types'

export default function PomeloPlusResolver(): ComponentResolver[] {
  return [
    {
      type: 'component',
      resolve: (name: string) => {
        if (!name.match(/^Po[A-Z]/)) return

        const partialName = kebabCase(name.slice(2))

        return {
          name,
          path: `@pomelo-plus/components/${partialName}`,
          sideEffects: [
            '@pomelo-plus/theme/src/base.scss',
            `@pomelo-plus/theme/src/${partialName}.scss`,
          ],
        }
      },
    },
  ]
}
