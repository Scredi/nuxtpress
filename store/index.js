import Vuex from 'vuex'

const endpoint = process.env.proxyApiBaseUrl

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: null,
      post: null,
      categories: null
    },
    actions: {
      loadCategories: async function ({ commit }) {
        let url = `${endpoint}/categories`
        const categories = await this.$axios.get(url)
          .then(r => r.data)
          .catch(e => console.log(`${url} ${e.message}`))
        return commit('setCategories', categories)
      }
    },
    mutations: {
      setPosts: (state, posts) => {
        state.posts = posts
      },
      setPost: (state, post) => {
        state.post = post
      },
      setCategories: (state, categories) => {
        state.categories = categories
      }
    }
  })
}

export default createStore
