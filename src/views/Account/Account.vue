<template>
  <div class="account">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4" id="nav">
          <AccountSidebar />
        </div>
        <router-view :key="$route.fullPath" id="app_content"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AccountSidebar from "@/components/Account/AccountSidebar.vue";

export default {
  name: "Account",
  components: {
    AccountSidebar,
  },
  beforeMount() {
    if (localStorage.getItem("provider") == "password")  localStorage.setItem("emailAndPassword", true);
  }
};
</script>

<style scoped></style>
