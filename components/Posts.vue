<!-- Post list as teasers -->
<template>
    <section>
        <div v-for="post in posts.data" :key="post.id">
            <div>
                <div>
                    <div>
                        <img v-if="post.featured_media_url" :src="post.featured_media_url" />
                    </div>
                </div>
                <div>
                    <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug, post: post } }">
                        <h2 v-html="post.title.rendered"></h2>
                    </nuxt-link>
                    <div v-html="post.excerpt.rendered"></div>
                    <div>
                        <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug, post: post } }"> Lire l'article </nuxt-link>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    </section>
</template>

<script>
  export default {
    props: {
      posts: { type: Object, default: () => {} }
    }
  }
</script>

<style lang="scss" scoped>
    section {
        width: 60%;
        margin: 0 auto;

        h2 {
            margin-bottom: 1rem
        }
    }
</style>