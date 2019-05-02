<template>
  <section class="container">
    <div>
      <h1 class="title">{{page.title.rendered}}</h1>
      <span v-html="page.content.rendered"></span>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  head() {
    return {
      title: this.page._yoast_wpseo_title,
      meta: [
        {
          hid: 'description',
          id: 'description',
          name: 'description',
          content: this.page._yoast_wpseo_metadesc
        }
      ]
    }
  },
  asyncData({ params }) {
    return axios
      .get(`http://villagetest.website/wp-json/wp/v2/pages?slug=${params.slug}`)
      .then(response => {
        return { page: response.data[0] }
      })
      .catch(error => {
        return { error: error }
      })
  },
  data() {
    return {
      page: false,
      error: []
    }
  }
}
</script>
<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>
