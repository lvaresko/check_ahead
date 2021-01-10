<template>
  <div id="app">
    <Navbar @open="toggleSidebar" />
    <Sidebar :openSidebar="sidebarOpen" @close="toggleSidebar" />

    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Layout/Navbar.vue";
import Sidebar from "@/components/Layout/Sidebar.vue";

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
