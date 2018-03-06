import axios from 'axios'
import { getPosts } from '~/api/api'

/**
 * We do this to achieve server side rendering for
 * content displayed by layouts components
 * ( layouts does not have an asyncData() method )
 */
export default async function( { store } ) {
  //  let posts = await getPosts(20)
  //  store.commit('setPostsSidebar', posts)
}