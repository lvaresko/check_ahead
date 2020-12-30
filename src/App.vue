<template>
  <div id="app">
    <Navbar />
    <div id="nav">
      <router-link to="/">LUCIJA BABIĆ PROBA</router-link> |
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
