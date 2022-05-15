<template>
  <div class="slider">
    <div class="slider_wrap">
      <img
        class="slider_item"
        :class="item.id == activeId ? 'active' : ''"
        :src="item.img"
        alt=""
        v-for="item in items"
        :key="item.id"
        :data-id="item.id"
        @click="activeItem($event, 
        item.id)"
      />
    </div>
    <div class="slider_nav">
      <span class="slider_prev" @click="prev($event)"
        ><i class="fa fa-chevron-left"></i
      ></span>
      <span class="slider_next" @click="next($event)"
        ><i class="fa fa-chevron-right"></i
      ></span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    activeId: Number
  },
  created() {
    this.$emit('callBackEvent', this.activeId)
  },
  async mounted() {
    this.selectActive()
  },
  computed: {
    ...mapGetters(["products"]),
    product() {
      if (this.$route.params.id) {
        return [...this.products].filter(
          (p) => p.id == this.$route.params.id
        )[0];
      } else {
        return "this.products";
      }
    },
    items() {
      return [...this.products].filter((p) => p.cat == this.product.cat);
    },
  },
  methods: {
    activeItem(e, id){
      let slides = [...document.querySelectorAll(".slider_item")];
      slides.forEach(s=>s.classList.remove('active'))
      e.target.classList.add('active')
      this.selectActive()
    },
    prev(e) {
      let slide = document.querySelector(".slider_item.active");
      let prev = slide.previousSibling;
      let next = prev.nextSibling;
      if (prev?.length == 0) {
        let slides = [...document.querySelectorAll(".slider_item")];
        slide.classList.remove("active");
        slides.pop().classList.add("active");
        slides.pop().scrollIntoView({ inline: "center", behavior: "smooth" });
        this.selectActive()
        return false;
      }
      if (prev) prev.classList.add("active");
      if (next) next.classList.remove("active");
      slide.scrollIntoView({ inline: "center", behavior: "smooth" });
      this.selectActive()
    },
    next() {
      let slide = document.querySelector(".slider_item.active");
      let next = slide.nextSibling;
      let prev = next.previousSibling;
      if (next?.length == 0) {
        let slides = [...document.querySelectorAll(".slider_item")];
        slide.classList.remove("active");
        slides.shift().classList.add("active");
        slides.shift().scrollIntoView({ inline: "center", behavior: "smooth" });
        this.selectActive()
        return false;
      }
      if (next) next.classList.add("active");
      if (prev) prev.classList.remove("active");
      slide.scrollIntoView({ inline: "center", behavior: "smooth" });
      this.selectActive()
    },
    async selectActive(){
      let activeNow = document.querySelector(".slider_item.active");
      let next = activeNow.nextSibling
      await this.$emit('callBackEvent', activeNow.dataset.id)
      
      if (next?.length == 0) {
        let slides = [...document.querySelectorAll(".slider_item")];
        console.log(slides.shift().dataset.id);
        this.$emit('nextItem', slides.shift().dataset.id)
      }else{
        this.$emit('nextItem', next.dataset.id)
      }
      
    }
  },
};
</script>