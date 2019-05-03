<template>
  <div class="intro">
    <div class="overlay">
      <h1 class="intro-header">
        FOR
        <span class="blue">ALL</span> YOUR REPAIR NEEDS
      </h1>
      <div class="intro-banner">
        <strong>Quality</strong> service is
        <strong>guaranteed</strong>
      </div>
      <div class="intro-detail">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
      </div>
      <div class="intro-buttons">
        <b-button class="button-blue">Our Products</b-button>
        <b-button class="button-clear">Services</b-button>
      </div>
    </div>
    <img src="~/assets/img/hero-image.jpeg">
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.intro {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  .intro-header {
    font-size: 3rem;
    font-weight: 600;
    word-spacing: 2px;
    text-align: center;
    .blue {
      color: #2980b9;
    }
    .intro-buttons {
      display: flex;
      justify-content: center;
    }
  }
  img {
    height: 75vh;
    width: 100%;
    object-fit: cover;
  }
  .overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    height: 100%;
    width: 100%;
    z-index: 1;
    color: white;
  }
  .intro-banner {
    background-color: #fff;
    padding: 10px 25px;
    color: #212121;
    font-size: 26px;
    border-radius: 5px;
    margin: 20px 0;
  }
  .intro-detail {
    max-width: 600px;
    margin-top: 1rem;
    text-align: center;
  }
  .intro-buttons {
    margin-top: 10px;
    .button-blue {
      background: #2980b9;
      border: 2px solid #2980b9;
      transition: all 200ms ease;
      width: 200px;
      margin: 0 0.75rem;
      &:hover {
        background: transparent;
      }
    }
    .button-clear {
      background: transparent;
      border: 2px solid #fff;
      transition: all 200ms ease;
      width: 200px;
      margin: 0 0.75rem;
      &:hover {
        background: #fff;
        color: #212121;
      }
    }
  }
}
</style>