<template>
    <div class="tags">
        <ul>
            <li v-if="tags" v-for="tag in tags">
                <nuxt-link :to="{ path: `/tag/${tag.slug}`, params: { slug: tag.slug } }" exact>{{ tag.name }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
      props: {
        tags: { type: Array, default: () => [] }
      }
    }
</script>

<style lang="scss" scoped>
    .tags {

        ul {
            list-style: none;

            li {
                display: inline-block;
                margin: 1%;

                a {
                    padding: 2%;
                    background-color: #eaeaea;
                    color: red;
                }
            }
        }
    }
</style>