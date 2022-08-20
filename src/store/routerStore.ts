import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
import { getRouter } from '@/router/index'

type rangePath = global.currentCrumbs

export const routerStore = defineStore('routerStore', () => ({
  currentRouter: <RouteRecordRaw[]>[],

  currentPath: <rangePath>{},

  SET_CURRENT(roles: Array<string>) {
    this.currentRouter = getRouter(roles)
  },

  GET_CURRENT() {
    return this.currentRouter
  },

  SET_CURRENT_PATH(entryPath: rangePath) {
    this.currentPath = entryPath
  },

  GET_CURRENT_PATH() {
    return this.currentPath
  }
}))
