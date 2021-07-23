import { createItems, appendCounts } from '../utils/menu'

const docsMenu = createItems('/docs', [
  appendCounts({
    type: 'group',
    zh: '指南',
    en: 'guide',
    children: [
      {
        en: 'Theme',
        zh: '主题',
        enSuffix: true,
        path: '/theme',
      },
    ],
  }),
])

export default docsMenu
