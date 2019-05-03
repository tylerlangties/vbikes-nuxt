<template>
  <div class="container cards">
    <Card
      icon_src="https://png.pngtree.com/svg/20170612/70b8c2c28b.svg"
      v-bind:info="{
          title: 'Some Title',
          body: 'Lorem Ipsum is simply dummy text of the printing.'}
          "
    ></Card>
    <Card
      icon_src="https://png.pngtree.com/svg/20170612/70b8c2c28b.svg"
      v-bind:info="{
          title: 'Some Title',
          body: 'Lorem Ipsum is simply dummy text of the printing.'}
          "
    ></Card>
    <Card
      icon_src="https://png.pngtree.com/svg/20170612/70b8c2c28b.svg"
      v-bind:info="{
          title: 'Some Title',
          body: 'Lorem Ipsum is simply dummy text of the printing.'}
          "
    ></Card>
    <Card
      icon_src="https://png.pngtree.com/svg/20170612/70b8c2c28b.svg"
      v-bind:info="{
          title: 'Some Title',
          body: 'Lorem Ipsum is simply dummy text of the printing.'}
          "
    ></Card>
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
  components: {
    Card
  }
}
</script>

<style scoped lang="scss">
.cards {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>