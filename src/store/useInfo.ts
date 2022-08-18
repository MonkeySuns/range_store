import { defineStore } from 'pinia'

export const useInfo = defineStore('useInfo', {
  state: () => ({
    roles: <string[]>[]
  }),

  actions: {
    SET_ROLES(entry: string[]) {
      this.roles = entry
    },

    GET_ROLES() {
      return this.roles
    }
  }
})