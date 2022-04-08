import Vue from 'vue'
import Vuex from 'vuex'

import products from '@/store/modules/products'
import dropdown from '@/store/modules/dropdown'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    dropdown
  }
})
