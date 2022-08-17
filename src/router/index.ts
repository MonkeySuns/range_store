import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

export const common = [
  {
    path: '/',
    name: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Layout
  }
]

export const routers = createRouter({
  routes: common,
  history: createWebHashHistory()
})