<template>
  <div id="wrapper">
    <div class="row">
      <app-sidebar />
      <main id="main">
        <app-header />
          <router-view v-slot="{ Component }">
            <transition name="fade">
              <component :is="Component" />
            </transition>
          </router-view>
        <app-footer />
      </main>
    </div>
  </div>
</template>
<script>
import AppHeader from "../components/Header";
import AppSidebar from "../components/Sidebar";
import AppFooter from "../components/Footer";
export default {
  components: {
    AppHeader,
    AppSidebar,
    AppFooter
  },
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
  },
};
</script>