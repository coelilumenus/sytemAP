import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/finance',
    name: 'Finance',
    
    component: () => import('@/views/Finance.vue'),

    meta: {
      extraLayout: 'AppLayoutFinance'
    },

    children: [
      {
        path: 'operations',
        name: 'Operations',
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