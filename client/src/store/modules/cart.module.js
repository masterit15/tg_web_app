
export default {
  state: {
    cart: []
  },
  getters: {
    cart: (state) => state.cart
  },
  mutations: {
    setCartProduct(state, product) {
      let index = state.cart.findIndex(p => Number(p.id) == Number(product.id))
      if (index != -1){
        state.cart[index].count = product.count
      }else{
        state.cart.push(product)
      }
    },
    deleteCart(state, id){
      state.cart = state.cart.filter(p => Number(p.id) != Number(id))
    }
  },
  actions: {
    SOCKET_sendOrders({}, msg){
      console.log('SOCKET_sendOrders', msg);
    },
    addCartProduct({ commit }, product) {
      commit('setCartProduct', product)
    },
    deleteCartProduct({ commit }, id) {
      commit('deleteCart', id)
    }
  }
}