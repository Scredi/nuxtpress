import Vuex from 'vuex'

/**
 * This our global state for our app.
 */
const createStore = () => new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    setPosts (state, value) {
      state.posts = value
    }
  }
})

export default createStore
