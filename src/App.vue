<template>
  <div id="app">
    <Navbar @tooglenav="navOpen = !navOpen" />
   <!-- <Sidebar :open="navOpen" /> -->

    <router-view />
    <sidebar />
  </div>
</template>

<script>
import Navbar from "@/components/Layout/Navbar.vue";
import Sidebar from "@/components/Layout/Sidebar.vue";

export default {
  name: "App",
  data: () => {
    return {
      navOpen: false,
    };
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
