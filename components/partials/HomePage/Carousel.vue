<template>
  <carousel :autoplay="true" :scrollPerPage="false" :perPageCustom="[[498, 1],[667, 2], [992, 3]]">
    <slide>
      <div class="slide-wrapper">
        <img src="http://villagetest.website/wp-content/uploads/2019/05/specialized.png">
      </div>
    </slide>
    <slide>
      <div class="slide-wrapper">
        <img src="http://villagetest.website/wp-content/uploads/2019/05/shimano.png">
      </div>
    </slide>
    <slide>
      <div class="slide-wrapper">
        <img src="http://villagetest.website/wp-content/uploads/2019/05/garmin.png">
      </div>
    </slide>
    <slide>
      <div class="slide-wrapper">
        <img src="http://villagetest.website/wp-content/uploads/2019/05/cannondalr.png">
      </div>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    Carousel,
    Slide
  }
}
</script>

<style lang="scss">
.VueCarousel-dot:last-of-type {
  display: none !important;
}
.slide-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  img {
    max-width: 250px;
  }
}
</style>