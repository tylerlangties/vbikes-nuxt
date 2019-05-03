<template>
  <section class="container">
    <div class="featured-image" v-if="post.media">
      <img :src="post.media.large">
    </div>
    <h1 class="title" v-html="post.title"></h1>
    <div class="content">
      <span v-html="post.content"></span>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import api from '../../api/index'
export default {
  head() {
    return {
      title: this.post.yoast.yoast_wpseo_title,
      meta: [
        {
          hid: 'description',
          id: 'description',
          name: 'description',
          content: this.post.yoast.yoast_wpseo_metadesc
        }
      ]
    }
  },
  asyncData({ params }) {
    return axios
      .get(
        `http://villagetest.website/wp-json/better-rest-endpoints/v1/post/${
          params.id
        }`
      )
      .then(response => {
        return { post: response.data }
      })
      .catch(error => {
        return { error: error }
      })
  },
  data() {
    return {
      post: {},
      error: []
    }
  },
  // computed: {
  //   ...mapGetters({
  //     recentPostsLoaded: 'posts/recentPostsLoaded',
  //     getPostById: `posts/getPostById`
  //   })
  // },
  created() {
    console.log(this.$route)
  }
}
</script>
<style scoped lang="scss">
.container {
  text-align: center;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  img {
    max-width: 100%;
    object-fit: cover;
  }
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 82px;
  color: #35495e;
  letter-spacing: 1px;
  @media (max-width: 992px) {
    font-size: 32px;
  }
}
.content {
  color: #526488;
  font-size: 21px;
  word-spacing: 3px;
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
  margin-top: 2rem;
  word-wrap: break-word;
}
.featured-image {
  width: 100%;
}
.links {
  padding-top: 15px;
}
</style>