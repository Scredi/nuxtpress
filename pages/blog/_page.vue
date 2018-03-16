<template>
    <div>
      <div>
        <Categories :categories="categories"/>
      </div>
      <div>
        <Posts :posts="posts" />
        <Pagination :totalPages="posts.totalPages" :page="page" />
      </div>
    </div>
</template>

<script>
  import Posts from '~/components/Posts.vue'
  import Pagination from '~/components/Pagination'
  import Categories from '~/components/Categories'

  export default {
    components: { Posts, Pagination, Categories },
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
    data () {
      return {
        posts: this.$store.state.posts,
        categories: this.$store.state.categories
      }
    },
    computed: {
      page () {
        return Number(this.$route.params.page) || 1
      }
    },
    async fetch ({ store }) {
      await store.dispatch('getPaginatedPosts')
    }
  }
</script>

<style lang="scss" scoped>

</style>