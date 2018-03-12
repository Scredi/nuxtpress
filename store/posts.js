/* import { getPaginatedPosts } from '~/api/api'

export const state = () => ({
  posts: []
})

export const mutations = {
  setPosts (state, posts) {
    state.posts = posts
  }
}

export const actions = {
  async init ({ commit, params }) {
    let data = await getPaginatedPosts(10, params ? params.page : 1)
    commit('setPosts', data)
  }
} */
