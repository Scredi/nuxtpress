<template>
  <div>

    <Header/>

    <div class="container">
      <nuxt />
    </div>

    <Footer/>

  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.container
{
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}
</style>
