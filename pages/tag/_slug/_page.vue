<template>
    <div>
        <h1> {{ tag.name }} : </h1>
        <Posts :posts="paginatedPostsByTagId" />
        <Pagination :totalPages="paginatedPostsByTagId.totalPages" :page="page" />
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
      paginatedPostsByTagId () {
        return this.$store.state.posts
      },
      tag () {
        return this.$store.state.tag
      }
    },
    async asyncData ({ params, app, store }) {
      let pageNumber = params.page ? params.page : 1
      let slug = params.slug
      let tagUrl = `${endpoint}/tags?slug=${slug}`
      let tagItem = await app.$axios.get(tagUrl)
      let postsUrl = `${endpoint}/posts?per_page=10&page=${pageNumber}&tags=${tagItem.data[0].id}`
      let posts = await app.$axios.get(postsUrl)
        .then(response => {
          const data = {
            total: Number(response.headers['x-wp-total']),
            totalPages: Number(response.headers['x-wp-totalpages']),
            data: response.data
          }
          return data
        })
      store.commit('setTag', tagItem.data[0])
      store.commit('setPosts', posts)
    }
  }
</script>