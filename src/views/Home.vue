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
    selected: 'default',
     sortedOptions: [],
  }),


  methods: {
    optionSelect(option) {
      this.selected = option.name;
    },
    // sortProducts(option) {
    //   this.sortedOptions = []
    //   this.PRODUCTS.sort(function (a,b) {
    //     if (option.name === 'max') {
    //       return parseFloat(a.number) - parseFloat(b.number)
    //     }
    //     let vm = this
    //     vm.sortedOptions.push(a,b)
    //   })
    // },

  },
  computed: {
    // filteredProducts() {
    //   if (this.sortedOptions.length) {
    //     return this.sortedOptions
    //   } else {
    //     return this.PRODUCTS
    //   }
    // }
  },
}
</script>
