/* import { getPaginatedPosts } from '~/api/api'

export const mutations = {
  setPosts (state, posts) {
    state.items = posts.data
    state.total = posts.total
    state.totalPages = posts.totalPages
  }
}

export const actions = {
  async init ({ commit, params }) {
    const posts = await getPaginatedPosts(10, params ? params.page : 1)
    // console.log(posts.data)
    commit('setPosts', posts)
  }
} */
