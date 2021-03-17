<template>
  <div class="col-12 col-md-8 mt-6 text-center right-side">
    <h2 class="mb-3">Change password:</h2>
    <div class="signup change-password">
      <div
        class="form-group text-left "
        :class="classObject(this.currentPassSuccess)"
      >
        <label form="exampleInputPassword2">Current password:</label>
        <input
          type="password"
          v-model="currentPassword"
          class="form-control basic-input"
          id="exampleInputpassword0"
          placeholder="Type here your password..."
        />

        <i class="icon-exclamation-2"></i>
        <small id="currentPassword">
          Error message.
        </small>
      </div>
      <div
        class="form-group text-left"
        :class="classObject(this.newPassSuccess)"
      >
        <div class="custom-control-inline">
          <label form="exampleInputPassword1">New password:</label>

          <label form="passwordWarning" style="font-size: 12px"
            >At least 6 characters</label
          >
        </div>

        <input
          type="password"
          v-model="newPassword"
          @keyup="checkNewPassword"
          class="form-control basic-input"
          id="exampleInputPassword1"
          placeholder="abc12"
        />
        <i class="icon-check-2"></i>
        <i class="icon-exclamation-2"></i>
        <small id="password">
          Error message.
        </small>
      </div>
      <div
        class="form-group text-left"
        :class="classObject(this.newPassRepeatSuccess)"
      >
        <label form="exampleInputPassword2">Confirm new password:</label>
        <input
          type="password"
          v-model="passwordRepeat"
          @keyup="checkNewPasswordRepeat"
          class="form-control basic-input"
          id="exampleInputpassword2"
          placeholder="Retype here your password..."
        />
        <i class="icon-check-2"></i>
        <i class="icon-exclamation-2"></i>
        <small id="passwordRepeat">
          Error message.
        </small>
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
import { firebase, db } from "@/firebase";

function setMessageFor(input, message) {
  document.getElementById(input).innerText = message;
}

export default {
  name: "ResetPassword",
  data() {
    return {
      user: firebase.auth().currentUser,
      currentPassword: "",
      newPassword: "",
      passwordRepeat: "",
      currentPassSuccess: null,
      newPassSuccess: null,
      newPassRepeatSuccess: null,
      updated: false,
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

        this.currentPassword = "";
        this.newPassword = "";
        this.passwordRepeat = "";
        (this.currentPassSuccess = null),
          (this.newPassSuccess = null),
          (this.newPassRepeatSuccess = null),
          this.$emit("updated");
      } catch (e) {
        console.error(e);
        if (e.code === "auth/wrong-password") {
          this.currentPassSuccess = false;
          setMessageFor("currentPassword", "Wrong password");
        }
      }
    },
    checkNewPassword() {
      if (this.newPassword === "") {
        this.newPassSuccess = false;
        setMessageFor("password", "Password cannot be blank");
      } else if (this.newPassword.length < 6) {
        this.newPassSuccess = false;
        setMessageFor("password", "Password too short");
      } else this.newPassSuccess = true;
    },
    checkNewPasswordRepeat() {
      if (!this.newPassSuccess) {
        this.newPassRepeatSuccess = false;
        setMessageFor("passwordRepeat", "");
      } else if (this.passwordRepeat === "") {
        this.newPassRepeatSuccess = false;
        setMessageFor("passwordRepeat", "Password cannot be blank");
      } else if (this.newPassword != this.passwordRepeat) {
        this.newPassRepeatSuccess = false;
        setMessageFor("passwordRepeat", "Passwords don't match");
      } else this.newPassRepeatSuccess = true;
    },
    classObject: function(varName) {
      if (varName == null) {
        return "basic";
      } else if (varName) {
        return "success";
      } else {
        return "error";
      }
    },
  },
  components: {
    AccountSidebar,
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
