import Vue from 'vue'
import Vuex from 'vuex'

import products from '@/store/modules/products'
import form from '@/store/modules/form'

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
    form
  }
})
