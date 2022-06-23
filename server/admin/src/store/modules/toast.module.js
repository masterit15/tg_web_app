let toastID = 0
export default {
  state: {
    toasts: []
  },
  getters: {
    toasts: state=> state.toasts
  },
  mutations: {
    setToasts(state, toast){
      state.toasts.push(toast)
    },
    deleteToasts(state, id){
     state.toasts = state.toasts.filter((m) => m.id !== id);
    }
  },
  actions: {
    addToast({commit},{ type = "info", duration = 4000, text }) {
      const id = toastID++;
      commit('setToasts', { id, type, text })
      // this.toasts.push({ id, type, text });
      setTimeout(() => {
        commit('deleteToasts', id)
      }, duration);
    },
  }
}