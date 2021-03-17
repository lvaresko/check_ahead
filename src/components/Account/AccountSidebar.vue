<template>
  <div class="account-sidebar text-center">
    <li class="nav-item pb-4">
      <router-link
        :to="{ name: 'AccountOverview', params: { id: this.currentUser } }"
        >ACCOUNT OVERVIEW</router-link
      >
    </li>
    <li class="nav-item pb-4">
      <router-link
        :to="{ name: 'UpdateAccount', params: { id: this.currentUser } }"
        >MY DETAILS</router-link
      >
    </li>
    <li v-if="this.emailAndPassword" class="nav-item pb-4">
      <router-link
        :to="{ name: 'ResetPassword', params: { id: this.currentUser } }"
        >RESET PASSWORD</router-link
      >
    </li>
    <li class="nav-item pb-4">
      <router-link
        :to="{ name: 'SearchHistory', params: { id: this.currentUser } }"
        >SEARCH HISTORY</router-link
      >
    </li>
    <li v-if="this.isAdmin" class="nav-item pb-4">
      <router-link
        :to="{ name: 'AdminOverview', params: { id: this.currentUser } }"
        >ADMIN PANEL</router-link
      >
    </li>
  </div>
</template>

<script>
export default {
  name: "AccountSidebar",
  data() {
    return {
      provider: "",
      emailAndPassword: localStorage.getItem("emailAndPassword"),
      currentUser: localStorage.getItem("user"),
      isAdmin: false,
    };
  },
  mounted() {
    if (localStorage.getItem("provider") == "password")
      localStorage.setItem("emailAndPassword", true);

    this.isAdmin = localStorage.getItem("isAdmin");
  },
};
</script>

<style lang="scss" scoped>
.account-sidebar {
  padding: 30px 30px 0 30px;
}
.account-sidebar li {
  list-style-type: none;
}

.account-sidebar {
  border-right: none;
  border-bottom: 1px solid lightgray;
}
@media (min-width: 768px) {
  .account-sidebar {
    border-right: 1px solid lightgray;
    border-bottom: none;
  }
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
