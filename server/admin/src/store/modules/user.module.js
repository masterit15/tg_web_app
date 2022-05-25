import $api from "@/api"

export default {
  state: {
    isAuth: false,
    user: {},
    isLoading: false
  },
  getters: {
    user: state=>state.user,
    isAuth: state=>state.isAuth,
    isLoading: state=>state.isLoading,
  },
  mutations: {
    setAuth(state, isAuth){
      state.isAuth = isAuth
    },
    setUser(state, user){
      state.user = user
    },
    setLoading(state, isLoading){
      state.isLoading = isLoading
    }
  },
  actions: {
    async auth({commit}, data){
      try {
        const response = await $api.post('/user/login', data)
        localStorage.setItem('token', response.data.accessToken);
        commit('setAuth', true);
        commit('setUser', response.data.user);
        return response.data
      } catch (e) {
          commit('setAuth', false);
          console.log(e.response?.data?.message);
      }
    },
    async sendOTP({}){
      try {
        const response = await $api.post('/otp/send')
      } catch (e) {
          console.log(e.response?.data?.message);
      }
    },
    async logout({commit}){
      try {
        const response = await $api.post('/user/logout')
        localStorage.removeItem('token');
        commit('setAuth', false);
        commit('setUser', {});
        return response.data.success
      } catch (e) {
          console.log(e.response?.data?.message);
      }
    },
    async checkAuth({commit}) {
      commit('setLoading', true);
      try {
          const response = await $api.get(`/user/refresh`, {withCredentials: true})
          localStorage.setItem('token', response.data.accessToken);
          commit('setAuth', true);
          commit('setUser', response.data.user);
      } catch (e) {
          console.log(e.response?.data?.message);
          commit('setAuth', false);
      } finally {
          commit('setLoading', false);
      }
  }
  }
}