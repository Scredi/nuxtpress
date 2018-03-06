<!-- Display a full post object -->
<template>
    <div>
        <div>
            <section>
                <div v-bind:style="{ 'background-image': 'url(' + post.featured_media_url + ')' }">
                    <h1 v-html="post.title.rendered"></h1>
                </div>
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
      post: { type: Object, default: {} }
    }
  }
</script>

<style lang="scss" scoped>

</style>