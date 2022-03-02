<template>
  <div class="product">
    <div class="about">
      <div class="about__img"><img src="@/assets/img/photo.png" height="200" width="332"></div>
      <div class="about__header">{{ product_data.header }}</div>
      <div class="about__description">{{ product_data.description }}</div>
      <div class="about__price">{{ product_data.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "McvProduct",
  data: () => ({}),
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    },
  },
}
</script>

<style scoped>

</style>