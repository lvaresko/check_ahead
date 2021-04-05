<template>
  <div class="overview col-12 col-md-8 mt-6 text-center right-side">
    <div class="col">
      <h3>
        Hi, {{ user_name }}! <br />
        Welcome to your account
      </h3>
      <h5 v-if="this.isAdmin == 'true'">ADMIN</h5>
      <img id="pic" src="@/assets/images/account.jpg" loading="lazy" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountOverview",
  data() {
    return {
      user_name: localStorage.getItem("firstName"),
      isAdmin: localStorage.getItem("isAdmin"),
    };
  },
};
</script>

<style scoped>
#pic {
  height: 40%;
  width: 80%;
}
</style>
