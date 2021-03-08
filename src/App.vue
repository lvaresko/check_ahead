<template>
  <div id="app">
    <Navbar
      v-if="
        (this.user && store.active) ||
          ($route.name.match('Home') && this.IsSignedIn)
      "
      @open="toggleSidebar"
    />
    <!--  v-if='$route.path !== "/login" && $route.path !== "/signup"' tako da se navbar ne vidi ako nisi ulogiran-->
    <Sidebar :openSidebar="sidebarOpen" @close="toggleSidebar" />

    <router-view :key="$route.fullPath" id="app_content" />

    <Footer v-if="this.user && store.active" />
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
  console.log("UŠO U ONAUTHSTATECHANGED, user: " + user);
  if (user) {
    //user is signed in

    // store the user on local storage
    localStorage.setItem("isSignedIn", true);
    localStorage.setItem("user", user.uid);

    console.log("Signed in: " + user.email);

    let doc = await db
      .collection("users")
      .doc(localStorage.getItem("user"))
      .get();

    // store user info on local storage
    console.log("Document data:", doc.data());
    localStorage.setItem("firstName", doc.data().firstName);
    localStorage.setItem("lastName", doc.data().lastName);
    localStorage.setItem("email", user.email);

    //ako ne postoji jer observer ne ceka da spremim u colLection kad se s googlom ulogiram
    //valjda se triggera jer se promjeni to stanje prije nego ide stvarat collection
    if (doc.exists) store.active = doc.data().active;

    if (localStorage.getItem("user") && !store.active) {
      router.push({ name: "ChooseIngredients" }).catch(() => {});
    } else if (currentRoute.meta.auth){
      router.push({ name: "Home"});
    } else {
      router.push({currentRoute}).catch(() => {});
    }
  } else {
    console.log("No user");
    
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
      user: localStorage.getItem("user"),
      loading: false,
    };
  },
 
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    /*async getUserInfo() {
      console.log("ccc",store.currentUser)
      var user = firebase.auth().currentUser;

      let doc =  await db
        .collection("users")
        .doc(store.currentUser)
        .get();
      
      console.log("Document data:", doc.data());
      localStorage.setItem("firstName", doc.data().firstName);
      localStorage.setItem("lastName", doc.data().lastName);
      localStorage.setItem("email", user.email);
    },*/
  },
  components: {
    Navbar,
    Sidebar,
    Footer,
  },
  /*
  //localStorage????
  mounted() {
    //Ako postoji user u localStorage, onda se updejta store
    if (localStorage.CurrentUser) {
      store.currentUser = localStorage.CurrentUser;
    }
  },
  watch: {
    CurrentUser(LoggedUser) {
      localStorage.CurrentUser = LoggedUser;
    },
  },*/
};
</script>