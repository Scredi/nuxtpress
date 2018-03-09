<template>
    <div>
        <Posts :posts="posts" />
        <Pagination :totalPages="posts.totalPages" :page="page" />
    </div>
</template>

<script>
  import Posts from '~/components/Posts.vue'
  import Pagination from '~/components/Pagination'
  import { getPaginatedPosts } from '~/api/api'

  export default {
    components: { Posts, Pagination },
    head () {
      return {
        title: `Blog`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Blog - Un front-end wordpress SEO friendly en vue.js'
          },
          {
            property: 'og:title',
            content: 'Blog'
          },
          {
            property: 'og:description',
            content: 'Blog - Un front-end wordpress SEO friendly en vue.js'
          },
          {
            property: 'og:type',
            content: 'post'
          },
          {
            name: 'twitter:title',
            content: 'Blog'
          },
          {
            name: 'twitter:description',
            content: 'Blog - Un front-end wordpress SEO friendly en vue.js'
          }
        ]
      }
    },
    computed: {
      page () {
        return Number(this.$route.params.page) || 1
      }
    },
    async asyncData ({ params, query }) {
      const posts = await getPaginatedPosts(10, params ? params.page : 1)
      return {
        posts
      }
    }
  }
</script>