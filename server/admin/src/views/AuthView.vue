<template>
  <div class="auth" :style="{backgroundImage: `url(${images})`}">
    <form @submit.prevent="authorization" class="auth_form" action="" method="post">
      <div class="field_group">
        <input v-model="login" type="text" name="login" id="login">
      </div>
      <div class="field_group">
        <input v-model="password" type="password" name="password" id="password">
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
      images: require('../assets/auth.jpg') 
    }
  },
  methods: {
    ...mapActions(['auth']),
    async authorization(){
      const res = await this.auth({login: this.login, password: this.password})
      if(res.success){
        this.$router.push('/') 
      }
    }
  },
}
</script>