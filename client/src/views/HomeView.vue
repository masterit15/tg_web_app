<template>
  <div class="home">
    <div class="product_list">
      <div class="product_list_item" v-for="item in products" :key="item.id">
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
  name: "HomeView",
  mounted() {
    
  },
  computed: {
    ...mapGetters(['products'])
  }
};
</script>
