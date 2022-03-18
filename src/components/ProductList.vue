<template>
  <div class="product-list">
    <mcv-product
        v-for="product in PRODUCTS"
        :product_data="product"
        :key="product.id"
    ></mcv-product>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import McvProduct from "@/components/Product";

export default {
  name: "McvProductList",
  components: {McvProduct},
  data: () => ({

  }),
  computed: {
    ...mapGetters ([
        'PRODUCTS'
    ])
  },
}
</script>

<style scoped>

</style>