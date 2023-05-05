<template>
  <div class="view_detail">
    <div class="catalog_detail_item">
      <div class="left">
        <div class="catalog_detail_item_content">
          <h2 class="catalog_detail_item_title">{{product.title}}</h2>
          <div class="catalog_detail_item_rating">
          <span>Рейтинг:</span><star-rating @update:rating="setRating" :rating="calcRating([...product.rating])"  :star-size="20" active-color="#F83E55" :glow="1" glow-color="#F83E55" :show-rating="false"/>
          </div>
          <p class="catalog_detail_item_desc">{{product.description}}</p>
          <div class="catalog_detail_item_ingredient_wrap">
          <span>Ингредиенты:</span><ScrollList list-class="catalog_detail_item_ingredient" :items="ingredientArr" :hide-title="false"/>
          </div>
          <h3 class="catalog_detail_item_price"><i class="fa fa-rub"></i>{{product.price}}</h3>
          <button class="catalog_detail_item_addcart" @click="addToCart(1,product)">Добавить в корзину</button>
        </div>
      <scroll-slider :active-id="Number(productId)" :items="items" v-on:call-back-event="getProductDetail"/>
      </div>
      <div class="catalog_detail_item_media" :style="{backgroundImage: `url(${require('../assets/pattern.jpg')})`}">
        <BigSlider :items="items" :active-id="Number(productId)"/>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import ScrollList from '@/components/ScrollList'
import StarRating from 'vue-star-rating'
import VueSlickCarousel from 'vue-slick-carousel'
import ScrollSlider from '@/components/slider/ScrollSlider'
import BigSlider from '@/components/slider/BigSlider'
import mixins from '@/mixins'
export default {
  mixins: [mixins],
  data() {
    return {
      rating: 0,
      isDown: false,
      startX: null,
      scrollLeft: null,
      productId: this.$route.params.id,
      nextProductId: null,
    }
  },
  computed:{
    ...mapGetters(['products','ingredient']),
    product(){
        return [...this.products].filter(p=>p.id == this.productId)[0]
    },
    items() {
      return [...this.products].filter((p) => p.cat == this.product.cat);
    },
    ingredientArr(){
      let ingredients = [...this.ingredient]
      let ingredientsProduct = [...this.product.ingredient]
      return ingredients.filter(i => ingredientsProduct.includes(i.id))
    }
  },
  components: {
    ScrollList,
    ScrollSlider,
    BigSlider,
    StarRating,
    VueSlickCarousel
  },
  methods: {
    ...mapActions(['updateProductRating']),
    getProductDetail(id){
      this.productId = Number(id)
    },
    setRating(rating){
      let star = --rating
      this.product.rating[star]++
      this.updateProductRating({id: this.product.id, rating: this.product.rating})
    },
    calcRating(rating){
      let rate = 0
      let total = 0
      rating.forEach((r,i) => {
        rate += ++i * r
        total += r
      });
      return Math.round(rate / total)
    }
  },
}
</script>