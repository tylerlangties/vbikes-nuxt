import api from '../api/index'

export const state = () => ({
  categories: [],
  loaded: false
})

export const actions = {
  getAllCategories({ commit, state }) {
    if (state.categories.length <= 0) {
      api.getCategories(categories => {
        commit('STORE_CATEGORIES', { categories })
        commit('CATEGORIES_LOADED', true)
      })
    }
  }
}

export const mutations = {
  STORE_CATEGORIES(state, categories) {
    state.categories = categories
  },
  CATEGORIES_LOADED(state, val) {
    state.loaded = val
  }
}

export const getters = {
  allCategories: state => state.categories,
  allCategoriesLoaded: state => state.loaded
}
