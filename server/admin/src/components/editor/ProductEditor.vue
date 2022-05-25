<template>
    <div class="editor_product" :class="editorProductShow ? 'active': ''">
      <span class="btn_close" @click="close"><i class="fa fa-times"></i></span>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  watch: {
    editorProductShow(){
      console.log('this.editorProductShow',this.editorProductShow);
    }
  },
  computed:{
    ...mapGetters(['editorProductShow'])
  },
  methods: {
    ...mapActions(['productEditorClose']),
    close(){
      this.productEditorClose(false)
    }
  },
}
</script>
<style lang="sass">
.slide-enter-active
  transition: all 0.3s ease
.slide-leave-active
  transition: all 0.3s ease

.slide-enter-from,
.slide-leave-to
  transform: translateX(20px)
  opacity: 0
</style>