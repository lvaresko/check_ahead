<template>
  <div class="account">
    <Banner v-if="this.updated" @toggle="toggleBanner(false)" />

    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4" id="nav">
          <AccountSidebar />
        </div>
        <router-view
          :key="$route.fullPath"
          id="app_content"
          @updated="toggleBanner"
        ></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AccountSidebar from "@/components/Account/AccountSidebar.vue";
import Banner from "@/components/Banner.vue";

export default {
  name: "Account",
  data() {
    return {
      updated: false,
    };
  },
  components: { Banner, AccountSidebar },
  methods: {
    toggleBanner() {
      this.updated = true;
    },
  },
  beforeMount() {
    if (localStorage.getItem("provider") == "password")
      localStorage.setItem("emailAndPassword", true);
  },
};
</script>

<style scoped>
.account {
  padding-top: 0;
}
</style>
