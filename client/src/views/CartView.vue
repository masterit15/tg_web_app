<template>
  <div class="view_cart">
    <pre>{{log}}</pre>
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
    <div class="send_invoice" v-if="cart.length > 0">
      <button class="send_invoice_btn"  @click="sendInvoiceToBot">Заказать</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import mixins from '@/mixins'
import TWA from '@/bot'
export default {
  mixins: [mixins],
  name: "cart",
  data() {
    return {
      log: {}
    }
  },
  watch:{
    totalPrice(){
      if(this.cart.length > 0){
        TWA.MainButton.setText('Заказать')
        TWA.MainButton.show()
        this.log = TWA.MainButton
      }
    }
  },
  computed: {
    ...mapGetters(['cart']),
  },
  methods: {
    ...mapActions(['sendInvoice']),
    deleteProduct(item){
      this.deleteCartProduct(item.id)
    },
    sendInvoiceToBot(){
      const products = []
      this.cart.forEach(product=>{
        if(product.count > 1){
          products.push({label: `${product.title} ${product.count}шт.`, amount: `${product.count*product.price}00` })
        }else{
          products.push({label: product.title, amount: `${product.price}00` })
        }
      })
      this.sendInvoice(products)
    }
  }
};
</script>