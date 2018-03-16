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
            display: flex;
            align-items: center;
            justify-content: center;

            li {
                margin: 1%;

                a {
                    background-color: #eaeaea;
                    color: red;
                }
            }
        }
    }
</style>