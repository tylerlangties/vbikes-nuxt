<template>
  <div>
    <Banner title="Blog"/>
    <section class="container">
      <div class="title">Blog</div>
      <div v-if="recentPostsLoaded" class="container">
        <div class="row blog">
          <BlogCard v-for="post in recentPosts(limit)" :key="post.id" :post="post"/>
        </div>
        <div class="loadmore">
          <b-button v-if="!allPostsLoaded" class="loadmore-button" @click="loadMore">Load More</b-button>
          <h5 v-else>Showing All Posts</h5>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import Banner from '~/components/Banner.vue'
import BlogCard from '../../components/partials/Blog/BlogCard.vue'
export default {
  components: {
    BlogCard,
    Banner
  },
  data() {
    return {
      limit: 9,
      allPostsLoaded: false,
      postsDisplayed: 9
    }
  },
  computed: {
    ...mapGetters({
      recentPosts: 'posts/recentPosts',
      recentPostsLoaded: 'posts/recentPostsLoaded',
      allCategories: 'categories/allCategories',
      allCategoriesLoaded: 'categories/allCategoriesLoaded'
    })
  },
  async fetch({ store }) {
    await store.dispatch('posts/getPosts')
    await store.dispatch('categories/getAllCategories')
  },
  methods: {
    loadMore() {
      if (!this.allPostsLoaded) {
        this.limit = this.limit + 6
        this.recentPosts(this.limit)
        this.postsDisplayed = this.recentPosts(this.limit).length
        if (this.postsDisplayed < this.limit) {
          this.allPostsLoaded = true
        }
      } else {
        console.log('showing all posts')
      }
    }
  },
  created() {
    console.log(this.$route)
  }
}
</script>
<style lang="scss">
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
.blog {
  margin: 4rem auto 1rem;
  display: flex;
  justify-content: center;
}
.loadmore {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 0 1.5rem 0;
  &-button {
    @media (max-width: 776px) {
      width: 100%;
      max-width: 350px;
    }
  }
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
</style>
