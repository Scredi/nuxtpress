<template>
    <header>
        <nuxt-link to="/">NuxtPress</nuxt-link>
        <nav>
            <ul>
                <li>
                    <nuxt-link to="/blog">Blog</nuxt-link>
                </li>
            </ul>
        </nav>
        <Search />
    </header>
</template>
<script>
    import Search from '~/components/Search'

    export default {
      components: {
        Search
      }
    }
</script>
<style lang="scss" scoped>
header {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 5%;

    ul {
        list-style: none;
    }
}
</style>