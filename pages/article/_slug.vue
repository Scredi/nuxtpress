<template>
    <Post :post="post" />
</template>

<script>
  import Post from '~/components/Post'

  const endpoint = process.env.proxyApiBaseUrl
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
    computed: {
      post () {
        return this.$store.state.post
      }
    },
    methods: {
      setCurrentPost () {
        this.$store.commit('setPost', this.item)
      }
    },
    created () {
      this.setCurrentPost()
    },
    async asyncData ({ params, app }) {
      let slug = params.slug
      let postUrl = `${endpoint}/posts?_embed&slug=${slug}`
      const item = await app.$axios.get(postUrl)
        .then(r => r.data[0])
        .catch(e => console.log(`${postUrl} ${e.message}`))
      return {
        item
      }
    }
  }
</script>