<template>
  <form class="signup text-center">
    <!-- <h2 class="pb-3">Link your social account</h2> -->
    <img src="@/assets/social_media.png" class="img-fluid" loading="lazy" />
    <p class="pt-3 pb-3">Great, you are alredy have a CheckAhead account. Login below using your CheckAhead details to link your social profile. :)</p>
    <div class="form-group text-left" :class="classObject(this.emailSuccess)">
      <label form="exampleInputEmail">Email:</label>
      <input
        type="email"
        v-model="email"
        @blur="checkEmail"
        class="form-control basic-input"
        id="exampleInputEmail"
        aria-describedby="EmailHelp"
        placeholder="Type here your email..."
      />
      <i class="icon-check-2"></i>
      <i class="icon-exclamation-2"></i>
      <small id="email">
        Error message.
      </small>
    </div>
    <div
      class="form-group text-left mb-0"
      :class="classObject(this.passwordSuccess)"
    >
      <label form="exampleInputPassword1">Password:</label>
      <input
        type="password"
        v-model="password"
        @blur="checkPassword"
        class="form-control basic-input password_input"
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
      type="submit"
      @click.prevent="connectProviders()"
      class="btn btn-primary mt-4 shadow-sm"
    >
      Link accounts
    </button>
  </form>
</template>

<script>
import { firebase, db } from "@/firebase";
import store from "@/store";

function setMessageFor(input, message) {
  document.getElementById(input).innerText = message;
}

export default {
  name: "link_accounts",
  data() {
    return {
      email: store.email,
      password: "",
      emailSuccess: null,
      passwordSuccess: null,
    };
  },
  methods: {
    async connectProviders() {
      try {
        let result = await firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(function(result) {
            // Step 4a.
            return result.user.linkWithCredential(store.pendingCred);
        }).then(function() {
            store.pendingCred = "";
            store.email = "";
             // Facebook account successfully linked to the existing Firebase user.
            this.$router.push({ name: "Home"});
        });


        localStorage.setItem("firstName", result.data().firstName);
        localStorage.setItem("lastName", result.data().lastName);
        localStorage.setItem("email", this.email);
      } catch (e) {
        console.error(e);
        if (e.code === "auth/user-not-found") {
          this.emailSuccess = false;
          setMessageFor("email", "User with the given email doesn't exists");
        }
        if (e.code === "auth/wrong-password") {
          this.passwordSuccess = false;
          setMessageFor("password", "Wrong password");
        }
      }
    },
    checkEmail() {
      if (this.email === "") {
        this.emailSuccess = false;
        setMessageFor("email", "Email cannot be blank");
      } //else if (!this.email.includes("@") || !this.email.includes(".")) {
      else if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          this.email
        )
      ) {
        this.emailSuccess = false;
        setMessageFor("email", "Email formulation invalid");
      } //else this.emailSuccess = true;
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
};
</script>

<style>
.form-group .pass {
  font-size: 15px;
}
.password_input {
  margin-bottom: 20px;
}
</style>
