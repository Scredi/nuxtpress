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
    let data = await getPaginatedPosts(10, query ? query.page : 1)
    console.log(data)
    commit('setPosts', data)
  }
}
