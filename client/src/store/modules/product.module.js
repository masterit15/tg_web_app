export default {
  state: {
    ingredient: [
      {id:1, title: 'Лук', icon: require('@/assets/ingredient_img/onion.svg')},
      {id:2, title: 'Бекон', icon: require('@/assets/ingredient_img/bacon.svg')},
      {id:3, title: 'Сыр', icon: require('@/assets/ingredient_img/cheese-food.svg')},
      {id:4, title: 'Салат', icon: require('@/assets/ingredient_img/lettuce.svg')},
      {id:5, title: 'Томаты', icon: require('@/assets/ingredient_img/tomato.svg')},
      {id:6, title: 'Огурец', icon: require('@/assets/ingredient_img/сucumber.svg')},
      {id:7, title: 'Горчица', icon: require('@/assets/ingredient_img/gorchica.svg')},
      {id:8, title: 'Кетчуп', icon: require('@/assets/ingredient_img/ketchup.svg')},
      {id:9, title: 'Чесночный соус', icon: require('@/assets/ingredient_img/sous_chesnochny.svg')},
      {id:10, title: 'Грибы', icon: require('@/assets/ingredient_img/grib.svg')},
      {id:11, title: 'Кортофель', icon: require('@/assets/ingredient_img/potato.svg')},
    ],
    products: [
      { id: 1, cat: 1, title: 'Бургер', img: require('@/assets/menu_cat_img/burger.svg'), price: 280, ingredient: [
        {id:1, title: 'Лук', icon: require('@/assets/ingredient_img/onion.svg')},
        {id:2, title: 'Бекон', icon: require('@/assets/ingredient_img/bacon.svg')},
        {id:3, title: 'Сыр', icon: require('@/assets/ingredient_img/cheese-food.svg')},
        {id:4, title: 'Салат', icon: require('@/assets/ingredient_img/lettuce.svg')},
        {id:5, title: 'Томаты', icon: require('@/assets/ingredient_img/tomato.svg')},
        {id:6, title: 'Огурец', icon: require('@/assets/ingredient_img/сucumber.svg')},
        {id:7, title: 'Горчица', icon: require('@/assets/ingredient_img/gorchica.svg')},
        {id:8, title: 'Кетчуп', icon: require('@/assets/ingredient_img/ketchup.svg')},
      ], description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.'},
      { id: 2, cat: 2, title: 'Сендвич', img: require('@/assets/menu_cat_img/sandwich.svg'), price: 200, ingredient: [
        {id:1, title: 'Лук', icon: require('@/assets/ingredient_img/onion.svg')},
        {id:2, title: 'Бекон', icon: require('@/assets/ingredient_img/bacon.svg')},
        {id:3, title: 'Сыр', icon: require('@/assets/ingredient_img/cheese-food.svg')},
        {id:4, title: 'Салат', icon: require('@/assets/ingredient_img/lettuce.svg')},
        {id:5, title: 'Томаты', icon: require('@/assets/ingredient_img/tomato.svg')},
        {id:6, title: 'Огурец', icon: require('@/assets/ingredient_img/сucumber.svg')},
        {id:7, title: 'Горчица', icon: require('@/assets/ingredient_img/gorchica.svg')},
        {id:8, title: 'Кетчуп', icon: require('@/assets/ingredient_img/ketchup.svg')},
        {id:8, title: 'Чесночный соус', icon: require('@/assets/ingredient_img/sous_chesnochny.svg')},
      ], description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.'},
      { id: 4, cat: 3, title: 'Пицца', img: require('@/assets/menu_cat_img/pizzafood.svg'), price: 340, ingredient: [
        {id:2, title: 'Бекон', icon: require('@/assets/ingredient_img/bacon.svg')},
        {id:3, title: 'Сыр', icon: require('@/assets/ingredient_img/cheese-food.svg')},
        {id:5, title: 'Томаты', icon: require('@/assets/ingredient_img/tomato.svg')},
        {id:10, title: 'Грибы', icon: require('@/assets/ingredient_img/grib.svg')},
      ], description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.'},
      { id: 5, cat: 4, title: 'Салат', img: require('@/assets/menu_cat_img/salad.svg'), price: 210 },
      { id: 6, cat: 5, title: 'Картошка', img: require('@/assets/menu_cat_img/potatoes.svg'), price: 120, ingredient: [
        {id:11, title: 'Кортофель', icon: require('@/assets/ingredient_img/potato.svg')},
      ], description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.'},
      { id: 7, cat: 6, title: 'Хотдоги', img: require('@/assets/menu_cat_img/foodhotdog.svg'), price: 240, description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Сих, снова текст домах образ вдали семантика заглавных составитель великий дал взобравшись заголовок если океана даль переулка парадигматическая моей дорогу.' },
      { id: 8, cat: 7, title: 'Напитки', img: require('@/assets/menu_cat_img/batidogranizado.svg'), price: 80 },
      { id: 9, cat: 8, title: 'Кофе', img: require('@/assets/menu_cat_img/coffecuptotakeaway.svg'), price: 130 },
      { id: 10, cat: 9, title: 'Ролы', img: require('@/assets/menu_cat_img/sushifood.svg'), price: 320 },
      { id: 11, cat: 1, title: 'Бургер двойной', img: require('@/assets/menu_cat_img/burger.svg'), price: 480 },

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