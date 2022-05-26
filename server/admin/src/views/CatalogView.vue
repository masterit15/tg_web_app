<template>
  <div class="page view_catalog csll">
    <ScrollList list-class="catalog_cat_list" :items="category" :call-back-events="filterItems()"/>
    <div class="catalog_head">
      <div class="catalog_head_start">
        <h3 class="page_title">{{ pageNow }}</h3>
        <button class="btn_filter" @click="isShow = !isShow">
          <i class="fa fa-sliders" aria-hidden="true"></i>
        </button>
      </div>
      <div class="catalog_head_mid">
        <transition name="fade">
          <Filter v-show="isShow" v-on:back-params="filtered" />
        </transition>
      </div>
      <div class="catalog_head_start">
        <button class="btn_view_all">
          Все<i class="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
        <button class="btn add" @click="openEditor()"><span></span></button>
      </div>
    </div>
    
    <div class="catalog_list">
      <div class="catalog_list_item" v-for="item in items" :key="item.id">
        <span class="catalog_list_item_status"><i class="fa fa-fire"></i></span>
         <router-link :to="{ path: `/detail/${item.id}`}" class="catalog_list_item_media">
          <img :src="item.img" alt="" class="catalog_list_item_media" />
        </router-link>
        <div class="catalog_list_item_content">
          <router-link :to="{ path: `/detail/${item.id}`}" >
            <h3 class="catalog_list_item_title">{{item.title}}</h3>
          </router-link>
          <p class="catalog_list_item_desc">{{item.description}}</p>
          <div class="catalog_list_item_footer">
            <h2 class="catalog_list_item_price"><i class="fa fa-rub"></i> {{item.price}}</h2>
            <span class="catalog_list_item_weight">{{calcWeight(item.weight)}}</span>
            <div class="catalog_list_item_action">
              <span class="catalog_list_item_action_bay minus" @click="bayCount($event, 'minus', item)"><span></span></span>
              <input
                type="text"
                name="count"
                class="catalog_list_item_action_bay_count"
              />
              <span class="catalog_list_item_action_bay plus" @click="bayCount($event, 'plus', item)"><span></span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapActions} from "vuex";
import Filter from "@/components/filter/Filter";
import ScrollList from "@/components/ScrollList";
import mixins from '@/mixins/'
export default {
  mixins: [mixins],
  name: "Catalog",
  data() {
    return {
      isShow: false,
      filterParams: {},
    };
  },
  components: {
    Filter,
    ScrollList
  },
  computed: {
    ...mapGetters(['products', 'category']),
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
    ...mapActions(['productEditorOpen']),
    filtered(params) {
      this.filterParams = params
      console.log("filtered", params);
    },
    filterItems(id){
          this.filterParams.cat = id
    },
    openEditor(){
      this.productEditorOpen(true)
    }
  },
};
</script>