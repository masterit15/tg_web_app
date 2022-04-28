<template>
  <div class="view_product">
    <div class="product_detail">
      <span class="product_detail_like" @click="like($event,product)"><i class="fa-regular fa-heart"></i></span>
        <img :src="product.img" alt="" class="product_detail_media">
        <div class="product_detail_mid">
          <h3 class="product_detail_title">{{product.title}}</h3>
          <span class="product_detail_price"><i class="fa-solid fa-ruble-sign"></i> {{product.price}}</span>
        </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['products']),
    product(){
      if(this.$route.params.id){
        return this.products.filter(p=>p.id == this.$route.params.id)[0]
      }else{
        return 'this.products'
      }
    }
  },
  methods: {
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