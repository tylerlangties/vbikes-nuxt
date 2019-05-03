<template>
  <div class="card">
    <img class="card-icon" v-if="icon_src" :src="icon_src">
    <h4 class="card-title">{{info.title}}</h4>
    <p class="card-content">{{info.body}}</p>
    <a class="card-button" href="#">Read More</a>
  </div>
</template>

<script>
export default {
  props: {
    icon_src: {
      type: String,
      required: false
    },
    info: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  height: 280px;
  width: 240px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 2rem 0 0 0;
  @media (max-width: 992px) {
    width: 80%;
    margin-bottom: 0.5rem;
  }
  @media (max-width: 776px) {
    width: 100%;
  }
  &-icon {
    max-height: 50px;
    border-radius: 50px;
    background-color: #1c63b8;
    width: 50px;
    padding: 0.5rem;
    box-sizing: border-box;
  }
  &-title {
    font-weight: 400;
  }
  &-content {
    max-width: 90%;
    color: #777777;
  }
  &-button {
    width: 100%;
    height: 45px;
    background-color: #1c63b8;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 0.9rem;
    transition: all 200ms ease;
    &:hover {
      background-color: black;
      text-decoration: none;
    }
  }
}
</style>