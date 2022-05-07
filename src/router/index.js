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
    component: () => import('@/views/finance/index.vue'),
    redirect: '/finance/dashboard',

    children: [
      {
        path: 'dashboard',
        name: 'financeDashboard',
        component: () => import('@/views/finance/Dashboard.vue'),
      },
      {
        path: 'operations',
        name: 'financeOperations',
        component: () => import('@/views/finance/Operations.vue'),
      },
      {
        path: 'categories',
        name: 'financeCategories',
        component: () => import('@/views/finance/Categories.vue'),
      },
      {
        path: 'report',
        name: 'financeReport',
        component: () => import('@/views/finance/Report.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'text-blue-400',
})

export default router