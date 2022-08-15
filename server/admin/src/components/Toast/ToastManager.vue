<template>
  <transition-group name="toasts" v-show="toasts.length > 0" tag="div" class="c-toasts">
    <toast
      class="toasts-item"
      v-for="toast in toasts"
      :toast="toast"
      :key="toast.id"
    ></toast>
  </transition-group>
</template>
<script>
let toastID = 0;
let hellos = ['Здорова!', 'Привет!', 'Съешь мои шорты!', 'Лабу...лабу даб..даб!', 'Aloha!'];
let states = ['success', 'danger', 'warning', 'info'];

function randomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomArrayItem (arr) {
  return arr[randomInt(0, arr.length - 1)];
}
import Toast from './Toast.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
  components: {Toast},
  computed:{
    ...mapGetters(['toasts'])
  },
  methods: {
    ...mapActions(['addToast']),
  },
  mounted() {
    // setInterval(() => {
    //   this.addToast({
    //     type: randomArrayItem(states),
    //     text: randomArrayItem(hellos),
    //     duration: randomInt(1000, 8000),
    //   });
    // }, 1000);
  },
};
</script>

<style lang="sass">
.toasts
  &_item
    transition: all 0.5s

  &-enter, &-leave-to
    opacity: 0
    transform: scale(0.9)
  &-leave-active
    position: absolute
    z-index: -1

.c-toasts
  position: fixed
  top: 20px
  right: 20px
  z-index: 9999
  width: 300px
  // pointer-events: none
  height: 100vh
  overflow-y: auto

.c-toasts__item
  display: flex
  align-items: center
  width: 100%
  margin-bottom: 10px
  padding: 15px
  border-radius: 5px
  color: #fff
  background-color: rgba(0, 0, 0, 0.8)

.c-toasts__item-text
  font-size: 14px
  line-height: 1.5

.c-toasts__item--success
  background-color: #14C458

.c-toasts__item--danger
  background-color: #e74c3c

.c-toasts__item--warning
  background-color: #ffcc00

.c-toasts__item--info
  background-color: #40a6ce
</style>