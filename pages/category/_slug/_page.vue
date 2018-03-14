<template>
    <div>
        <h1> {{ category.name }} : </h1>
        <Posts :posts="paginatedPostsBySlugId" />
        <Pagination :totalPages="paginatedPostsBySlugId.totalPages" :page="page" />
    </div>
</template>

<script>
  import Posts from '~/components/Posts.vue'
  import Pagination from '~/components/Pagination'

  const endpoint = process.env.proxyApiBaseUrl

  export default {
    components: { Posts, Pagination },
    computed: {
      page () {
        return Number(this.$route.params.page) || 1
      },
      paginatedPostsBySlugId () {
        return this.$store.state.posts
      },
      category () {
        return this.$store.state.category
      }
    },
    async asyncData ({ params, app, store }) {
      let pageNumber = params.page ? params.page : 1
      let slug = params.slug
      let categoryUrl = `${endpoint}/categories?slug=${slug}`
      let categoryItem = await app.$axios.get(categoryUrl)
      let postsUrl = `${endpoint}/posts?per_page=10&page=${pageNumber}&categories=${categoryItem.data[0].id}`
      let posts = await app.$axios.get(postsUrl)
        .then(response => {
          const data = {
            total: Number(response.headers['x-wp-total']),
            totalPages: Number(response.headers['x-wp-totalpages']),
            data: response.data
          }
          return data
        })
      store.commit('setCategory', categoryItem.data[0])
      store.commit('setPosts', posts)
    }
  }
</script>