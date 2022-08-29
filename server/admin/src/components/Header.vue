<template>
  <header id="header">
    <button class="btn_circle notify">
      <i class="fa fa-bell"></i
      ><span class="count" v-if="count>0">{{ count > 99 ? 99 : count }}</span>
    </button>
    <button class="btn_circle cart" v-if="!cart.length">
      <i class="fa fa-shopping-bag"></i>
    </button>
    <router-link v-else class="btn_circle cart active" to="/cart"
      ><i class="fa fa-shopping-bag"></i
      ><span class="count" >{{
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
      count: 0,
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