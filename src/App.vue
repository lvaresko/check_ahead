<template>
  <div id="app">
    <Navbar v-if="store.currentUser && store.active" @open="toggleSidebar" />
    <!--  v-if='$route.path !== "/login" && $route.path !== "/signup"' tako da se navbar ne vidi ako nisi ulogiran-->
    <Sidebar :openSidebar="sidebarOpen" @close="toggleSidebar" />

    <router-view :key="$route.fullPath" id="app_content" />

    <Footer v-if="store.currentUser && store.active" />
  </div>
</template>

<script>
import Navbar from "@/components/Layout/Navbar.vue";
import Sidebar from "@/components/Layout/Sidebar.vue";
import Footer from "@/components/Layout/Footer.vue";
import { firebase, db } from "@/firebase";
import store from "@/store";
import router from "@/router";

//Observer
firebase.auth().onAuthStateChanged(async (user) => {
  const currentRoute = router.currentRoute;

  if (user) {
    //user is signed in
    console.log("Signed in: " + user.email);
    store.currentUser = user.uid;
    console.log(user.uid);
    let doc = await db
      .collection("users")
      .doc(store.currentUser)
      .get();

    //ako ne postoji jer observer ne ceka da spremim u colLection kad se s googlom ulogiram
    //valjda se triggera jer se promjeni to stanje prije nego ide stvarat collection
    if (doc.exists) store.active = doc.data().active;

    if (store.currentUser && !store.active) {
      router.push({ name: "ChooseIngredients" });
    } else if (!currentRoute.meta.needsUser) {
      router.push({ name: "Home" });
    } else {
      console.log("No user");
      store.currentUser = null;
      store.active = false;
      if (currentRoute.meta.needsUser) {
        router.push({ name: "Login" });
      }
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
