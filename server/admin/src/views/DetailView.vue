<template>
  <div class="view_detail">
    <div class="catalog_detail_item">
      <div class="catalog_detail_item_content">
        <h2 class="catalog_detail_item_title">{{product.title}}</h2>
        <div class="catalog_detail_item_rating">
        <span>Рейтинг:</span><star-rating :rating="rating" :star-size="20" active-color="#F83E55" :glow="1" glow-color="#F83E55" :show-rating="false"/>
        </div>
        <p class="catalog_detail_item_desc">{{product.description}}</p>
        <div class="catalog_detail_item_ingredient_wrap">
        <span>Ингредиенты:</span><ScrollList list-class="catalog_detail_item_ingredient" :items="product.ingredient" :hide-title="true"/>
        </div>
        <h3 class="catalog_detail_item_price"><i class="fa fa-rub"></i>{{product.price}}</h3>
        <button class="catalog_detail_item_addcart">Добавить в корзину</button>
      </div>
      <div class="catalog_detail_item_media" :style="{backgroundImage: `url(${require('../assets/pattern.jpg')})`}">
        <img :src="product.img" alt="">
      </div>
    </div>

  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import ScrollList from '@/components/ScrollList'
import StarRating from 'vue-star-rating'
import VueSlickCarousel from 'vue-slick-carousel'
export default {
  data() {
    return {
      rating: 5
    }
  },
  computed:{
    ...mapGetters(['products']),
    product(){
      if(this.$route.params.id){
        return [...this.products].filter(p=>p.id == this.$route.params.id)[0]
      }else{
        return 'this.products'
      }
    },
  },
  components: {
    ScrollList,
    StarRating,
    VueSlickCarousel
  }
}
</script>