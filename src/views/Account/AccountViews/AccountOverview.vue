<template>
  <div class="overview col-12 col-md-8 mt-6 text-center right-side">
    <div class="col">
      <h3>Hi, {{ user_name }}! <br /> Welcome to your acocunt</h3>
    <img id="pic" src="@/assets/proba4.jpg"  loading="lazy" alt="" />
    </div>
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
  height: 40%;
  width: 80%;
}
</style>
