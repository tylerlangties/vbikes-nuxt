<template>
  <div class="blog-post" v-if="post">
    <div v-if="post.media" class="blog-post_thumbnail">
      <nuxt-link :to="{name: 'post-id', params: { id: post.id } }">
        <img class="featured-image" :src="post.media.large">
      </nuxt-link>
    </div>
    <div v-else>
      <p>no image available</p>
    </div>
    <div class="blog-post_title">
      <nuxt-link :to="{name: 'post-id', params: { id: post.id } }" v-html="post.title"></nuxt-link>
    </div>
    <!-- <ul class="blog-post_details">
      <li>
        <span>
          <font-awesome-icon icon="user"/>
        </span>
        {{getAuthor(post.author)}}
      </li>
      <li>
        <span>
          <font-awesome-icon icon="tags"/>
        </span>
        {{getCategory(post.categories[0])}}
      </li>
    </ul>-->
    <div class="blog-post_content">
      <p v-html="post.excerpt"></p>
    </div>

    <nuxt-link :to="{name: 'post-id', params: { id: post.id } }">
      <a class="blog-post_button">Read More</a>
    </nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
  //   methods: {
  //     getCategory(id) {
  //       const cat = this.allCategories.find(cat => cat.id == id);
  //       if (cat) {
  //         return cat.name;
  //       }
  //     },
  //     getAuthor(id) {
  //       const author = this.allUsers.find(auth => auth.id == id);
  //       if (author) {
  //         return author.name;
  //       }
  //     }
  //   },
  //   computed: {
  //     ...mapGetters({
  //       allCategories: "allCategories",
  //       allCategoriesLoaded: "allCategoriesLoaded",
  //       allUsers: "allUsers"
  //     })
  //   }
}
</script>

<style lang="scss" scoped>
.blog-post {
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  width: 325px;
  margin: 0.5rem;
  padding: 0 0 3rem;
  position: relative;
  @media (max-width: 776px) {
    width: 100%;
  }
  &_thumbnail {
    img {
      width: 100%;
      height: auto;
      transition: all 200ms ease;
      &:hover {
        box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);
      }
    }
  }
  &_title {
    padding: 1rem 0.5rem 0.5rem;
    a {
      font-size: 18px;
      line-height: 1.4;
      color: #35495e;
    }
  }
  &_content {
    box-sizing: border-box;
    padding: 0.5rem;
    p {
      color: #526488;
      line-height: 1.7;
      font-size: 15px;
    }
  }
  &_details {
    list-style: none;
    display: flex;
    width: 100%;
    padding: 0.5rem;
    margin: 0;
    li {
      font-size: 14px;
      margin: 0 0.25rem;
      color: #777777;
    }
  }
  &_button {
    position: absolute;
    width: 100%;
    height: 40px;
    padding-top: 0.5rem;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: #2980b9;
    color: white !important;
    font-size: 14px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
