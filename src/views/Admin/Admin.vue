<template>
  <div class="admin">
    <Banner v-if="this.updated" @toggle="toggleBanner(false)" />
    <div class="container text-center">
      <div class="nav container-fluid">
        <li class="nav-item">
          <router-link
            :to="{ name: 'AdminOverview', params: { id: this.currentUser } }"
            >ADMIN OVERVIEW</router-link
          >
        </li>
        |
        <li class="nav-item">
          <router-link
            :to="{ name: 'HandleRequests', params: { id: this.currentUser } }"
            >REQUESTS</router-link
          >
        </li>
        |
        <li class="nav-item">
          <router-link
            :to="{ name: 'AddProduct', params: { id: this.currentUser } }"
            >PRODUCT DATABASE</router-link
          >
        </li>
      </div>

      <router-view
        :key="$route.fullPath"
        id="app_content"
        @updated="toggleBanner"
      />
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";

export default {
  name: "Admin",
  data() {
    return {
      currentUser: localStorage.getItem("user"),
      updated: false,
    };
  },
  components: { Banner },
  methods: {
    toggleBanner() {
      this.updated = true;
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
.container-fluid {
  display: flex;
  justify-content: space-between;
}
</style>
