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
    created () {
      this.setCurrentPosts()
      this.setCurrentCategory()
    },
    methods: {
      setCurrentPosts () {
        this.$store.commit('setPosts', this.items)
      },
      setCurrentCategory () {
        this.$store.commit('setCategory', this.categoryItem)
      }
    },
    async asyncData ({ params, app }) {
      let pageNumber = params.page ? params.page : 1
      let slug = params.slug
      let categoryUrl = `${endpoint}/categories?slug=${slug}`
      const categoryItem = await app.$axios.get(categoryUrl)
        .then(r => r.data[0])
        .catch(e => console.log(`${categoryUrl} ${e.message}`))
      let postsUrl = `${endpoint}/posts?per_page=10&page=${pageNumber}&categories=${categoryItem.id}`
      const items = await app.$axios.get(postsUrl)
        .then(response => {
          const data = {
            total: Number(response.headers['x-wp-total']),
            totalPages: Number(response.headers['x-wp-totalpages']),
            data: response.data
          }
          return data
        })
        .catch(e => console.log(`${postsUrl} ${e.message}`))
      return {
        categoryItem,
        items
      }
    }
  }
</script>