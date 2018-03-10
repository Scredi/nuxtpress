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
  import { getTagBySlug, getPaginatedPosts } from '~/api/api'

  export default {
    components: { Posts, Pagination },
    computed: {
      page () {
        return Number(this.$route.params.page) || 1
      }
    },
    async asyncData ({ params, query }) {
      const tag = await getTagBySlug(params.slug)
      return {
        tag,
        paginatedPostsByTagId: await getPaginatedPosts(10, params ? params.page : 1, tag.id)
      }
    }
  }
</script>