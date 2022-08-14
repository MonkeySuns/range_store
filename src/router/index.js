import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'

export const common = [
  {
    path: '/',
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