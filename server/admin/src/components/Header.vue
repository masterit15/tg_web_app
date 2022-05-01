<template>
  <header id="header">
    <div class="user_container" v-if="user">
      <span class="user_avatar">{{user?.name?.split('')[0]}}</span>
      <span class="user_name">{{user?.name}}</span>
      <div class="user_dd">
        <ul>
          <li>Настройки</li>
          <li @click="unAuth()">Выйти</li>
        </ul>
      </div>
    </div>
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
<style lang="sass">
#header
  background-color: #fff
  width: 100%
  height: 60px
  display: flex
  justify-content: flex-end
.user
  &_container
    position: relative
    display: flex
    justify-content: flex-start
    align-items: center
    width: 120px
    height: 100%
    gap: 15px
    cursor: pointer
  &_avatar
    width: 45px
    height: 45px
    border-radius: 100%
    border: 2px solid #ddd
    background-color: #eee
    display: flex
    justify-content: center
    align-items: center
.user_dd
  position: absolute
  left: 0
  top: 100%
  background-color: #fff
  ul
    list-style: none
    padding: 0
    margin: 0
    li
      width: 100%
      padding: 8px 15px
      &:hover
        background-color: #ddd
</style>