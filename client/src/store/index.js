import { createStore } from 'vuex'
import cartModule from './modules/cart.module'
import menuModule from './modules/menu.module'
import productModule from './modules/product.module'
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
menuModule,
cartModule,
productModule
  }
})
