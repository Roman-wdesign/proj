<template>
  <div class="container">
    <h1>Добавление товара</h1>
    <div class="core"><mcv-form/>
      <mcv-product-list/></div>
  </div>
</template>

<script>
import McvForm from "@/components/Form";
import McvProductList from "@/components/ProductList";
export default {
  name: 'Home',
  components: {McvProductList, McvForm}
}
</script>
