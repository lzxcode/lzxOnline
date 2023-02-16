import { createPinia, defineStore } from 'pinia'

const pinia = createPinia()

export const userInfo = defineStore('userInfo', {
  state: () => {
    return {
      ID: 12312345
    }
  },
  getters: {
    userID(state) {
      return state.ID
    }
  }
})

export default pinia
