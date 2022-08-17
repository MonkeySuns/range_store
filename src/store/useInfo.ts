import { defineStore } from 'pinia';

export const useInfo = defineStore('useInfo', {
  state() {
    return {
      rangeArr: []
    }
  },

  getters: {

  },

  actions: {
    firstFun(entry: []) {
      this.rangeArr = entry
    }
  }
})