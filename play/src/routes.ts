import { createRouter, createWebHistory } from 'vue-router'

export const constantRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/button.vue'),
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('@/views/button.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
})

export default router
