<template>
  <div class="banner">
    <div class="banner-overlay">
      <div class="banner-content">
        <h2 class="banner-content_title" v-html="title"></h2>
        <p class="banner-content_breadcrumb">
          <nuxt-link to="/">Home</nuxt-link>->
          <span v-html="title"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.banner {
  width: 100%;
  height: 200px;
  background-image: url('https://images.unsplash.com/photo-1476631840528-13bdc7f18072?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &-overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  &-content {
    display: flex;
    justify-content: space-between;
    max-width: 1044px;
    width: 1044px;
    padding: 0 1rem;
    @media (max-width: 776px) {
      justify-content: center;
    }
    &_title {
      width: 250px;
      margin: 0;
      padding: 0;
      color: white;
      @media (max-width: 776px) {
        font-size: 24px;
        text-align: center;
      }
    }
    &_breadcrumb {
      color: white;
      @media (max-width: 776px) {
        display: none;
      }
    }
  }
}
</style>