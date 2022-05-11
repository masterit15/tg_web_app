<template>
  <ul
    class="scrolllist"
    :class="listClass"
  >
    <li class="item" v-for="item in items" :key="item.id">
      <div
        class="item_wrap"
        @click="filterItems($event, item.id)"
      >
        <img :src="item.media" alt="" class="item_media" />
        <h4 class="item_title" v-if="!hideTitle">{{ item.title }}</h4>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: Array,
    listClass: String,
    hideTitle: Boolean
  },
  data() {
    return {
      isDown: false,
      startX: null,
      scrollLeft: null,
    };
  },
  mounted() {
    const slider = document.querySelector(".scrolllist");
    if(slider){
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      // console.log(walk);
    });
    }
  },
  methods: {
    filterItems(event, id) {
      this.$emit("callBackEvents", id);
      let parent = event.target.closest(`.${this.listClass} .item`);
      console.log(this.listClass);
      if (!parent.classList.contains("active")) {
        let mm = document.querySelectorAll(`.${this.listClass} .item`);
        mm.forEach((m) => m.classList.remove("active"));
        parent.classList.add("active");
        this.$emit("callBackEvents", id);
      } else {
        parent.classList.remove("active");
        this.$emit("callBackEvents", null);
      }
    },
    mouseDown(e) {
      let parent = e.target.closest(".scrolllist");
      this.isDown = true;
      e.target.classList.add("active");
      this.startX = e.pageX - e.target.offsetLeft;
      this.scrollLeft = e.target.scrollLeft;
    },
    mouseLeave(e) {
      this.isDown = false;
      e.target.classList.remove("active");
    },
    mouseUp(e) {
      this.isDown = false;
      e.target.classList.remove("active");
    },
    mouseMove(e) {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - e.target.offsetLeft;
      const walk = (x - this.startX) * 3; //scroll-fast
      e.target.scrollLeft = this.scrollLeft - walk;
    },
  },
};
</script>
<style lang="sass">
.scrolllist
  cursor: pointer
  transition: all .3s ease
  overflow-x: auto
  overflow-y: hidden
  list-style: none
  white-space: nowrap
  &::-webkit-scrollbar
    display: none
  &.active
    cursor: grabbing
    transform: scale(1.01)
    transition: all .3s ease
</style>