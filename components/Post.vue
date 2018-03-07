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
    </div>
</template>

<script>
  export default {
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