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
        overflow: hidden;
    }
</style>
<style lang="scss">
    figure {

        img {
            display: block;
            width: 100%;
        }
    }
    ul {
        list-style: none;
    }
    pre {
        position: relative;
        line-height: 28px;
        background: rgba(0, 0, 0, .85);
        color: white;

        &::before {
            color: white;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
        }

        &[rel="Javascript"]::before, &[rel="jQuery"]::before, &[rel="JSX"]::before {
            content: "JS";
            background: #9c27b0;
        }

        &[rel="PHP"]::before {
            content: "PHP";
            background: #999;
        }

        &[rel="CSS"]::before {
            content: "CSS";
            background: #ff9800;
        }
        
        &[rel="SCSS"]::before {
            content: "SCSS";
            background: #999;
        }

        &[rel="SVG"]::before {
            content: "SVG";
            background: #999;
        }

        &[rel="HTML"]::before {
            content: "HTML";
            background: #4caf50;
        }

        &[rel="HTAccess"]::before {
            content: "HTAccess";
            background: #999;
        }

        code {
            white-space: pre;
            padding: 2rem 1.5rem;
            line-height: 1.75;
            display: block;
            overflow-x: scroll;
        }
    }
</style>