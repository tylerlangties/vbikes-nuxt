<template>
  <div>
    <Hero/>
    <section class="container">
      <div class="homepage-content">
        <b-container>
          <b-row>
            <b-col col lg="4" sm="12" xs="12">
              <h3 class="introduction-title">
                We're
                <strong>Village Bikes</strong>
              </h3>
            </b-col>
            <b-col col lg="8" sm="12" xs="12">
              <p
                class="introduction-block"
              >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </b-col>
          </b-row>
        </b-container>
        <card-container></card-container>
        <div class="container products">
          <h3>Our Products</h3>
          <Carousel></Carousel>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '~/components/partials/HomePage/Hero.vue'
import CardContainer from '~/components/partials/HomePage/CardContainer.vue'
import Carousel from '~/components/partials/HomePage/Carousel.vue'
export default {
  components: {
    Hero,
    CardContainer,
    Carousel
  }
}
</script>

<style scoped lang="scss">
.homepage-content {
  padding: 4rem 0.5rem;
  .introduction-title {
    margin: 0;
    padding-right: 1rem;
  }
}
.products {
  margin-top: 4rem;
}
</style>
