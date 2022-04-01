import { createStore } from 'vuex'
import menuModule from './modules/menu.module'
import userModule from './modules/user.module'
import workerModule from './modules/worker.module'
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
workerModule

  }
})
