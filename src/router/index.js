import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/finance',
    name: 'finance',
    component: () => import('@/views/Finance.vue'),

    children: [
      {
        path: 'operations',
        name: 'operations',
        component: () => import('@/views/Operations.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router