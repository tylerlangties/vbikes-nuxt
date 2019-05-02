<template>
  <div v-if="menu">
    <b-navbar class="nav" toggleable="lg" type="dark">
      <b-navbar-brand href="/">vb</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <nuxt-link to="/">Home</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link to="/post">Blog</nuxt-link>
          </b-nav-item>
          <b-nav-item v-for="item in menu" :key="item.ID">
            <nuxt-link :to="{name: 'slug', params: { slug: item.slug } }">{{item.title}}</nuxt-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: ['menu']
}
</script>

<style scoped lang="scss">
a {
  color: white;
}
.nav {
}
.navbar {
  background-color: #212121;
}
.logo {
  max-height: 3rem;
  transition: all 200ms ease;
  &:hover {
    transform: scale(1.05);
  }
}
img {
  max-height: 3rem;
}
</style>
