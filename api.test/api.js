/**
 * Get content from wordpress via REST Api
 */

/* import axios from 'axios'
import config from '../nuxt.config.js'
const endpoint = config.env.proxyApiBaseUrl */

/* export const getPaginatedPosts = async (perPage = 10, pageNumber = 1, tagId = null, categoryId = null) => {
  let url = `${endpoint}/posts?per_page=${perPage}&page=${pageNumber}`
  if (tagId) {
    url += `&tags=${tagId}`
  }
  if (categoryId) {
    url += `&categories=${categoryId}`
  }
  return axios.get(url)
    .then(response => {
      const result = {
        total: Number(response.headers['x-wp-total']),
        totalPages: Number(response.headers['x-wp-totalpages']),
        data: response.data
      }
      return result
    })
    .catch(e => console.log(`${url} ${e.message}`))
}

export const getPosts = (perPage = 10) => {
  const url = `${endpoint}/posts?per_page=${perPage}`
  return axios.get(url)
    .then(r => r.data)
    .catch(e => console.log(`${url} ${e.message}`))
}

export const getPostBySlug = slug => {
  const url = `${endpoint}/posts?_embed&slug=${slug}`
  return axios.get(url)
    .then(r => r.data[0])
    .catch(e => console.log(`${url} ${e.message}`))
}

export const getTagBySlug = slug => {
  const url = `${endpoint}/tags?slug=${slug}`
  return axios.get(url)
    .then(r => r.data[0])
    .catch(e => console.log(`${url} ${e.message}`))
}

export const getCategories = () => {
  const url = `${endpoint}/categories`
  return axios.get(url)
    .then(r => r.data)
    .catch(e => console.log(`${url} ${e.message}`))
}

export const getCategoryBySlug = slug => {
  const url = `${endpoint}/categories?slug=${slug}`
  return axios.get(url)
    .then(r => r.data[0])
    .catch(e => console.log(`${url} ${e.message}`))
} */
