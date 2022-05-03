<template>
  <header id="header">
    <!-- <div class="user_container" v-if="user">
      <span class="user_avatar">{{user?.name?.split('')[0]}}</span>
      <span class="user_name">{{user?.name}}</span>
      <div class="user_dd">
        <ul>
          <li>Настройки</li>
          <li @click="unAuth()">Выйти</li>
        </ul>
      </div>
    </div> -->
  </header>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
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