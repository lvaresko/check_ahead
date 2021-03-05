<template>
  <header class="sticky-top">
    <div class="sidebar">
      <transition name="fade">
        <div
          class="backdrop"
          @click.self="closeSidebar"
          v-if="openSidebar"
        ></div>
      </transition>
      <transition name="slide-l">
        <div class="menu-items" v-if="openSidebar">
          <router-link to="/" tag="button" class="side-btn">
            <div class="link-container" @click.self="closeSidebar">
              <span class="icon-home"></span>
              Home
            </div>
          </router-link>
          <router-link to="/ingredients_list" tag="button" class="side-btn">
            <div class="link-container" @click.self="closeSidebar">
              <span class="icon-list"></span>
              Ingredients list
            </div>
          </router-link>
          <router-link to="/favorites" tag="button" class="side-btn">
            <div class="link-container" @click.self="closeSidebar">
              <span class="icon-heart"></span>
              Favorites
            </div>
          </router-link>
          <router-link to="#" tag="button" class="side-btn">
            <div class="link-container" @click.self="closeSidebar">
              <span class="icon-request"></span>
              Your requests
            </div>
          </router-link>
          <h2 class="line" style="width: 100%"></h2>
          <router-link to="#" tag="button" class="side-btn">
            <div class="link-container" @click.self="closeSidebar">
              Contact Us
            </div>
          </router-link>
          <br />
          <router-link to="#" tag="button" class="side-btn">
            <div class="link-container" @click.self="closeSidebar">
              FAQ
            </div>
          </router-link>
          <br />
          <router-link to="#" tag="button" class="side-btn">
            <div class="link-container" @click.self="closeSidebar">
              Terms of use
            </div>
          </router-link>
          <br />
          <router-link to="#" tag="button" class="side-btn">
            <div class="link-container" @click.self="closeSidebar">
              Privacy Policy
            </div>
          </router-link>
          <h2 class="line" style="width: 100%"></h2>
          <a
            href="#"
            @click.prevent="logout()"
            @click.self="closeSidebar"
            tag="button"
            class="side-btn link-container"
          >
            <span class="icon-exit"></span>
            Log Out
          </a>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
import { firebase } from "@/firebase";
import store from "@/store";

export default {
  name: "Sidebar",
  props: ["openSidebar"],
  methods: {
    closeSidebar() {
      this.$emit("close");
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          store.currentUser = null;
          store.active = null;
          /*
          localStorage.setItem("firstName", "");
          localStorage.setItem("lastName", "");
          localStorage.setItem("email", "");
          localStorage.setItem("isSignedIn", false);*/
          localStorage.clear();
          this.$router.push({ name: "Login" });
        });
    },
  },
};
</script>

<style lang="scss">
.menu-items {
  width: 50vmin;
  height: 100%;
  position: fixed;
  padding: 0;
  background: white;
  top: 0;
  z-index: 1;
}

.side-btn {
  width: 100%;
  text-align: left;
  border: none;
  cursor: pointer;
  background-color: white;
  padding-left: 10px;
}

.side-btn:focus {
  outline: none;
}

.side-btn:hover,
.link-container:hover {
  color: #232323;
  text-decoration: none;
}

.sidebar .router-link-exact-active {
  background-color: #eeeeee;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(122, 128, 134, 0.5);
  width: 100%;
  height: 100%;
  cursor: pointer;
}
a {
  color: #595959;
  font-size: 15px;
  &.router-link-exact-active {
    color: #6fa2b4;
  }
}
</style>
