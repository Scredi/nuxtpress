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

  const endpoint = process.env.wordpressApiBaseUrl

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
    computed: {
      page () {
        return Number(this.$route.params.page) || 1
      },
      categories () {
        return this.$store.state.categories
      },
      posts () {
        return this.$store.state.posts
      }
    },
    async asyncData ({ params, app, store }) {
      let pageNumber = params.page ? params.page : 1
      let postsUrl = `${endpoint}/posts?per_page=10&page=${pageNumber}`
      let posts = await app.$axios.get(postsUrl)
        .then(response => {
          const data = {
            total: Number(response.headers['x-wp-total']),
            totalPages: Number(response.headers['x-wp-totalpages']),
            data: response.data
          }
          return data
        })
      store.commit('setPosts', posts)
    },
    created () {
      this.setCategories()
    },
    methods: {
      setCategories () {
        if (!this.$store.state.categories) {
          this.$store.dispatch('loadCategories')
        }
      }
    }
  }
</script>