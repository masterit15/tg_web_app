<template>
  <div class="eee">
    <component :is="layout">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </component>
    <toast-manager></toast-manager>
  </div>
</template>

<script>
import EmptyLayout from "./layouts/EmptyLayout";
import MainLayout from "./layouts/MainLayout";
import { mapActions, mapGetters } from "vuex";
import ToastManager from "@/components/Toast/ToastManager.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  async updated() {
    await this.checkAuth();
    if (!this.isAuth) {
      this.$router.push("/auth");
    }
  },
  computed: {
    ...mapGetters(["isAuth"]),
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },
  components: {
    ToastManager,
    EmptyLayout,
    MainLayout,
  },
  methods: {
    ...mapActions(["checkAuth"]),
  },
};
</script>
<style lang="sass">
@import './sass/main'
</style>
