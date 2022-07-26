import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'main',
  state: () => ({
    loggedUser: {
      username: ""
    },
    loaded: false
  }),
  actions: {
    logIn({username}) {
      this.loggedUser.username = username;
    }
  },
  getters: {},
})