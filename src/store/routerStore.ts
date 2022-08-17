import { defineStore } from 'pinia'

export const routerStore = defineStore('routerStore', () => ({
  nowRouter: [ 1, 2, 3 ],

  currentArr: [],

  SET_CURRENT(entry: []) {
    this.currentArr = entry;
  }
}))