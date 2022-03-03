<template>
  <div class="prod_main">
    <div class="wrap">
      <div class="delete">

        <div class="delete_body">
          <div class="delete_ico"></div>
        </div>

      </div>
    </div>
    <div class="product">
      <div class="about__img"><img src="@/assets/img/photo.png" height="200" width="100%"></div>
      <div class="about">
        <div class="about__header">{{ product_data.header }}</div>
        <div class="about__description">{{ product_data.description }}</div>
        <div class="about__price">{{ product_data.price }}</div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "McvProduct",
  components: {},
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