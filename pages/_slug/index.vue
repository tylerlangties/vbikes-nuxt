<template>
  <div>
    <!-- <Banner :title="page.title.rendered"/>
    <section class="container">
      <div class="page-content">
        <h1 class="title">{{page.title.rendered}}</h1>
        <span v-html="page.content.rendered"></span>
      </div>
    </section>-->
    {{page}}
  </div>
</template>
<script>
import axios from 'axios'
import Banner from '~/components/Banner.vue'
export default {
  // head() {
  //   return {
  //     title: this.page._yoast_wpseo_title,
  //     meta: [
  //       {
  //         hid: 'description',
  //         id: 'description',
  //         name: 'description',
  //         content: this.page._yoast_wpseo_metadesc
  //       }
  //     ]
  //   }
  // },
  async asyncData({ params, error, payload }) {
    if (payload) {
      console.log(payload, context)
      return { page: payload }
    } else {
      console.log(context)
      return { page: 'not from payload' }
    }
    // return axios
    //   .get(
    //     `https://villagetest.website/wp-json/wp/v2/pages?slug=${params.slug}`
    //   )
    //   .then(response => {
    //     return { page: response.data[0] }
    //   })
    //   .catch(error => {
    //     return { error: error }
    //   })
  },
  data() {
    return {
      page: null,
      error: []
    }
  },
  components: {
    Banner
  }
}
</script>
<style lang="scss">
.page-content {
  margin-top: 4rem;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  margin-bottom: 2rem;
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

table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table th,
table td {
  padding: 0.625em;
  text-align: center;
}
@media screen and (max-width: 992px) {
  table {
    border: 0;
    text-align: left;
    thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
    tr {
      border-bottom: 3px solid #ddd;
      display: block;
    }
    td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: left;
    }
    td::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
    td:last-child {
      border-bottom: 0;
    }
  }
}
</style>
