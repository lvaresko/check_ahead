<template>
  <div class="account-sidebar text-center">
    <li class="nav-item">
      <router-link to="/account">ACCOUNT OVERVIEW</router-link>
    </li>
    <br />
    <li class="nav-item">
      <router-link to="/account/update">MY DETAILS</router-link>
    </li>
    <br />
    <li class="nav-item">
      <router-link to="/account/reset-password">RESET PASSWORD</router-link>
    </li>
    <br />
    <li class="nav-item">
      <router-link to="/account/history">SEARCH HISTORY</router-link>
    </li>
  </div>
</template>

<script>
export default {
  name: "AccountSidebar",
};
</script>

<style>
.account-sidebar {
  background: rgb(239, 241, 241);
  padding: 30px;
}
.account-sidebar li {
  list-style-type: none;
}
.account-sidebar a {
  font-size: 15px;
}
</style>
