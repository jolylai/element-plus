import { createItems, appendCounts } from '../utils/menu'

const componentsMenu = createItems('/components', [
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
    zh: '布局',
    en: 'Layout',
    children: [
      {
        en: 'Space',
        zh: '间距',
        enSuffix: true,
        path: '/space',
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
  appendCounts({
    type: 'group',
    zh: '反馈组件',
    en: 'Feedback Components',
    children: [
      {
        en: 'Popover',
        zh: '弹出框',
        enSuffix: true,
        path: '/popover',
      },
      {
        en: 'Message',
        zh: '信息',
        enSuffix: true,
        path: '/message',
      },
    ],
  }),
  appendCounts({
    type: 'group',
    zh: '配置组件',
    en: 'Config Components',
    children: [
      {
        en: 'Config Provider',
        zh: '全局配置',
        enSuffix: true,
        path: '/config-provider',
      },
    ],
  }),
])

export default componentsMenu
