'use strict'

const Config = {
  appTitle: 'village-bikes',
  appTitleShort: 'VB',
  appDescription: 'Web Application for Village Bikes',
  wpDomain: 'https://villagetest.website',
  api: {
    posts: '/wp-json/better-rest-endpoints/v1/posts?per_page=75',
    postById: '/wp-json/better-rest-endpoints/v1/post/',
    pages: '/wp-json/better-rest-endpoints/v1/pages',
    pageBySlug: '/wp-json/wp-json/wp/v2/pages?slug=',
    users: '/wp-json/better-rest-endpoints/v1/users',
    postFormContact: 'wp-json/send-contact-form/v1/contact',
    categories:
      '/wp-json/better-rest-endpoints/v1/categories?sort=name&hide_empty=true&per_page=50'
  }
}

export default Config
