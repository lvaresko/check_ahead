<template>
  <div class="admin">
    <Banner v-if="this.updated" @toggle="toggleBanner(false)" />
    <div class="container text-center">
      <div class="nav container-fluid">
        <li class="nav-item">
          <router-link :to="{ name: 'AccountOverview', params: { id: 11 } }"
            >ADMIN OVERVIEW</router-link
          >
        </li>
        |
        <li class="nav-item">
          <router-link :to="{ name: 'HandleRequests' }">REQUESTS</router-link>
        </li>
        |
        <li class="nav-item">
          <router-link :to="{ name: 'AddProduct' }"
            >PRODUCT DATABASE</router-link
          >
        </li>
      </div>

      <router-view :key="$route.fullPath" id="app_content" />
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import store from "@/store";

export default {
  name: "Admin",
  data() {
    return {
      user_id: store.curretUser,
      updated: false,
    };
  },
  components: { Banner },
  methods: {
    toggleBanner(value) {
      this.updated = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  margin-top: 10px;
}
a {
  font-weight: bold;
  color: #595959;
  font-size: 15px;
  &.router-link-exact-active {
    color: #6fa2b4;
  }
}
</style>
