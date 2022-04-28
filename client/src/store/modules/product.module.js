export default {
  state: {
    products: [
      { id: 1, cat: 4, title: 'durger', img: require('@/assets/menu_cat_img/burger.svg'), price: 280 },
      { id: 2, cat: 2, title: 'durger', img: require('@/assets/menu_cat_img/sandwich.svg'), price: 200 },
      { id: 4, cat: 4, title: 'durger', img: require('@/assets/menu_cat_img/salad.svg'), price: 210 },
      { id: 5, cat: 3, title: 'durger', img: require('@/assets/menu_cat_img/pizzafood.svg'), price: 340 },
      { id: 6, cat: 8, title: 'durger', img: require('@/assets/menu_cat_img/burger.svg'), price: 200 },
      { id: 7, cat: 5, title: 'durger', img: require('@/assets/menu_cat_img/burger.svg'), price: 200 },
      { id: 8, cat: 1, title: 'durger', img: require('@/assets/menu_cat_img/burger.svg'), price: 200 },
      { id: 9, cat: 1, title: 'durger', img: require('@/assets/menu_cat_img/burger.svg'), price: 200 },
      { id: 10, cat: 1, title: 'durger', img: require('@/assets/menu_cat_img/burger.svg'), price: 200 },
      { id: 11, cat: 8, title: 'durger', img: require('@/assets/menu_cat_img/burger.svg'), price: 200 },
      { id: 12, cat: 1, title: 'durger', img: require('@/assets/menu_cat_img/burger.svg'), price: 200 },
      { id: 13, cat: 1, title: 'durger', img: require('@/assets/menu_cat_img/burger.svg'), price: 200 },
      { id: 14, cat: 2, title: 'durger', img: require('@/assets/menu_cat_img/burger.svg'), price: 200 },
      { id: 15, cat: 1, title: 'durger', img: require('@/assets/menu_cat_img/burger.svg'), price: 200 },
      { id: 16, cat: 3, title: 'durger', img: require('@/assets/menu_cat_img/burger.svg'), price: 200 },
      { id: 17, cat: 1, title: 'durger', img: require('@/assets/menu_cat_img/burger.svg'), price: 200 },
    ]
  },
  getters: {
    products: (state) => state.products
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    }
  },
  actions: {
    getProducts({ commit }, params) {
      commit('setCartProduct', products)
    }
  }
}