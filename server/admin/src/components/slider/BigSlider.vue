<template>
  <div class="slider_big">
    <div class="slider_big_wrap">
      <div class="slider_big_item" :class="item.id == activeId ? 'active' : ''" v-for="(item, index) in items" :key="index">
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
      let slide = document.querySelector('.slider_big_item.active')
      slide.scrollIntoView({ inline: "center", behavior: "smooth" });
    }
  },
  methods: {
    prev() {},
    next() {},
  },
};
</script>
<style lang="sass">
.slider
  &_big
    &_wrap
      width: 750px
      display: flex
      justify-content: flex-start
      align-items: center
      overflow: hidden
      transform: translateX(-250px)
    &_item
      flex: 0 0 500px
      &.active
        img
          transition: all .3s ease
          filter: blur(0px)
          transform: scale(1.0)
      img
        display: flex
        width: 100%
        height: auto
        filter: blur(5px)
        transform: scale(0.7)
        transition: all .3s ease
</style>