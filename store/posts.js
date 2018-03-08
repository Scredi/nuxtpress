import { getPaginatedPosts } from '~/api/api'

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
    let { data } = await await getPaginatedPosts(10, query ? query.page : 1)
    commit('setPosts', data)
  }
}
