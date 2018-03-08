export const actions = {
  async nuxtServerInit ({ dispatch, commit, state }, { req }) {
    await dispatch('posts/init')
  }
}
