import Vuex from 'vuex'

const endpoint = process.env.proxyApiBaseUrl

const store = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      post: null,
      categories: [],
      category: null,
      meta: {
        description: '',
        name: ''
      }
    },
    actions: {
      async loadCategories ({ commit }) {
        let url = `${endpoint}/categories`
        const categories = await this.$axios.get(url)
        commit('setCategories', categories.data)
      },
      async nuxtServerInit ({ commit, state }) {
        // todo: fix url
        const meta = await this.$axios.get('https://css-tricks.com/wp-json')
        commit('setMeta', meta.data)
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
      },
      setCategory: (state, category) => {
        state.category = category
      },
      setMeta (state, meta) {
        state.meta = meta
      }
    }
  })
}

export default store
