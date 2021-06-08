import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import navConfig from './nav.config.json'

export const constantRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../../docs/progress.md'),
  },
]

const LoadingComponent = {
  template: `<div v-loading="true" style="min-height: 500px; width: 100%;"></div>`,
}
const ErrorComponent = {
  template: `
    <div style="text-align: center;padding: 100px 0;">Loading error. Please refresh the page and try again</div>`,
}

const getAsyncComponent = func => {
  return defineAsyncComponent({
    loader: func,
    delay: 0,
    timeout: 30000,
    errorComponent: ErrorComponent,
    loadingComponent: LoadingComponent,
  })
}

const loadDoc = path => {
  return getAsyncComponent(() => import(`../../docs/${path}.md`))
}

const registerRoute = navConfig => {
  let routes = []

  navConfig.children.map(({ path }) => {
    routes.push({
      path: path,
      component: () => import(`../../docs/${path}.md`),
    })
  })

  return routes
}

let routes = registerRoute(navConfig)

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes.concat(routes),
})

export default router
