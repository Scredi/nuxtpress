/**
 * Get content from wordpress via REST Api
 */
import config from '../nuxt.config.js'
const endpoint = config.env.wordpressApiBaseUrl

const Api = {
  getPosts (perPage = 10) {
    let url = `${endpoint}/posts?per_page=${perPage}`
    return this.$axios.get(url)
      .then(r => r.data)
      .catch(e => console.log(`${url} ${e.message}`))
  },
  getPaginatedPosts (perPage = 10, pageNumber = 1, tagId = null, categoryId = null) {
    let url = `${endpoint}/posts?per_page=${perPage}&page=${pageNumber}`
    if (tagId) {
      url += `&tags=${tagId}`
    }
    if (categoryId) {
      url += `&categories=${categoryId}`
    }
    return this.$axios.get(url)
      .then(response => {
        const result = {
          total: Number(response.headers['x-wp-total']),
          totalPages: Number(response.headers['x-wp-totalpages']),
          data: response.data
        }
        return result
      })
      .catch(e => console.log(`${url} ${e.message}`))
  },
  getPostBySlug (slug) {
    let url = `${endpoint}/posts?_embed&slug=${slug}`
    return this.$axios.get(url)
      .then(r => r.data[0])
      .catch(e => console.log(`${url} ${e.message}`))
  },
  getTagBySlug (slug) {
    let url = `${endpoint}/tags?slug=${slug}`
    return this.$axios.get(url)
      .then(r => r.data[0])
      .catch(e => console.log(`${url} ${e.message}`))
  },
  getCategoryBySlug (slug) {
    let url = `${endpoint}/categories?slug=${slug}`
    return this.$axios.get(url)
      .then(r => r.data[0])
      .catch(e => console.log(`${url} ${e.message}`))
  },
  getCategories () {
    let url = `${endpoint}/categories`
    return this.$axios.get(url)
      .then(r => r.data)
      .catch(e => console.log(`${url} ${e.message}`))
  },
  getComments (url) {
    return this.$axios.get(url)
      .then(r => r.data)
      .catch(e => console.log(`${url} ${e.message}`))
  }
}

export default Api
