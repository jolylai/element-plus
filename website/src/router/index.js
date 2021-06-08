import { createRouter, createWebHistory } from 'vue-router'

export const constantRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../../../packages/progress/README.md'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
})

export default router
