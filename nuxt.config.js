import pkg from './package'
import axios from 'axios'
import Config from './assets/config'

export default {
  mode: 'spa',

  generate: {
    routes: function(callback) {
      axios
        .all([
          axios.get(`${Config.wpDomain}${Config.api.posts}`),
          axios.get(`${Config.wpDomain}${Config.api.pages}`)
        ])
        .then(
          axios.spread(function(posts, pages) {
            let postRoutes = posts.data.map(post => {
              return { route: '/post/' + post.id, payload: post }
            })
            let pageRoutes = pages.data.map(page => {
              return { route: '/' + page.slug, payload: page }
            })
            callback(null, pageRoutes.concat(postRoutes))
          }),
          function(err) {
            console.log(err)
          }
        )
    }
    // routes: function() {
    //   return axios.get(`${Config.wpDomain}${Config.api.pages}`).then(res => {
    //     return res.data.map(page => {
    //       return {
    //         route: '/' + page.slug,
    //         payload: page
    //       }
    //     })
    //   })
    // }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-carousel'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    'nuxt-svg-loader'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
