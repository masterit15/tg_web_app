<template>
<!-- :style="{backgroundImage: `url(${images})`}" -->
  <div class="auth" > 
    <form @submit.prevent="authorization" class="auth_form" action="" method="post">
      <div class="field_group">
        <input v-model="login" type="text" name="login" id="login" autocomplete="off">
        <span class="border"></span>
      </div>
      <div class="field_group">
        <input v-model="password" type="password" name="password" id="password">
        <span class="border"></span>
      </div>
      <div class="field_group otp">
        <input v-model="otp" type="password" name="otp" id="otp">
        <span class="border"></span>
        <span class="otp_timer"></span>
        <span class="otp_btn" @click="sendMeOTP()"><i class="fa-solid fa-rotate"></i></span>
      </div>
      <button class="btn">Войти</button>
    </form>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      login: '',
      password: '',
      otp: '',
      images: require('../assets/auth.jpg') 
    }
  },
  methods: {
    ...mapActions(['auth', 'sendOTP']),
    async authorization(){
      const res = await this.auth({login: this.login, password: this.password, otp: this.otp})
      if(res.success){
        this.$router.push('/') 
      }
    },
    sendMeOTP(){
      let timer = document.querySelector('.otp_timer')
      timer.innerHTML = 30
      timer.style.color = '#14C458'
      const interval = setInterval(()=>{
        let old = Number(timer.innerHTML)
        timer.innerHTML = old - 1
        if(Number(timer.innerHTML) <= 20 && Number(timer.innerHTML) >= 10){
          timer.style.color =  '#FF9800'
        }else if(Number(timer.innerHTML) <= 10){
          timer.style.color = '#F83E55'
        }
        if(Number(timer.innerHTML) <= 0){
          timer.innerHTML = ''
          clearInterval(interval)
        }
      },1000)
      this.sendOTP()
    }
  },
}
</script>