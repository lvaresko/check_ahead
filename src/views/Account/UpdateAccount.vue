<template>
  <div class="account">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4" id="nav">
          <AccountSidebar />
        </div>
        <div class="col-12 col-md-8 mt-6 text-center right-side">
          <h2>Personal information:</h2>
          <div class="signup personal-info">
            <!--<label>PERSONAL INFO:</label>-->
            <div class="form-group text-left pt-3">
              <label form="exampleInputFirstName">First name:</label>
              <input
                type="text"
                class="form-control basic-input"
                id="exampleInputFirstName"
                placeholder="Amy"
              />
            </div>
            <div class="form-group text-left">
              <label form="exampleInputLastName">Last name:</label>
              <input
                type="text"
                class="form-control basic-input"
                id="exampleInputLastName"
                placeholder="Wise"
              />
            </div>
            <div class="form-group text-left">
              <label form="exampleInputEmail">Email:</label>
              <input
                type="email"
                v-model="email"
                class="form-control basic-input"
                id="exampleInputEmail"
                aria-describedby="EmailHelp"
                placeholder="amy@gmail.com"
              />
            </div>
            <button type="button" class="btn btn-primary shadow none mt-4">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountSidebar from "@/components/Account/AccountSidebar.vue";

export default {
  name: "UpdateAccount",
  components: {
    AccountSidebar,
  },
  data() {
    return {
      email: "",
      //username: '',
      password: "",
      passwordRepeat: "",
    };
  },
};
</script>

<style>
.signup > label {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 0;
}
</style>
