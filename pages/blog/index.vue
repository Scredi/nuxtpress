<template>
  <Posts :posts="posts" />
</template>

<script>
  import Posts from '~/components/Posts.vue'
  import { getPaginatedPosts } from '~/api/api'

  export default {
    components: { Posts },
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
            property: 'twitter:title',
            content: 'Blog'
          },
          {
            property: 'twitter:description',
            content: 'Blog - Un front-end wordpress SEO friendly en vue.js'
          }
        ]
      }
    },
    async asyncData ({params}) {
      const posts = await getPaginatedPosts(10, params.query ? params.query.page : 1)
      return {
        posts
      }
    }
  }
</script>