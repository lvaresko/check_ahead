<template>
  <div id="app">
    <Navbar v-if="store.currentUser" @open="toggleSidebar" />
    <!--  v-if='$route.path !== "/login" && $route.path !== "/signup"' tako da se navbar ne vidi ako nisi ulogiran-->
    <Sidebar :openSidebar="sidebarOpen" @close="toggleSidebar" />

    <router-view :key="$route.fullPath" id="app_content" />

    <Footer v-if="store.currentUser" />
  </div>
</template>

<script>
import Navbar from "@/components/Layout/Navbar.vue";
import Sidebar from "@/components/Layout/Sidebar.vue";
import Footer from "@/components/Layout/Footer.vue";
import { firebase } from "@/firebase";
import store from "@/store";
import router from "@/router";

//Observer
firebase.auth().onAuthStateChanged((user) => {
  const currentRoute = router.currentRoute;
  if (user) {
    //user is signed in
    console.log("Signed in: " + user.email);
    store.currentUser = user.email;

    if (!currentRoute.meta.needsUser) {
      router.push({ name: "Home" });
    }
  } else {
    console.log("No user");
    store.currentUser = null;

    if (currentRoute.meta.needsUser) {
      router.push({ name: "Login" });
    }
  }
});

export default {
  name: "App",
  data: () => {
    return {
      store,
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
a {
  color: #595959;

  &.router-link-exact-active {
    color: #6fa2b4;
  }
}
</style>
