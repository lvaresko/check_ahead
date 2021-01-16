<template>
  <div id="app">
    <Navbar @open="toggleSidebar" />
    <!--  v-if='$route.path !== "/login" && $route.path !== "/signup"' tako da se navbar ne vidi ako nisi ulogiran-->
    <Sidebar :openSidebar="sidebarOpen" @close="toggleSidebar" />

    <router-view :key="$route.fullPath" />

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Layout/Navbar.vue";
import Sidebar from "@/components/Layout/Sidebar.vue";
import Footer from "@/components/Layout/Footer.vue";

export default {
  name: "App",
  data: () => {
    return {
      sidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
  components: {
    Navbar,
    Sidebar,
    Footer,
  },
};
</script>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #595959;

    &.router-link-exact-active {
      color: #6fa2b4;
    }
  }
}
</style>
