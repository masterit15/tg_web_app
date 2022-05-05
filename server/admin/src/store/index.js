import { createStore } from 'vuex'
import menuModule from './modules/menu.module'
import productModule from './modules/product.module'
import userModule from './modules/user.module'
import workerModule from './modules/worker.module'
import cartModule  from './modules/cart.module'
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
    userModule,
    workerModule,
    productModule,
    cartModule 

  }
})
