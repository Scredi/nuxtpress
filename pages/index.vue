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
      title: `Accueil`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'SEO content accueil'
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