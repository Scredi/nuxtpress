<template>
    <Post :post="post" />
</template>

<script>
  import { getPostBySlug } from '~/api/api'
  import Post from '~/components/Post'

  const removeTags = string => decodeURI(string.replace(/<(.|\n)*?>/g, ''))
  const validateImg = data => typeof data !== 'undefined' ? data[0].source_url : ''

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
            content: validateImg(this.post._embedded['wp:featuredmedia'])
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
            content: validateImg(this.post._embedded['wp:featuredmedia'])
          }
        ]
      }
    },
    async asyncData ({params, query}) {
      const post = await getPostBySlug(params.slug)
      return {
        post
      }
    }
  }
</script>