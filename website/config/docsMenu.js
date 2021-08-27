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
      {
        en: `单文件组件<script setup>`,
        zh: `单文件组件<script setup>`,
        enSuffix: false,
        path: '/sfc-script-setup',
      },
    ],
  }),
])

export default docsMenu
