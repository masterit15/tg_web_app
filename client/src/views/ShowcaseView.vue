<template>
  <div class="showcase">
    <ul class="menu_cat_list">
      <li class="menu_cat_list_item" 
      v-for="item in menuCat" :key="item.id">
      <div class="menu_cat_list_item_wrap"  @click="filterItems($event, item.id)">
        <img class="menu_cat_list_item_icon" :src="item.icon" alt="">
        <div class="menu_cat_list_item_title">{{item.title}}</div>
        </div>
      </li>
    </ul>
    <div class="product_list">
      <div class="product_list_item" v-for="item in items" :key="item.id">
        <span class="product_list_item_like" @click="like($event,item)"><i class="fa-regular fa-heart"></i></span>
        <router-link :to="{ path: `/product/${item.id}`}" >
        <img :src="item.img" alt="" class="product_list_item_media">
        <h3 class="product_list_item_title">{{item.title}}</h3>
        </router-link>
        <div class="product_list_item_bottom">
          <span class="product_list_item_price"><i class="fa-solid fa-ruble-sign"></i> {{item.price}}</span>
          <div class="product_list_item_bay">
            <span class="product_list_item_bay_btn minus" @click="bayCount($event, 'minus', item)"><i class="fa-solid fa-minus"></i></span>
            <input class="product_list_item_bay_count" type="text"/>
            <span class="product_list_item_bay_btn plus" @click="bayCount($event, 'plus', item)"><i class="fa-solid fa-plus"></i></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import mixins from '@/mixins'
export default {
  mixins: [mixins],
  data() {
    return {
      filterCat: 0,
      isActive: false,
      menuCat: [
        {id:1, title: "Бургеры", icon: require('../assets/menu_cat_img/burger.svg')},
        {id:2, title: "Сендвичи", icon: require('../assets/menu_cat_img/sandwich.svg')},
        {id:3, title: "Пицца", icon: require('../assets/menu_cat_img/pizzafood.svg')},
        {id:4, title: "Салаты", icon: require('../assets/menu_cat_img/salad.svg')},
        {id:5, title: "Кортошка", icon: require('../assets/menu_cat_img/potatoes.svg')},
        {id:6, title: "Хотдоги", icon: require('../assets/menu_cat_img/foodhotdog.svg')},
        {id:7, title: "Напитки", icon: require('../assets/menu_cat_img/batidogranizado.svg')},
        {id:8, title: "Кофе", icon: require('../assets/menu_cat_img/coffecuptotakeaway.svg')},
        {id:9, title: "Ролы", icon: require('../assets/menu_cat_img/sushifood.svg')},
      ]
    }
  },
  computed: {
    ...mapGetters(['products']),
    items(){
      if(this.filterCat){
        return this.products.filter(p=>p.cat == this.filterCat)
      }else{
        return this.products
      }
    }
  },
  methods: {
    ...mapActions(['addCartProduct', 'deleteCartProduct']),
    filterItems(event, id){
        let parent = event.target.closest('.menu_cat_list_item')
        if(!parent.classList.contains('active')){
          let mm = document.querySelectorAll('.menu_cat_list_item')
          mm.forEach(m=>m.classList.remove('active'))
          parent.classList.add('active')
          this.filterCat = id
        }else{
          parent.classList.remove('active')
          this.filterCat = null
        }
    }
  },
}
</script>

