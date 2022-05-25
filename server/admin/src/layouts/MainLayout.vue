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
      <EditorProduct/>
      </div>
    </div>
  </div>
</template>
<script>
import AppHeader from "../components/Header";
import AppSidebar from "../components/Sidebar";
import AppSidebarRight from "../components/SidebarRight";
import AppFooter from "../components/Footer";
import EditorProduct from "../components/editor/ProductEditor"
export default {
  components: {
    AppHeader,
    AppSidebar,
    AppFooter,
    AppSidebarRight,
    EditorProduct
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