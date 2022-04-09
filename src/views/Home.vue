<template>
  <div class="container">
    <div class="header">

      <mcv-header>
        <template v-slot:content>
          <h1>{{ headerMessage }}</h1>
        </template>

      </mcv-header>

      <mcv-dropdown
          :options="options"
          :selected="selected"
          @select="optionSelect"
      />
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
import McvHeader from "@/components/slot/Header";

export default {
  name: 'Home',
  components: {McvHeader, McvDropdown, McvProductList, McvForm},
  data: () => ({
    headerMessage: 'Добавление товара',
    options: [
      {name: 'min', value: 1},
      {name: 'max', value: 2},
      {name: 'default', value: 3},
    ],
     selected: 'default'
  }),


  methods: {
    optionSelect(option) {
      this.selected = option.name;
    }
  },

}
</script>
