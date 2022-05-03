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
import {mapActions} from 'vuex'
export default {
  name: "App",
  data() {
    return {
    };
  },
  updated(){
    this.checkAuth()
  },
  computed: {
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
