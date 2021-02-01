<template>
  <div class="account">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4" id="nav">
          <AccountSidebar />
        </div>
        <div class="col-12 col-md-8 mt-6 text-center right-side">
          <h2>Change password:</h2>
          <div class="signup change-password">
            <div class="form-group text-left pt-3">
              <div class="custom-control-inline">
                <label form="exampleInputPassword1">Password:</label>

                <label form="passwordWarning" style="font-size: 12px"
                  >At least 6 characters</label
                >
              </div>

              <input
                type="password"
                v-model="password"
                class="form-control basic-input"
                id="exampleInputPassword1"
                placeholder="abc12"
              />
            </div>
            <div class="form-group text-left">
              <label form="exampleInputPassword2">Repeat password:</label>
              <input
                type="password"
                v-model="passwordRepeat"
                class="form-control basic-input"
                id="exampleInputpassword2"
                placeholder="Retype here your password..."
              />
            </div>
            <button type="button" class="btn btn-primary shadow none mt-4">
              Reset
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
  name: "ResetPassword",
  components: {
    AccountSidebar,
  },
  data() {
    return {
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
