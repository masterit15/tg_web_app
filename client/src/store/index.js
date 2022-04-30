import { createStore } from 'vuex'
import botModule from './modules/bot.module'
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
    botModule,
    menuModule,
    cartModule,
    productModule
  }
})
