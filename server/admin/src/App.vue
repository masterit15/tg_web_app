<template>
    <component :is="layout">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </component>
</template>

<script>
import EmptyLayout from "./layouts/EmptyLayout";
import MainLayout from "./layouts/MainLayout";
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "App",
  data() {
    return {
    };
  },
  async updated(){
    await this.checkAuth()
    console.log(this.isAuth);
    if(!this.isAuth){
      this.$router.push('/auth')
    }
  },
  computed: {
    ...mapGetters(['isAuth']),
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    }
  },
  components: {
    EmptyLayout,
    MainLayout
  },
  methods: {
    ...mapActions(['checkAuth'])
  },
};
</script>
<style lang="sass">
@import './sass/main'
</style>
