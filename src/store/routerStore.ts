import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
import { getRouter } from '@/router/index'

export const routerStore = defineStore('routerStore', () => ({
  currentRouter: <RouteRecordRaw[]>[],

  SET_CURRENT(roles: Array<string>) {
    this.currentRouter = getRouter(roles)
  },

  GET_CURRENT() {
    return this.currentRouter
  }
}))