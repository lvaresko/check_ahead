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
    <br />
    <li class="nav-item">
      <router-link to="/account/admin">ADMIN PANEL</router-link>
    </li>
  </div>
</template>

<script>
export default {
  name: "AccountSidebar",
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
