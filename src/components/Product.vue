<template>
  <div class="prod_main">
    <div class="wrap">
      <button
          @click="deleteFromList"
          class="delete"
      >

        <div class="delete_body">
          <div class="delete_ico"></div>
        </div>

      </button>
    </div>
    <div class="product">
      <div class="about__img"><img src="@/assets/img/photo.png"></div>
      <div class="about">
        <div class="about__header">{{ product_data.username }}</div>
        <div class="about__description">{{ product_data.textarea }}</div>
        <div class="about__price">{{ product_data.number }}</div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "McvProduct",
  components: {},
  data: () => ({}),
  methods: {
    deleteFromList() {
      this.$emit('deleteFromList')
    }
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>

</style>