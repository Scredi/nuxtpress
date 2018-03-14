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
    created () {
      this.setCurrentPosts()
      this.setCurrentTag()
    },
    methods: {
      setCurrentPosts () {
        this.$store.commit('setPosts', this.items)
      },
      setCurrentTag () {
        this.$store.commit('setTag', this.tagItem)
      }
    },
    async asyncData ({ params, app }) {
      let pageNumber = params.page ? params.page : 1
      let slug = params.slug
      let tagUrl = `${endpoint}/tags?slug=${slug}`
      const tagItem = await app.$axios.get(tagUrl)
        .then(r => r.data[0])
        .catch(e => console.log(`${tagUrl} ${e.message}`))
      let postsUrl = `${endpoint}/posts?per_page=10&page=${pageNumber}&tags=${tagItem.id}`
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
        tagItem,
        items
      }
    }
  }
</script>