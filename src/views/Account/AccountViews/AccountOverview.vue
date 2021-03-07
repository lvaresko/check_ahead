<template>
  <div class="overview col-12 col-md-8 mt-6 text-center right-side">
    <div class="col text-center">
      <h3>Hi, {{ user_name }}!</h3>
      <h3>Welcome to your acocunt</h3>
      <!-- <h1>Your account</h1> -->
    </div>
    <img id="pic" src="@/assets/home_2.1.jpeg" alt="" />
    <!-- <p>Here you can update your settings ??????</p> -->
  </div>
</template>

<script>
export default {
  name: "AccountOverview",
  data() {
    return { user_name: localStorage.getItem("firstName") };
  },
};
</script>

<style scoped>
#pic {
  height: 50%;
  width: 80%;
}
</style>
