<template>
  <div class="account-sidebar text-center">
    <li class="nav-item pb-4">
      <router-link
        :to="{ name: 'AccountOverview', params: { id: this.user_id } }"
        >ACCOUNT OVERVIEW</router-link
      >
    </li>
    <li class="nav-item pb-4">
      <router-link v-if="user_id" :to="{ name: 'UpdateAccount' }"
        >MY DETAILS</router-link
      >
    </li>
    <li v-if="this.emailAndPassword" class="nav-item pb-4">
      <router-link :to="{ name: 'ResetPassword' }">RESET PASSWORD</router-link>
    </li>
    <li class="nav-item pb-4">
      <router-link :to="{ name: 'SearchHistory' }">SEARCH HISTORY</router-link>
    </li>
    <li class="nav-item">
      <router-link
        v-if="this.user_id"
        :to="{ name: 'AdminOverview', params: { id: this.user_id } }"
        >ADMIN PANEL</router-link
      >
    </li>
  </div>
</template>

<script>
import { firebase } from "@/firebase";
import store from "@/store";

export default {
  name: "AccountSidebar",
  data() {
    return {
      provider: "",
      emailAndPassword: false,
      user_id: localStorage.getItem("user"),
    };
  },
  mounted() {
    this.provider = firebase.auth().currentUser.providerData[0].providerId;
    if (this.provider == "password") this.emailAndPassword = true;
    console.log(this.provider);
  },
};
</script>

<style lang="scss" scoped>
.account-sidebar {
  padding: 30px;
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
