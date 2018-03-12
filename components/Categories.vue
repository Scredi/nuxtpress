<template>
    <nav class="categories">
        <ul>
            <li v-if="categories" v-for="item in categories">
                <nuxt-link :to="{ path: `/category/${item.slug}`, params: { slug: item.slug } }" >{{ item.name }}</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
      props: {
        categories: { type: Array, default: () => [] }
      }
    }
</script>

<style lang="scss" scoped>
    .categories {

        ul {
            list-style: none;

            li {
                display: inline-block;
                margin: 1%;
            }
        }
    }
</style>