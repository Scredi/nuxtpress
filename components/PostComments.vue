<template>
    <div class="comments">
        <h2>Commentaires :</h2>
        <transition name="fade">
            <div v-if="comments.length === 0">
                <Spinner
                        class="spinner"
                />
                <p>Aucun commentaires...</p>
            </div>
        </transition>
        <transition name="fade">
            <div v-if="!comments">
                <Spinner
                        class="spinner"
                />
                <p>Chargement...</p>
            </div>
        </transition>
        <ul>
            <li v-for="comment in comments" :id="comment.id">
                <p>De {{ comment.author_name }}, le {{ formatDateFr(comment.date) }} :</p>
                <div v-html="comment.content.rendered"></div>
            </li>
        </ul>
    </div>
</template>

<script>
  import Spinner from '~/components/BigSpinner'

  export default {
    props: {
      comments: { type: Array, default: () => [] }
    },
    components: {
      Spinner
    },
    methods: {
      formatDateFr (date) {
        let newDate = new Date(date)
        return new Intl.DateTimeFormat('fr-FR').format(newDate)
      }
    }
  }
</script>

<style lang="scss" scoped>
    .comments {
        border-top: 1px dotted #65676a;
        padding-top: 32px;
        margin-top: 32px;

        .fade-enter-active, .fade-leave-active {
            transition: opacity .2s
        }
        .fade-enter, .fade-leave-to {
            opacity: 0
        }

        ul {
            margin: 0;
            padding: 0;

            li {
                background: #ececec;
                padding: 1rem;
                position: relative;
                margin: 0 auto 1rem auto;
                font-size: 0.9rem;
                max-width: 50%;
            }
        }
    }
</style>