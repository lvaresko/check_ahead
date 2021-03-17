<template>
  <div id="app">
    <Navbar
      v-if="
        (localStorage.getItem('user') && store.active) ||
          ($route.name.match('Home') &&
            this.IsSignedIn &&
            localStorage.getItem('user'))
      "
      @open="toggleSidebar"
    />
    <!--  v-if='$route.path !== "/login" && $route.path !== "/signup"' tako da se navbar ne vidi ako nisi ulogiran-->
    <Sidebar :openSidebar="sidebarOpen" @close="toggleSidebar" />

    <router-view :key="$route.fullPath" id="app_content" />

    <Footer v-if="localStorage.getItem('user') && store.active" />
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
    // store the user on local storage
    localStorage.setItem("isSignedIn", true);
    localStorage.setItem("user", user.uid);

    let idTokenResult = await user.getIdTokenResult();
    console.log("ADMIN TOKENNN", idTokenResult.claims.admin);
    if (idTokenResult.claims.admin) localStorage.setItem("isAdmin", true);
    else localStorage.setItem("isAdmin", false);

    let doc = await db
      .collection("users")
      .doc(localStorage.getItem("user"))
      .get();

    if (doc.exists) {
      // if doc exists store user info on local storage
      localStorage.setItem("firstName", doc.data().firstName);
      localStorage.setItem("lastName", doc.data().lastName);
      localStorage.setItem("email", user.email);
    }

    let provider = await user.providerData[0].providerId;
    localStorage.setItem("provider", provider);

    if (doc.exists) store.active = doc.data().active;

    if (localStorage.getItem("user") && !store.active) {
      router.push({ name: "ChooseIngredients" }).catch(() => {});
    } else if (currentRoute.meta.auth) {
      router.push({ name: "Home" });
    } else {
      router.push({ currentRoute }).catch(() => {});
    }
  } else {
    // no user
    store.active = false;
    localStorage.setItem("isSignedIn", false);
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
      IsSignedIn: localStorage.getItem("isSignedIn"),
      loading: false,
      localStorage,
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
