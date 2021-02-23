import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    addUser(state, user) {
      state.users.push(user)
    },
    updateUsers(state, newUsers) {
      state.users = newUsers
    },
  },
  actions: {
    async fetchUsers({commit}, users) {
      commit('updateUsers', users)
    },
  },
  getters: {
    allUsers(state) {
      return state.users
    },
  },
  modules: {
  }
})
