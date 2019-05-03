import api from '../api/index'

export const state = () => ({
  id: '',
  users: [],
  loaded: false
})

export const actions = {
  getAllUsers({ commit }) {
    api.getUsers(users => {
      commit('STORE_USERS', users)
      commit('USERS_LOADED', true)
    })
  }
}

export const mutations = {
  STORE_USERS(state, users) {
    state.users = users
  },
  USERS_LOADED(state, val) {
    state.loaded = val
  }
}

export const getters = {
  allUsers: state => state.users
}
