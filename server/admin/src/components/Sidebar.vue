<template>
  <aside id="sidebar">
    <div class="user_container" v-if="user">
      <span class="user_avatar">{{user?.name?.split('')[0]}}</span>
      <span class="user_name">{{user?.name}}</span>
    </div>
    <Navigation/>
  </aside>
</template>
<script>
import Navigation from './Navigation.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters(['user'])
  },
  methods: {

  },
  components:{
    Navigation
  }
}
</script>