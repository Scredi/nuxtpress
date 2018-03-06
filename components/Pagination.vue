<template>
    <nav v-if="totalPages > 1">
        <ul>
            <li v-for="n in totalPages">
                <nuxt-link :to="{ name: getRouteName, query:{ page: n } }">{{ n }}</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
  export default {
    props: {
      totalPages: { type: Number, default: 1 }
    },
    data () {
      return {
        routeName: { type: String, default: '' }
      }
    },
    computed: {
      getRouteName () {
        return this.$route.name
      }
    }
  }
</script>