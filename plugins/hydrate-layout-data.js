// import axios from 'axios'
import { getPaginatedPosts } from '~/api/api'

/**
 * We do this to achieve server side rendering for
 * content displayed by layouts components
 * ( layouts does not have an asyncData() method )
 */
export default async function ({ store, query }) {
  // let posts = await getPosts(20)
  // store.commit('setPostsSidebar', posts)
  let posts = await getPaginatedPosts(10, query ? query.page : 1)
  store.commit('setPosts', posts)
}
