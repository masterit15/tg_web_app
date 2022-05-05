<template>
  <header id="header">
    <button class="btn_circle notify">
      <i class="fa fa-bell"></i
      ><span class="count">{{ count > 99 ? 99 : count }}</span>
    </button>
    <router-link class="btn_circle cart" to="/cart"
      ><i class="fa fa-shopping-bag"></i
      ><span class="count">{{
        cart.length > 99 ? 99 : cart.length
      }}</span></router-link
    >
    <button class="btn_circle logout" @click="unAuth">
      <i class="fa fa-sign-out"></i>
    </button>
  </header>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      count: 199,
    };
  },
  computed: {
    ...mapGetters(["user", "cart"]),
  },
  methods: {
    ...mapActions(["logout"]),
    unAuth() {
      const result = this.logout();
      if (result) {
        this.$router.push("/auth");
      }
    },
  },
};
</script>