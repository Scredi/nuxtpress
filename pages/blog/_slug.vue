<template>
    <Post :post="post" />
</template>

<script>
  import { getPostBySlug } from '~/api/api'
  import Post from '~/components/Post'

  const removeTags = string => string.replace(/<(.|\n)*?>/g, '')

  export default {
    components: { Post },
    head () {
      return {
        title: this.post.title.rendered,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: removeTags(this.post.excerpt.rendered)
          },
          {
            property: 'og:title',
            content: this.post.title.rendered
          },
          {
            property: 'og:description',
            content: removeTags(this.post.excerpt.rendered)
          },
          {
            property: 'og:type',
            content: this.post.type
          },
          {
            property: 'og:url',
            content: this.post.link
          },
          {
            property: 'og:image',
            content: this.post._embedded['wp:featuredmedia'][0].source_url
          },
          {
            name: 'twitter:title',
            content: this.post.title.rendered
          },
          {
            name: 'twitter:description',
            content: removeTags(this.post.excerpt.rendered)
          },
          {
            name: 'twitter:image',
            content: this.post._embedded['wp:featuredmedia'][0].source_url
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