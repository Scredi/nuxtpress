<template>
    <section>
        <h1>Hello Accueil</h1>
    </section>
</template>

<script>
    export default {
      head () {
        return {
          title: `Accueil`,
          meta: [
            {
              hid: 'description',
              name: 'description',
              content: 'Accueil - Un front-end wordpress SEO friendly en vue.js'
            },
            {
              property: 'og:title',
              content: 'Accueil'
            },
            {
              property: 'og:description',
              content: 'Accueil - Un front-end wordpress SEO friendly en vue.js'
            },
            {
              property: 'og:type',
              content: 'post'
            },
            {
              name: 'twitter:title',
              content: 'Accueil'
            },
            {
              name: 'twitter:description',
              content: 'Accueil - Un front-end wordpress SEO friendly en vue.js'
            }
          ]
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>