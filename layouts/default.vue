<template>
  <div>
    <Header/>
    <main class="container">
      <nuxt />
    </main>
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
.container {
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
  transition: all .5s;
}
</style>
