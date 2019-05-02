import api from '../api/index'

export const state = () => ({
  posts: [],
  loaded: false
})

export const actions = {
  getPosts({ commit }) {
    api.getPosts(posts => {
      commit('SET_POSTS', posts)
      commit('POSTS_LOADED', true)
    })
  }
}

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  },
  POSTS_LOADED(state, val) {
    state.loaded = val
  }
}

export const getters = {
  recentPosts: state => limit => {
    if (!limit || typeof limit == 'undefined') {
      return state.posts
    }
    let recent = state.posts
    return recent.slice(0, limit)
  },

  recentPostsLoaded: state => state.loaded
}
