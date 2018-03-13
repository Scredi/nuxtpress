import { getPosts, getCategories } from '~/api/api'
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      categories: []
    },
    actions: {
      loadPosts: async function ({ commit }) {
        const posts = await getPosts(10)
        commit('setPosts', posts)
      },
      loadCategories: async function ({ commit }) {
        const categories = await getCategories()
        commit('setCategories', categories)
      }
    },
    mutations: {
      setPosts: (state, posts) => {
        state.posts = posts
      },
      setCategories: (state, categories) => {
        state.categories = categories
      }
    }
  })
}

export default createStore
