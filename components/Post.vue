<!-- Display a full post object -->
<template>
    <div class="post">
        <div>
            <section>
                <h1 v-html="post.title.rendered"></h1>
            </section>
        </div>
        <div>
            <section>
                <div v-html="post.content.rendered"></div>
            </section>
        </div>
        <div>
            <Tags :tags="post._embedded['wp:term'][1]"/>
        </div>
    </div>
</template>

<script>
  import Tags from '~/components/Tags'

  export default {
    components: { Tags },
    props: {
      post: { type: Object, default: () => {} }
    }
  }
</script>

<style lang="scss" scoped>
    .post {
        max-width: 60%;
        margin: 0 auto;
    }
</style>