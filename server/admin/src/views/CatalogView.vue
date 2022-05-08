<template>
  <div class="page view_catalog">
    <div class="catalog_head">
      <div class="catalog_head_start">
        <h3 class="page_title">{{ pageNow }}</h3>
        <button class="btn_filter" @click="isShow = !isShow">
          <i class="fa fa-sliders" aria-hidden="true"></i>
        </button>
      </div>
      <div class="catalog_head_mid">
        <Filter v-show="isShow" v-on:back-params="filtered" />
      </div>
      <div class="catalog_head_start">
        <button class="btn_view_all">
          Все<i class="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <ul class="catalog_cat_list">
      <li class="catalog_cat_list_item" v-for="item in category" :key="item.id">
        <div class="catalog_cat_list_item_wrap"  @click="filterItems($event, item.id)">
        <img :src="item.media" alt="" class="catalog_cat_list_item_media">
        <h4 class="catalog_cat_list_item_title">{{item.title}}</h4>
        </div>
      </li>
    </ul>
    <div class="catalog_list">
      <div class="catalog_list_item" v-for="item in items" :key="item.id">
        <span class="catalog_list_item_status"><i class="fa fa-fire"></i></span>
        <img :src="item.img" alt="" class="catalog_list_item_media" />
        <div class="catalog_list_item_content">
          <h3 class="catalog_list_item_title">{{item.title}}</h3>
          <p class="catalog_list_item_desc">{{item.description}}</p>
          <div class="catalog_list_item_footer">
            <h2 class="catalog_list_item_price"><i class="fa fa-rub"></i> {{item.price}}</h2>
            <div class="catalog_list_item_action">
              <span class="catalog_list_item_action_bay minus" @click="bayCount($event, 'minus', item)">&minus;</span>
              <input
                type="text"
                name="count"
                class="catalog_list_item_action_bay_count"
              />
              <span class="catalog_list_item_action_bay plus" @click="bayCount($event, 'plus', item)">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
import Filter from "@/components/filter/Filter";
import mixins from '@/mixins/'
export default {
  mixins: [mixins],
  name: "Catalog",
  data() {
    return {
      isShow: false,
      filterParams: {},
      category: [
        {id:1, title: "Бургеры", media: require('../assets/menu_cat_img/burger.svg')},
        {id:2, title: "Сендвичи", media: require('../assets/menu_cat_img/sandwich.svg')},
        {id:3, title: "Пицца", media: require('../assets/menu_cat_img/pizzafood.svg')},
        {id:4, title: "Салаты", media: require('../assets/menu_cat_img/salad.svg')},
        {id:5, title: "Кортошка", media: require('../assets/menu_cat_img/potatoes.svg')},
        {id:6, title: "Хотдоги", media: require('../assets/menu_cat_img/foodhotdog.svg')},
        {id:7, title: "Напитки", media: require('../assets/menu_cat_img/batidogranizado.svg')},
        {id:8, title: "Кофе", media: require('../assets/menu_cat_img/coffecuptotakeaway.svg')},
        {id:9, title: "Ролы", media: require('../assets/menu_cat_img/sushifood.svg')},
      ]
    };
  },
  components: {
    Filter,
  },
  computed: {
    ...mapGetters(['products']),
    items(){
      const productArr = [...this.products]
      
      if(this.filterParams.name){
        return productArr.filter(p=>this.filterParams.name.toLowerCase().split(' ').every(v => p.title.toLowerCase().includes(v)))
      }else if(this.filterParams.cat){
        return productArr.filter(p=>p.cat == this.filterParams.cat)
      }else{
        return this.products
      }
    }
  },
  methods: {
    filtered(params) {
      this.filterParams = params
      console.log("filtered", params);
    },
    filterItems(event, id){
        let parent = event.target.closest('.catalog_cat_list_item')
        if(!parent.classList.contains('active')){
          let mm = document.querySelectorAll('.catalog_cat_list_item')
          mm.forEach(m=>m.classList.remove('active'))
          parent.classList.add('active')
          this.filterParams.cat = id
        }else{
          parent.classList.remove('active')
          this.filterParams.cat = null
        }
    }
  },
};
</script>