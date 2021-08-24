import { componentsMenu } from '../config'

const componentRoutes = componentsMenu
  .reduce((routes, components) => {
    if (Array.isArray(components.children)) {
      return routes.concat(components.children)
    }

    return routes
  }, [])
  .map(({ en }) => {
    const componentName = en.toLowerCase()

    return {
      path: componentName,
      component: () => import(`../../packages/${componentName}/index.md`),
    }
  })

export const zhDocRoutes = [
  {
    path: 'theme',
    component: () => import('../docs/theme.md'),
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
    children: componentRoutes,
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
