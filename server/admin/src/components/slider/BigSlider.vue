<template>
  <div class="slider_big">
    <div class="slider_big_wrap">
      <div class="slider_big_item" :class="item.id == activeId ? 'active' : ''" v-for="(item, index) in items" :key="index" :data-id="item.id">
        <img :src="item.img" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    activeId: {
      type: Number,
      default: () => null,
    },
  },
  watch:{
    activeId(){
      this.scrollToActive()
    }
  },
  mounted() {
    this.scrollToActive()
  },
  methods: {
    scrollToActive(){
      let wrap = document.querySelector('.slider_big_wrap')
      let slide = [...document.querySelectorAll('.slider_big_item')]
      let index = slide.findIndex(s=>Number(s.dataset.id) == Number(this.activeId))
      setTimeout(()=>{
         wrap.scrollTo({top: 0,left: 450 * index,behavior: 'smooth'});
      },0)
     
    }
  },
};
</script>