export const zhDocRoutes = [
  // basic docs
  {
    path: 'introduction',
    component: () => import('../pages/docs/introduction/zhCN/index.md'),
  },
  {
    path: 'installation',
    component: () => import('../pages/docs/installation/zhCN/index.md'),
  },
  {
    path: 'usage-sfc',
    component: () => import('../pages/docs/usage-sfc/zhCN/index.md'),
  },
  {
    path: 'supported-platforms',
    component: () => import('../pages/docs/supported-platforms/zhCN/index.md'),
  },
  {
    path: 'from-v1',
    component: () => import('../pages/docs/vue3/zhCN/index.vue'),
  },
  {
    path: 'customize-theme',
    component: () => import('../pages/docs/customize-theme/zhCN/index.md'),
  },
  {
    path: 'experimental-features',
    component: () => import('../pages/docs/experimental-features/zhCN/index.md'),
  },
  {
    path: 'changelog',
    component: () => import('../pages/docs/changelog/zhCN/index.vue'),
  },
  {
    path: 'theme',
    component: () => import('../pages/docs/theme/zhCN/index.demo-entry.md'),
  },
  {
    path: 'jsx',
    component: () => import('../pages/docs/jsx/zhCN/index.md'),
  },
  {
    path: 'ssr',
    component: () => import('../pages/docs/ssr/zhCN/index.md'),
  },
  {
    path: 'common-issues',
    component: () => import('../pages/docs/common-issues/zhCN/index.md'),
  },
  {
    path: 'fonts',
    component: () => import('../pages/docs/fonts/zhCN/index.md'),
  },
  {
    path: 'import-on-demand',
    component: () => import('../pages/docs/import-on-demand/zhCN/index.md'),
  },
]

export const zhComponentRoutes = [
  //   // components
  //   {
  //     path: 'layout',
  //     component: () => import('../../packages/layout/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'gradient-text',
  //     component: () => import('../../packages/gradient-text/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'icon',
  //     component: () => import('../../packages/icon/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'checkbox',
  //     component: () => import('../../packages/checkbox/demos/index.demo-entry.md'),
  //   },
  {
    path: 'button',
    component: () => import('../../packages/button/demos/index.demo-entry.md'),
  },
  //   {
  //     path: 'switch',
  //     component: () => import('../../packages/switch/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'data-table',
  //     component: () => import('../../packages/data-table/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'input',
  //     component: () => import('../../packages/input/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'select',
  //     component: () => import('../../packages/select/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'cascader',
  //     component: () => import('../../packages/cascader/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'dynamic-input',
  //     component: () => import('../../packages/dynamic-input/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'modal',
  //     component: () => import('../../packages/modal/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'message',
  //     component: () => import('../../packages/message/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'tooltip',
  //     component: () => import('../../packages/tooltip/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'popover',
  //     component: () => import('../../packages/popover/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'notification',
  //     component: () => import('../../packages/notification/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'pagination',
  //     component: () => import('../../packages/pagination/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'alert',
  //     component: () => import('../../packages/alert/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'date-picker',
  //     component: () => import('../../packages/date-picker/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'input-number',
  //     component: () => import('../../packages/input-number/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'radio',
  //     component: () => import('../../packages/radio/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'form',
  //     component: () => import('../../packages/form/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'tabs',
  //     component: () => import('../../packages/tabs/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'time-picker',
  //     component: () => import('../../packages/time-picker/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'dialog',
  //     component: () => import('../../packages/dialog/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'badge',
  //     component: () => import('../../packages/badge/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'steps',
  //     component: () => import('../../packages/steps/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'collapse',
  //     component: () => import('../../packages/collapse/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'progress',
  //     component: () => import('../../packages/progress/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'tag',
  //     component: () => import('../../packages/tag/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'menu',
  //     component: () => import('../../packages/menu/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'timeline',
  //     component: () => import('../../packages/timeline/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'back-top',
  //     component: () => import('../../packages/back-top/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'divider',
  //     component: () => import('../../packages/divider/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'popconfirm',
  //     component: () => import('../../packages/popconfirm/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'anchor',
  //     component: () => import('../../packages/anchor/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'dropdown',
  //     component: () => import('../../packages/dropdown/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'popselect',
  //     component: () => import('../../packages/popselect/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'config-provider',
  //     component: () => import('../../packages/config-provider/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'transfer',
  //     component: () => import('../../packages/transfer/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'spin',
  //     component: () => import('../../packages/spin/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'drawer',
  //     component: () => import('../../packages/drawer/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'loading-bar',
  //     component: () => import('../../packages/loading-bar/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'time',
  //     component: () => import('../../packages/time/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'slider',
  //     component: () => import('../../packages/slider/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'tree',
  //     component: () => import('../../packages/tree/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'affix',
  //     component: () => import('../../packages/affix/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'statistic',
  //     component: () => import('../../packages/statistic/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'legacy-grid',
  //     component: () => import('../../packages/legacy-grid/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'grid',
  //     component: () => import('../../packages/grid/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'breadcrumb',
  //     component: () => import('../../packages/breadcrumb/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'descriptions',
  //     component: () => import('../../packages/descriptions/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'list',
  //     component: () => import('../../packages/list/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'card',
  //     component: () => import('../../packages/card/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'avatar',
  //     component: () => import('../../packages/avatar/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'result',
  //     component: () => import('../../packages/result/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'thing',
  //     component: () => import('../../packages/thing/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'auto-complete',
  //     component: () => import('../../packages/auto-complete/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'empty',
  //     component: () => import('../../packages/empty/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'element',
  //     component: () => import('../../packages/element/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'log',
  //     component: () => import('../../packages/log/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'code',
  //     component: () => import('../../packages/code/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'typography',
  //     component: () => import('../../packages/typography/demos/index.demo-entry.md'),
  //   },
  {
    path: 'upload',
    component: () => import('../../packages/upload/demos/index.demo-entry.md'),
  },
  //   {
  //     path: 'table',
  //     component: () => import('../../packages/table/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'space',
  //     component: () => import('../../packages/space/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'rate',
  //     component: () => import('../../packages/rate/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'dynamic-tags',
  //     component: () => import('../../packages/dynamic-tags/demos/index.demo-entry.md'),
  //   },
  {
    path: 'ellipsis',
    component: () => import('../../packages/ellipsis/demos/index.demo-entry.md'),
  },
  //   {
  //     path: 'mention',
  //     component: () => import('../../packages/mention/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'page-header',
  //     component: () => import('../../packages/page-header/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'global-style',
  //     component: () => import('../../packages/global-style/demos/index.demo-entry.md'),
  //   },
  {
    path: 'image',
    component: () => import('../../packages/image/demos/index.demo-entry.md'),
  },
  //   {
  //     path: 'skeleton',
  //     component: () => import('../../packages/skeleton/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'calendar',
  //     component: () => import('../../packages/calendar/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'color-picker',
  //     component: () => import('../../packages/color-picker/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'tree-select',
  //     component: () => import('../../packages/tree-select/demos/index.demo-entry.md'),
  //   },
  //   {
  //     path: 'carousel',
  //     component: () => import('../../packages/carousel/demos/index.demo-entry.md'),
  //   },
]

export const routes = [
  {
    name: 'home',
    path: '/:lang/:theme',
    component: () => import('../pages/home/index.vue'),
  },
  {
    name: 'zhDocs',
    path: '/zh-CN/:theme/docs',
    component: () => import('../pages/Layout.vue'),
    children: zhDocRoutes,
  },

  {
    name: 'zhComponents',
    path: '/zh-CN/:theme/components',
    component: () => import('../pages/Layout.vue'),
    children: zhComponentRoutes,
  },
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'home',
      params: {
        lang: navigator.language === 'zh-CN' ? 'zh-CN' : 'en-US',
        theme: 'os-theme',
      },
    },
  },
]
