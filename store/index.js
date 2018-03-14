import Vuex from 'vuex'

const endpoint = process.env.wordpressApiBaseUrl

const store = () => {
  return new Vuex.Store({
    state: {
      posts: null,
      post: null,
      categories: null,
      category: null,
      tag: null,
      meta: {
        description: '',
        name: ''
      }
    },
    actions: {
      async nuxtServerInit ({ commit, state }, { res, req }) {
        let url = `${endpoint}/categories`
        const categories = await this.$axios.get(url)
        const meta = await this.$axios.get('https://css-tricks.com/wp-json')
        // todo: fix url
        commit('setMeta', meta.data)
        commit('setCategories', categories.data)
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
      setTag: (state, tag) => {
        state.tag = tag
      },
      setMeta (state, meta) {
        state.meta.name = meta.name
        state.meta.description = meta.description
      }
    }
  })
}

export default store
