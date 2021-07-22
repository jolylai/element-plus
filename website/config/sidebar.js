import { createItems, appendCounts } from '../utils/menu'

export const sidebarOptions = createItems('/components', [
  appendCounts({
    type: 'group',
    zh: '通用组件',
    en: 'Common Components',
    children: [
      {
        en: 'Button',
        zh: '按钮',
        enSuffix: true,
        path: '/button',
      },
    ],
  }),
  appendCounts({
    type: 'group',
    zh: '数据录入组件',
    en: 'Data Input Components',
    children: [
      {
        en: 'Upload',
        zh: '上传',
        enSuffix: true,
        path: '/upload',
      },
    ],
  }),
])
