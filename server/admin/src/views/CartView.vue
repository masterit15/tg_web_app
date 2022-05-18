<template>
  <div class="page view_cart">
    <h3 class="page_title">{{ pageNow }}</h3>
    <div class="catalog_list">
      <div class="catalog_list_item vert" v-for="item in cart" :key="item.id">
        <span class="catalog_list_item_status"><i class="fa fa-fire"></i></span>
        <img :src="item.img" alt="" class="catalog_list_item_media" />
        <div class="catalog_list_item_content">
          <h3 class="catalog_list_item_title">{{item.title}}</h3>
        </div>
        <div class="catalog_list_item_footer">
            <div class="catalog_list_item_action">
              <span class="catalog_list_item_action_bay minus" :class="{active: Number(item.count) > 0}" @click="bayCount($event, 'minus', item)"><span></span></span>
              <input
                type="text"
                name="count"
                class="catalog_list_item_action_bay_count"
                :class="{active: Number(item.count) > 0}"
                :value="item.count"
              />
              <span class="catalog_list_item_action_bay plus" @click="bayCount($event, 'plus', item)"><span></span></span>
            </div>
            <h2 class="catalog_list_item_price"><i class="fa fa-rub"></i> {{item.price}}</h2>
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
export default {
  mixins: [mixins],
  name: "cart",
  data() {
    return {
      log: {}
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