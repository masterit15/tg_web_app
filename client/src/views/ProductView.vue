<template>
  <div class="view_product">
    <div class="product_detail">
      <span class="product_detail_like" @click="like($event,product)"><i class="fa-regular fa-heart"></i></span>
        <img :src="product.img" alt="" class="product_detail_media">
        <div class="product_detail_content">
          <div class="product_detail_mid">
            <h3 class="product_detail_title">{{product.title}}</h3>
            <span class="product_detail_price"><i class="fa-solid fa-ruble-sign"></i> {{product.price}}</span>
          </div>
          <div class="product_detail_desc">{{product.description}}</div>
          <ul class="menu_scroll_list">
            <li class="menu_scroll_list_item active" v-for="item in product.ingredient" :key="item.id">
              <div class="menu_scroll_list_item_wrap"  @click="filterItems($event, item.id)">
                <img class="menu_scroll_list_item_icon" :src="item.icon" alt="">
                <div class="menu_scroll_list_item_title">{{item.title}}</div>
              </div>
              </li>
          </ul>
          <div class="product_list_item_bay">
            <span class="product_list_item_bay_btn minus" :class="{active: isCart(product)}" @click="bayCount($event, 'minus', product)"><i class="fa-solid fa-minus"></i></span>
            <input class="product_list_item_bay_count" type="text" v-model="count" :class="{active: isCart(product)}"/>
            <span class="product_list_item_bay_btn plus" :class="{active: isCart(product)}" @click="bayCount($event, 'plus', product)"><i class="fa-solid fa-plus"></i></span>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import mixins from '@/mixins'
export default {
  mixins: [mixins],
  data() {
    return {
      count: 0
    }
  },
  computed: {
    ...mapGetters(['products', 'cart']),
    product(){
      if(this.$route.params.id){
        return this.products.filter(p=>p.id == this.$route.params.id)[0]
      }else{
        return 'this.products'
      }
    },

  },
  methods: {
    filterItems(event, id){
        let parent = event.target.closest('.menu_scroll_list_item')
        if(!parent.classList.contains('active')){
          parent.classList.add('active')
        }else{
          parent.classList.remove('active')
        }
    },
    isCart(){
      let cart = JSON.parse(JSON.stringify(this.cart))
      let product = cart.find(p=>p.id == this.$route.params.id)
      if(product){
        this.count = product.count
        return Number(product.count)
      }
      return false
    },
    like(event,product){
      let parent = event.target.closest('.product_detail_like')
      if(!parent.classList.contains('active')){
          parent.classList.add('active')
          event.target.classList.remove('fa-regular')
          event.target.classList.add('fa-solid')
        }else{
          parent.classList.remove('active')
          event.target.classList.remove('fa-solid')
          event.target.classList.add('fa-regular')
        }
    }
  },
}
</script>