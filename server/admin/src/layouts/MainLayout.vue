<template>
  <div id="wrapper">
    <div class="row">
      <app-sidebar />
      <div class="content">
      <app-header />
      <main id="main">
          <router-view v-slot="{ Component }">
            <transition name="fade">
              <component :is="Component" />
            </transition>
          </router-view>
          <app-sidebar-right v-if="!$route.path.includes('detail')" />
      </main>
      <app-footer />
      </div>
    </div>
  </div>
</template>
<script>
import AppHeader from "../components/Header";
import AppSidebar from "../components/Sidebar";
import AppSidebarRight from "../components/SidebarRight";
import AppFooter from "../components/Footer";
export default {
  components: {
    AppHeader,
    AppSidebar,
    AppFooter,
    AppSidebarRight
  },
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
  },
  computed: {
    pageNow(){
      return this.$route
    }
  }
};
</script>