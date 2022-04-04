<template>
  <div class="product-list">
      <mcv-product
          v-for="(product, index) in PRODUCTS"
          :product_data="product"
          :key="index"
          @deleteFromList="deleteFromList(index)"
      ></mcv-product>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import McvProduct from "@/components/Product";

export default {
  name: "McvProductList",
  components: {McvProduct},
  data: () => ({}),
  methods: {
    ...mapMutations([
      'REMOVE_FROM_LIST'
    ]),
    deleteFromList(index) {
      this.$store.commit('REMOVE_FROM_LIST', index)
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  },

}
</script>

<style scoped>

</style>