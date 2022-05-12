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
        <div class="slider">
          <div class="slider_wrap">
            <img class="slider_item" :class="item.id == product.id ? 'active': ''" :src="item.img" alt="" v-for="item in sliderItems" :key="item.id">
          </div>
          <div class="slider_nav">
            <span class="slider_prev" @click="prev()"><i class="fa fa-chevron-left"></i></span>
            <span class="slider_next" @click="next()"><i class="fa fa-chevron-right"></i></span>
          </div>
        </div>
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
    sliderItems(){
      return [...this.products].filter(p=>p.cat == this.product.cat)
    }
  },
  components: {
    ScrollList,
    StarRating,
    VueSlickCarousel
  },
  methods: {
    prev(){
      let slider = document.querySelector('.slider')
      let slide = document.querySelector('.slider_item.active')
      
      let prev = slide.previousSibling
      let next = prev.nextSibling

      if(prev?.length == 0){
        let slides = [...document.querySelectorAll('.slider_item')]
        slide.classList.remove('active')
        slides.pop().classList.add('active')
        console.log(slider.offsetLeft);
        return false
      }

      if(prev) prev.classList.add('active')
      if(next) next.classList.remove('active')
      
      
    },
    next(){
      let slide = document.querySelector('.slider_item.active')
      
      let next = slide.nextSibling
      let prev = next.previousSibling

      if(next?.length == 0){
        let slides = [...document.querySelectorAll('.slider_item')]
        slide.classList.remove('active')
        slides.shift().classList.add('active')
        return false
      }

      if(next) next.classList.add('active')
      if(prev) prev.classList.remove('active')

      console.log(next);
    }
  },
}
</script>