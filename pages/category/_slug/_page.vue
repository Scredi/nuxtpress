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
  import { getCategoryBySlug, getPaginatedPosts } from '~/api/api'

  export default {
    components: { Posts, Pagination },
    computed: {
      page () {
        return Number(this.$route.params.page) || 1
      }
    },
    async asyncData ({ params, query }) {
      const category = await getCategoryBySlug(params.slug)
      return {
        category,
        paginatedPostsBySlugId: await getPaginatedPosts(10, params ? params.page : 1, null, category.id)
      }
    }
  }
</script>