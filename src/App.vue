<template>
  <div id="app">
    <Navbar />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Lucia Vareško proba</router-link> |
      <router-link to="/signup">Sign up</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Layout/Navbar.vue";

export default {
  components: {
    Navbar,
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
