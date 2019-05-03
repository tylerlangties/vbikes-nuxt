<template>
  <div>
    <Nav :menu="menu"/>
  </div>
</template>

<script>
import axios from 'axios'
import Nav from './Nav.vue'
export default {
  data() {
    return {
      menu: false
    }
  },
  components: {
    Nav
  },
  beforeMount() {
    this.fetchMenu()
  },
  methods: {
    fetchMenu() {
      axios
        .get(
          'https://villagetest.website/wp-json/better-rest-endpoints/v1/menus/primary-menu'
        )
        .then(response => {
          this.menu = response.data
        })
        .catch(error => console.log('error'))
    }
  }
}
</script>

<style>
</style>
