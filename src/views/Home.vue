<template>
  <div class="container">
    <div class="header">
      <h1>Добавление товара</h1>
      <mcv-dropdown/>
    </div>

    <div class="core">
      <mcv-form/>
      <mcv-product-list/>
    </div>
  </div>
</template>

<script>
import McvForm from "@/components/Form";
import McvProductList from "@/components/ProductList";
import McvDropdown from "@/components/Dropdown";

export default {
  name: 'Home',
  components: {McvDropdown, McvProductList, McvForm}
}
</script>
