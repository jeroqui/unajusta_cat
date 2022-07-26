import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'main',
  state: () => ({
    loggedUser: {
      username: ""
    }
  }),
  actions: {
    logIn(userResponse) {
      this.loggedUser.username = userResponse.loginUser.username;
    }
  },
  getters: {},
})