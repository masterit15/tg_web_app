export default {
  state: {
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
      { id: 1, cat: 1, title: 'Бургер', img: require('@/assets/img/burger.png'), price: 280, ingredient: [
        {id:1, title: 'Лук', media: require('@/assets/ingredient_img/onion.svg')},
        {id:2, title: 'Бекон', media: require('@/assets/ingredient_img/bacon.svg')},
        {id:3, title: 'Сыр', media: require('@/assets/ingredient_img/cheese-food.svg')},
        {id:4, title: 'Салат', media: require('@/assets/ingredient_img/lettuce.svg')},
        {id:5, title: 'Томаты', media: require('@/assets/ingredient_img/tomato.svg')},
        {id:6, title: 'Огурец', media: require('@/assets/ingredient_img/сucumber.svg')},
        {id:7, title: 'Горчица', media: require('@/assets/ingredient_img/gorchica.svg')},
        {id:8, title: 'Кетчуп', media: require('@/assets/ingredient_img/ketchup.svg')},
      ], description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.'},
      { id: 2, cat: 2, title: 'Сендвич', img: require('@/assets/img/sandwich.png'), price: 200, ingredient: [
        {id:1, title: 'Лук', media: require('@/assets/ingredient_img/onion.svg')},
        {id:2, title: 'Бекон', media: require('@/assets/ingredient_img/bacon.svg')},
        {id:3, title: 'Сыр', media: require('@/assets/ingredient_img/cheese-food.svg')},
        {id:4, title: 'Салат', media: require('@/assets/ingredient_img/lettuce.svg')},
        {id:5, title: 'Томаты', media: require('@/assets/ingredient_img/tomato.svg')},
        {id:6, title: 'Огурец', media: require('@/assets/ingredient_img/сucumber.svg')},
        {id:7, title: 'Горчица', media: require('@/assets/ingredient_img/gorchica.svg')},
        {id:8, title: 'Кетчуп', media: require('@/assets/ingredient_img/ketchup.svg')},
        {id:8, title: 'Чесночный соус', media: require('@/assets/ingredient_img/sous_chesnochny.svg')},
      ], description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.'},
      { id: 4, cat: 3, title: 'Пицца', img: require('@/assets/img/pizza.png'), price: 340, ingredient: [
        {id:2, title: 'Бекон', media: require('@/assets/ingredient_img/bacon.svg')},
        {id:3, title: 'Сыр', media: require('@/assets/ingredient_img/cheese-food.svg')},
        {id:5, title: 'Томаты', media: require('@/assets/ingredient_img/tomato.svg')},
        {id:10, title: 'Грибы', media: require('@/assets/ingredient_img/grib.svg'),description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.'},
      ], description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.'},
      { id: 5, cat: 4, title: 'Салат', img: require('@/assets/img/salad.png'), price: 210, description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.' },
      { id: 6, cat: 5, title: 'Картошка', img: require('@/assets/img/fri.png'), price: 120, ingredient: [
        {id:11, title: 'Кортофель', media: require('@/assets/ingredient_img/potato.svg'),description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.'},
      ], description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.'},
      { id: 11, cat: 1, title: 'Бургер двойной', img: require('@/assets/img/bigburger.png'), price: 380, description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.' },
      { id: 12, cat: 1, title: 'Ананас', img: require('@/assets/img/ananas.png'), price: 490, description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.' },
      { id: 13, cat: 1, title: 'Салат веган', img: require('@/assets/img/salad2.png'), price: 280, description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.' },
      { id: 14, cat: 1, title: 'Суп', img: require('@/assets/img/sup.png'), price: 230, description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.' },

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