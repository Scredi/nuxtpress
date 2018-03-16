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

  export default {
    components: { Posts, Pagination },
    head () {
      return {
        title: this.category.name,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: `${this.category.name} - description de la category`
          },
          {
            property: 'og:title',
            content: this.category.name
          },
          {
            property: 'og:description',
            content: `${this.category.name} - description de la category`
          },
          {
            property: 'og:type',
            content: 'post'
          },
          {
            name: 'twitter:title',
            content: this.category.name
          },
          {
            name: 'twitter:description',
            content: `${this.category.name} - description de la category`
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
        paginatedPostsBySlugId: this.$store.state.posts,
        category: this.$store.state.category
      }
    },
    async fetch ({ store }) {
      await store.dispatch('getPaginatedPostsByCategory')
    }
  }
</script>