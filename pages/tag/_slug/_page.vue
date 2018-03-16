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

  export default {
    components: { Posts, Pagination },
    head () {
      return {
        title: this.tag.name,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: `${this.tag.name} - description du tag`
          },
          {
            property: 'og:title',
            content: this.tag.name
          },
          {
            property: 'og:description',
            content: `${this.tag.name} - description du tag`
          },
          {
            property: 'og:type',
            content: 'post'
          },
          {
            name: 'twitter:title',
            content: this.tag.name
          },
          {
            name: 'twitter:description',
            content: `${this.tag.name} - description du tag`
          }
        ]
      }
    },
    computed: {
      page () {
        return Number(this.$route.params.page) || 1
      }
    },
    data () {
      return {
        paginatedPostsByTagId: this.$store.state.posts,
        tag: this.$store.state.tag
      }
    },
    async fetch ({ store }) {
      await store.dispatch('getPaginatedPostsByTag')
    }
  }
</script>