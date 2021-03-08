<template>
  <div class="col-12 col-md-8 mt-6 text-center right-side">
    <h2 class="mb-3">Change password:</h2>
    <div class="signup change-password">
      <div class="form-group text-left ">
        <label form="exampleInputPassword2">Current password:</label>
        <input
          type="password"
          v-model="currentPassword"
          class="form-control basic-input"
          id="exampleInputpassword0"
          placeholder="Type here your password..."
        />
      </div>
      <div class="form-group text-left">
        <div class="custom-control-inline">
          <label form="exampleInputPassword1">New password:</label>

          <label form="passwordWarning" style="font-size: 12px"
            >At least 6 characters</label
          >
        </div>

        <input
          type="password"
          v-model="newPassword"
          class="form-control basic-input"
          id="exampleInputPassword1"
          placeholder="abc12"
        />
      </div>
      <div class="form-group text-left">
        <label form="exampleInputPassword2">Confirm new password:</label>
        <input
          type="password"
          v-model="passwordRepeat"
          class="form-control basic-input"
          id="exampleInputpassword2"
          placeholder="Retype here your password..."
        />
      </div>
      <button
        type="button"
        @click="changePassword()"
        class="btn btn-primary shadow-sm mt-4"
      >
        Reset
      </button>
    </div>
  </div>
</template>

<script>
import AccountSidebar from "@/components/Account/AccountSidebar.vue";
import Banner from "@/components/Banner.vue";
import store from "@/store";
import { firebase, db } from "@/firebase";

export default {
  name: "ResetPassword",
  data() {
    return {
      user: firebase.auth().currentUser,
      currentPassword: "",
      newPassword: "",
      passwordRepeat: "",
      updated: false,
      store,
    };
  },
  methods: {
    async changePassword() {
      try {
        let credential = firebase.auth.EmailAuthProvider.credential(
          this.user.email,
          this.currentPassword
        );

        let reauthenticate = await this.user.reauthenticateWithCredential(
          credential
        );
        let update = await this.user.updatePassword(this.newPassword);

        console.log("Pass changed");
        this.currentPassword = "";
        this.newPassword = "";
        this.passwordRepeat = "";
        this.toggleBanner(true);
      } catch (e) {
        console.log(e);
      }
    },
    toggleBanner(value) {
      this.updated = value;
    },
  },
  components: {
    AccountSidebar,
    Banner,
  },
};
</script>

<style scoped>
.signup > label {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 0;
}
</style>
