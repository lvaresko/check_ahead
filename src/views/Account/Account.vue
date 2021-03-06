<template>
  <div class="account">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4" id="nav">
          <AccountSidebar />
        </div>
        <div class="col-12 col-md-8 mt-6 text-center right-side">
          <div class="col text-center">
            <h3>Hi, {{ user_name }}!</h3> 
            <h3>Welcome to your acocunt</h3>
            <!-- <h1>Your account</h1> -->
          </div>
          <img
            id="pic"
            src="@/assets/home_2.1.jpeg"
            alt=""
          />
          <!-- <p>Here you can update your settings ??????</p> -->
        </div>
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
  data() {
    return {
      user_name: localStorage.getItem('firstName'),
      provider: "",
    };
  },
};
</script>

<style scoped>
#pic {
  height: 50%;
  width: 80%;
}
</style>
