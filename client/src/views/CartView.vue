<template>
  <div class="view_cart">
    <div class="product_cart_list">
      <div class="product_list_item" v-for="item in cart" :key="item.id">
        <span class="product_list_item_like" @click="like($event,item)"><i class="fa-regular fa-heart"></i></span>
        <span class="product_list_item_delete" @click="deleteProduct(item)"><i class="fa-solid fa-trash-can"></i></span>
        <router-link :to="{ path: `/product/${item.id}`}">
        <img :src="item.img" alt="" class="product_list_item_media">
        </router-link>
        <div class="product_list_item_content">
        <router-link :to="{ path: `/product/${item.id}`}" class="product_list_item_top">
          <h3 class="product_list_item_title">{{item.title}}</h3>
        </router-link>
        <div class="product_list_item_bottom">
          <span class="product_list_item_price"><i class="fa-solid fa-ruble-sign"></i> {{item.price}}</span>
          <div class="product_list_item_bay">
            <span class="product_list_item_bay_btn minus" :class="{active: Number(item.count) > 0}" @click="bayCount($event, 'minus', item)"><i class="fa-solid fa-minus"></i></span>
            <input class="product_list_item_bay_count" :class="{active: Number(item.count) > 0}" :value="item.count" type="text"/>
            <span class="product_list_item_bay_btn plus" @click="bayCount($event, 'plus', item)"><i class="fa-solid fa-plus"></i></span>
          </div>
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
  name: "cart",
  data() {
    return {
    }
  },
  mounted() {
    const MainButtonParam = {
      text: 'Заказать',// - текст кнопки;
      color: '#469c77',// - цвет кнопки;
      text_color: '#ffffff',// - цвет текста кнопки;
      is_active: true,// - включить кнопку;
      is_visible: true,// - показать кнопку.
    }
    window.Telegram.WebApp.MainButton.setParams(MainButtonParam)
    window.Telegram.WebApp.MainButton.onClick(()=>{
      window.Telegram.WebApp.sendData(window.Telegram.WebApp.initDataUnsafe)
    })
    
  },
  computed: {
    ...mapGetters(['cart']),
    totalPrice(){
      let total = 0
      this.cart.forEach(ce => {
        total += ce.price * ce.count
      });
      return total
    }
  },
  methods: {
    deleteProduct(item){
      this.deleteCartProduct(item.id)
    }
  },
  destroyed() {
    window.Telegram.WebApp.MainButton.disable()
  },
};
</script>