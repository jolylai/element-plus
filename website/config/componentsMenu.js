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
      {
        en: 'Avatar',
        zh: '头像',
        enSuffix: true,
        path: '/avatar',
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
      {
        en: 'Divider',
        zh: '分割线',
        enSuffix: true,
        path: '/divider',
      },
      {
        en: 'Row',
        zh: '格栅',
        enSuffix: true,
        path: '/row',
      },
    ],
  }),
  appendCounts({
    type: 'group',
    zh: '导航',
    en: 'Layout',
    children: [
      {
        en: 'Affix',
        zh: '固钉',
        enSuffix: true,
        path: '/affix',
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
        en: 'Popper',
        zh: '弹出框',
        enSuffix: true,
        path: '/popper',
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
  appendCounts({
    type: 'group',
    zh: '其他',
    en: 'Others',
    children: [
      {
        en: 'Anchor',
        zh: '锚点',
        enSuffix: true,
        path: '/anchor',
      },
    ],
  }),
])

export default componentsMenu
