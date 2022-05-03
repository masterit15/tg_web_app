<template>
  <div id="wrapper">
    <div class="row">
      <app-sidebar />
      <div style="width: 100%">
      <app-header />
      <main id="main">
          <router-view v-slot="{ Component }">
            <transition name="fade">
              <component :is="Component" />
            </transition>
          </router-view>
        <app-footer />
      </main>
      </div>
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