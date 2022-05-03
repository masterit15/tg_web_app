<template>
  <header id="header">
<button class="btn_circle notify"><i class="fa fa-bell"></i><span class="count">{{count > 99 ? 99 :  count}}</span></button>
<button class="btn_circle cart"><i class="fa fa-shopping-bag"></i><span class="count">{{count > 99 ? 99 :  count}}</span></button>
<button class="btn_circle logout" @click="unAuth"><i class="fa fa-sign-out"></i></button>
  </header>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      count: 199
    }
  },
  mounted() {
    let userContainer = document.querySelector('.user_container')
    userContainer.addEventListener('click', (e)=>{
      console.log(e);
    })
  },
  computed:{
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['logout']),
    unAuth(){
      const result = this.logout()
      if(result){
        this.$router.push('/auth')
      }
    }
  },
}
</script>