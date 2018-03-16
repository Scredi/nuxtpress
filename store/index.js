import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      posts: null,
      post: null,
      categories: null,
      category: null,
      tag: null,
      comments: null
    },
    actions: {
      async nuxtServerInit ({ commit, state }, { res, req }) {
        let categories = await this.$api.getCategories()
        if (state.categories === null) {
          commit('setCategories', categories)
        }
      },
      async getPaginatedPosts ({ commit, state }) {
        let pageNumber = this.app.context.route.params.page ? this.app.context.route.params.page : 1
        const posts = await this.$api.getPaginatedPosts(10, pageNumber)
        commit('setPosts', posts)
      },
      async getPaginatedPostsByTag ({ commit, state }) {
        let slug = this.app.context.route.params.slug
        let pageNumber = this.app.context.route.params.page ? this.app.context.route.params.page : 1
        let tag = await this.$api.getTagBySlug(slug)
        const posts = await this.$api.getPaginatedPosts(10, pageNumber, tag.id)
        commit('setTag', tag)
        commit('setPosts', posts)
      },
      async getPaginatedPostsByCategory ({ commit, state }) {
        let slug = this.app.context.route.params.slug
        let pageNumber = this.app.context.route.params.page ? this.app.context.route.params.page : 1
        let category = await this.$api.getCategoryBySlug(slug)
        const posts = await this.$api.getPaginatedPosts(10, pageNumber, null, category.id)
        commit('setCategory', category)
        commit('setPosts', posts)
      },
      async getPosts ({ commit, state }) {
        const posts = await this.$api.getPosts(10)
        commit('setPosts', posts)
      },
      async getPostBySlug ({ commit, state }) {
        let slug = this.app.context.route.params.slug
        const post = await this.$api.getPostBySlug(slug)
        const comments = await this.$api.getComments(post._links.replies[0].href)
        commit('setComments', comments)
        commit('setPost', post)
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
      setComments: (state, comments) => {
        state.comments = comments
      }
    }
  })
}

export default store
