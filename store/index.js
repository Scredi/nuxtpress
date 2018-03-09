// index.js
/* export const actions = {
  async nuxtServerInit ({ dispatch, commit, state }, { req }) {
    await dispatch('posts/init')
  }
} */
// posts.js
/* import { getPaginatedPosts } from '~/api/api'

export const state = () => ({
  posts: null
})

export const mutations = {
  setPosts (state, posts) {
    state.posts = posts
  }
}

export const actions = {
  async init ({ commit, query }) {
    let data = await getPaginatedPosts(10, query ? query.page : 1)
    commit('setPosts', data)
  }
} */
