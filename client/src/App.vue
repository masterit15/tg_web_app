<template>
<div>
    <header class="header">
      <div class="back_btn" v-if="pageNow != 'home'" @click="goBack()"><i class="fa-solid fa-arrow-left"></i></div>
      <router-link v-if="pageNow != 'cart'" to="/cart" class="cart">
        <span class="cart_icon"><i class="fa-solid fa-cart-shopping"></i></span>
        <span class="cart_count" v-if="cart.length > 0">{{cart.length}}</span>
      </router-link>
      <div class="cart_total" v-if="totalPrice > 0 && pageNow == 'cart'">
        Заказ на сумму: <span class="cart_total_price"><i class="fa-solid fa-ruble-sign"></i> <span id="value">{{displayNumber}}</span></span>
      </div>
    </header>
    <main class="main">
      <router-view/>
    </main>
    
    <Navigation/>
  </div>
</template>
<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation'
import {mapGetters} from 'vuex'
import mixins from '@/mixins'
import TWA from "@/bot";
export default {
  mixins: [mixins],
  sockets: {
    connect: function() {
      console.log("socket connected");
    },
    customEmit: function(data) {
      console.log(
        'this method was fired by the socket server. eg: io.emit("customEmit", data)'
      );
    }
  },
  mounted() {
    let user = {
                id: 223971340,
                first_name: "Shalva",
                last_name: "",
                language_code: "ru",
                source: 'tg'
                }
    this.$socket.emit('clientJoined', user)
  },
  computed: {
    ...mapGetters(['cart']),
    pageNow(){
      return this.$route.name
    }
  },
  components: {
    Navigation
  },
  methods: {
    goBack(){
      this.$router.back()
    },
  },
};
</script>
<style lang="sass">
@import './sass/main'

</style>
