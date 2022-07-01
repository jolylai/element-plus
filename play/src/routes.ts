import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('./views/index.vue'),
  },
]

const views = import.meta.glob('./views/*.vue')

const getRouteMeta = (path: string) => {
  const filename = path.split('/').reverse()[0]

  const [name] = filename.split('.')

  return { name, path: `/${name}` }
}

for (const key in views) {
  const routeMeta = getRouteMeta(key)
  const component = views[key]

  constantRoutes.push(Object.assign({ component }, routeMeta))
}

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
})

export default router
