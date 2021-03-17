<template>
  <div class="col-12 col-md-8 mt-6 text-center right-side">
    <h2 class="mb-3">Personal information:</h2>
    <div class="signup personal-info">
      <div class="form-group text-left">
        <label form="exampleInputFirstName">First name:</label>
        <input
          type="text"
          v-model="firstName"
          class="form-control basic-input"
          :disabled="!emailAndPassword"
          id="exampleInputFirstName"
        />
      </div>
      <div class="form-group text-left">
        <label form="exampleInputLastName">Last name:</label>
        <input
          type="text"
          v-model="lastName"
          class="form-control basic-input"
          :disabled="!emailAndPassword"
          id="exampleInputLastName"
        />
      </div>
      <div class="form-group text-left">
        <label form="exampleInputEmail">Email:</label>
        <input
          type="email"
          v-model="email"
          class="form-control basic-input"
          :disabled="!emailAndPassword"
          id="exampleInputEmail"
          aria-describedby="EmailHelp"
        />
      </div>
      <div
        class="form-group text-left"
        :class="classObject(this.passwordSuccess)"
      >
        <label form="exampleInputPassword1">Password:</label>
        <input
          type="password"
          v-model="password"
          @blur="checkPassword"
          class="form-control basic-input password_input"
          :disabled="!emailAndPassword"
          id="exampleInputPassword1"
          placeholder="Type here your password..."
        />
        <i class="icon-check-2"></i>
        <i class="icon-exclamation-2"></i>
        <small id="password">
          Error message.
        </small>
      </div>

      <button
        type="button"
        @click="updateProfile()"
        :disabled="!emailAndPassword"
        :class="[
          !emailAndPassword ? 'disabledClass' : '',
          'btn btn-primary shadow-sm mt-4',
        ]"
      >
        Save changes
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
  name: "UpdateAccount",
  data() {
    return {
      user: firebase.auth().currentUser,
      currentUser: localStorage.getItem("user"),
      email: localStorage.getItem("email"),
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName"),
      password: "",
      emailAndPassword: localStorage.getItem("emailAndPassword"),
      passwordSuccess: null,
    };
  },
  methods: {
    async updateProfile() {
      try {
        let credential = firebase.auth.EmailAuthProvider.credential(
          this.user.email,
          this.password
        );

        let reauthenticate = await this.user.reauthenticateWithCredential(
          credential
        );

        await db
          .collection("users")
          .doc(this.currentUser)
          .update({
            firstName: this.firstName,
            lastName: this.lastName,
          });

        localStorage.setItem("firstName", this.firstName);
        localStorage.setItem("lastName", this.lastName);

        let update = await this.user.updateEmail(this.email);

        console.log("Updated");
        localStorage.setItem("email", this.email);
        this.password = "";
        this.$emit("updated");
        this.passwordSuccess = null;
      } catch (e) {
        if (this.password === "") {
          this.passwordSuccess = false;
          setMessageFor("password", "Password cannot be blank");
        } else if (e.code === "auth/wrong-password") {
          this.passwordSuccess = false;
          setMessageFor("password", "Password incorrect");
        }
      }
    },
    checkPassword() {
      if (this.password === "") {
        this.passwordSuccess = false;
        setMessageFor("password", "Password cannot be blank");
      } //else this.passwordSuccess = true;
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

.disabledClass {
  cursor: not-allowed;
  background-color: #6fa2b4;
}
</style>
