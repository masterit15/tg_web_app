export default {
  state: {
    editorProductShow: false,
    category: [
      {id:1, title: "Бургеры", media: require('@/assets/menu_cat_img/burger.svg')},
      {id:2, title: "Сендвичи", media: require('@/assets/menu_cat_img/sandwich.svg')},
      {id:3, title: "Пицца", media: require('@/assets/menu_cat_img/pizzafood.svg')},
      {id:4, title: "Салаты", media: require('@/assets/menu_cat_img/salad.svg')},
      {id:5, title: "Кортошка", media: require('@/assets/menu_cat_img/potatoes.svg')},
      {id:6, title: "Хотдоги", media: require('@/assets/menu_cat_img/foodhotdog.svg')},
      {id:7, title: "Напитки", media: require('@/assets/menu_cat_img/batidogranizado.svg')},
      {id:8, title: "Кофе", media: require('@/assets/menu_cat_img/coffecuptotakeaway.svg')},
      {id:9, title: "Ролы", media: require('@/assets/menu_cat_img/sushifood.svg')},
    ],
    ingredient: [
      {id:1, title: 'Лук', media: require('@/assets/ingredient_img/onion.svg')},
      {id:2, title: 'Бекон', media: require('@/assets/ingredient_img/bacon.svg')},
      {id:3, title: 'Сыр', media: require('@/assets/ingredient_img/cheese-food.svg')},
      {id:4, title: 'Салат', media: require('@/assets/ingredient_img/lettuce.svg')},
      {id:5, title: 'Томаты', media: require('@/assets/ingredient_img/tomato.svg')},
      {id:6, title: 'Огурец', media: require('@/assets/ingredient_img/сucumber.svg')},
      {id:7, title: 'Горчица', media: require('@/assets/ingredient_img/gorchica.svg')},
      {id:8, title: 'Кетчуп', media: require('@/assets/ingredient_img/ketchup.svg')},
      {id:9, title: 'Чесночный соус', media: require('@/assets/ingredient_img/sous_chesnochny.svg')},
      {id:10, title: 'Грибы', media: require('@/assets/ingredient_img/grib.svg')},
      {id:11, title: 'Кортофель', media: require('@/assets/ingredient_img/potato.svg')},
    ],
    products: [
      { id: 1, cat: 1, rating: [20,40,57,43,90], title: 'Бургер', img: require('@/assets/img/burger.png'), price: 280, ingredient: [1,2,3,4,5,6,7,8], description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.', weight: 430, },
      { id: 2, cat: 2, rating: [5,40,4,78,127], title: 'Сендвич', img: require('@/assets/img/sandwich.png'), price: 200, ingredient: [1,2,3,4,5,6,7,8,9], description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.', weight: 330},
      { id: 4, cat: 3, rating: [7,40,57,43,90], title: 'Пицца', img: require('@/assets/img/pizza.png'), price: 340, ingredient: [2,3,5,10], description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.', weight: 300},
      { id: 5, cat: 4, rating: [2,12,4,5,34], title: 'Салат', img: require('@/assets/img/salad.png'), price: 210, ingredient: [], description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.' , weight: 450},
      { id: 6, cat: 5, rating: [7,6,45,43,120], title: 'Картошка', img: require('@/assets/img/fri.png'), price: 120, ingredient: [11], description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.', weight: 200},
      { id: 11, cat: 1, rating: [3,40,57,43,90], title: 'Бургер двойной', img: require('@/assets/img/bigburger.png'), price: 380,ingredient: [], description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.' , weight: 130},
      { id: 12, cat: 1, rating: [5,40,57,43,90], title: 'Ананас', img: require('@/assets/img/ananas.png'), price: 490,ingredient: [], description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.' , weight: 500},
      { id: 13, cat: 1, rating: [8,3,5,8,5], title: 'Салат веган', img: require('@/assets/img/salad2.png'), price: 280,ingredient: [], description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.' , weight: 230},
      { id: 14, cat: 1, rating: [9,40,57,43,78], title: 'Суп', img: require('@/assets/img/sup.png'), price: 230,ingredient: [], description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.' , weight: 230},
    ]
  },
  getters: {
    products: state => state.products,
    category: state => state.category,
    ingredient: state => state.ingredient,
    editorProductShow: state => state.editorProductShow
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setProductEditor(state, param) {
      state.editorProductShow = param
    },
    setProductRating(state, product){
      const index = state.products.findIndex(p=>p.id == product.id)
      state.products[index].rating = product.rating
    }
  },
  actions: {
    getProducts({ commit }, params) {
      commit('setCartProduct', products)
    },
    updateProductRating({commit}, product){
      console.log(product);
      commit('setProductRating', product)
    },
    productEditorOpen({commit}, param){
      commit('setProductEditor', param)
    },
    productEditorClose({commit}, param){
      commit('setProductEditor', param)
    },
  }
}