<template>
    <nav v-if="totalPages > 1">
        <ul>
            <li v-if="page > 1"><nuxt-link :to="{ name: getRouteName, params: { page: page-1 } }">&lt; pre</nuxt-link></li>
            <a v-else class="disabled">&lt; pre</a>
            <span>{{ page }}/{{ totalPages }}</span>
            <nuxt-link v-if="hasMore" :to="{ name: getRouteName, params: { page: page+1 } }">sui &gt;</nuxt-link>
            <a v-else class="disabled">suiv &gt;</a>
        </ul>
    </nav>
</template>

<script>
  export default {
    props: {
      totalPages: { type: Number, default: 1 },
      page: { type: Number, default: 1 }
    },
    computed: {
      hasMore () {
        return this.page < this.totalPages
      },
      getRouteName () {
        return this.$route.name
      }
    }
  }
</script>

<style lang="scss">
    nav {

        .disabled {
            opacity: 0.8;
        }

        ul {
            list-style: none;

            span {
                margin: 0 3%;
            }

            li {
                display: inline-block;
                padding: 5px;
            }
        }
    }
</style>