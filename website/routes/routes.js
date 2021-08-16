export const zhDocRoutes = [
  {
    path: 'theme',
    component: () => import('../docs/theme.md'),
  },
]

export const zhComponentRoutes = [
  {
    path: 'button',
    component: () => import('../../packages/button/README.md'),
  },
  {
    path: 'space',
    component: () => import('../../packages/space/README.md'),
  },
  {
    path: 'upload',
    component: () => import('../../packages/upload/README.md'),
  },
  {
    path: 'popover',
    component: () => import('../../packages/popover/README.md'),
  },
  {
    path: 'config-provider',
    component: () => import('../../packages/config-provider/index.md'),
  },
]

const routes = [
  {
    name: 'home',
    path: '/',
    redirect: '/components',
  },
  // {
  //   name: 'home',
  //   path: '/:lang/:theme',
  //   component: () => import('../pages/home/index.vue'),
  // },
  {
    name: 'zhDocs',
    path: '/docs',
    component: () => import('../layout/index.vue'),
    children: zhDocRoutes,
  },

  {
    name: 'zhComponents',
    path: '/components',
    component: () => import('../layout/index.vue'),
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

export default routes
