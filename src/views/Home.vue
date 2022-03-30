<template>
  <div class="container">
    <div class="header">
      <!--     naming slot mcv-header-->
      <mcv-header>
        <template v-slot:content>
          <h1>{{ headerMessage }}</h1>
        </template>
      </mcv-header>
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
import McvHeader from "@/components/Header";

export default {
  name: 'Home',
  components: {McvHeader, McvDropdown, McvProductList, McvForm},
  data: () => ({
    headerMessage: 'Добавление товара'
  }),
}
</script>
