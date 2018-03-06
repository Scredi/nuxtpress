<template>
    <Post :post="post" />
</template>

<script>
  import { getPostBySlug } from '~/api/api'
  import Post from '~/components/Post'
  export default {
    components: { Post },
    head () {
      return {
        title: this.post.title.rendered.replace(/&nbsp;/gi, ' '),
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.post.title.rendered.replace(/&nbsp;/gi, ' ')
          }
        ]
      }
    },
    async asyncData (params) {
      const post = await getPostBySlug(params.params.slug)
      return {
        post
      }
    }
  }
</script>