<template>
  <div>
    <div class="container">
      <nuxt />
    </div>

    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'

export default {
  components: {
    MyFooter
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
