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
      <div class="form-group text-left">
        <label form="exampleInputPassword1">Password:</label>
        <input
          type="password"
          v-model="password"
          class="form-control basic-input password_input"
          :disabled="!emailAndPassword"
          id="exampleInputPassword1"
          placeholder="Type here your password..."
        />
      </div>
      <button
        type="button"
        @click="updateProfile()"
        :disabled="!emailAndPassword"
        :class="[!emailAndPassword ? 'disabledClass' : '', 'btn btn-primary shadow-sm mt-4']"
      >
        Save changes
      </button>
    </div>
  </div>
</template>

<script>
import AccountSidebar from "@/components/Account/AccountSidebar.vue";
import { firebase, db } from "@/firebase";

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
      updated: false,
      emailAndPassword: localStorage.getItem("emailAndPassword"),
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

        db.collection("users")
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
