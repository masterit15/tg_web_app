import $api from "@/api"

export default {
  state: {
    workers: []
  },
  getters: {
    workers: state=> state.workers
  },
  mutations: {
    setWorkers(state, workers){
      state.workers = workers
    }
  },
  actions: {
    async addWorkers({commit}, param){
      try {
        const response = await $api.get('/user/registration', param)
        commit('setWorkers', response.data.users)
      } catch (e) {
        console.log(e.response?.data?.message);
      }
    },
    async getWorkers({commit}, param){
      try {
        const response = await $api.get('/user/users')
        commit('setWorkers', response.data)
      } catch (e) {
        if(e.response.status == 401){
          localStorage.removeItem('token')
        }
        console.log(e.response?.data?.message);
      }
    }
  }
}