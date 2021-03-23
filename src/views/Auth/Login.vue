<template>
  <form class="signup text-center">
    <img src="@/assets/images/full_logo.png" class="img-fluid" loading="lazy" />
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
      <div class="text-right mt-2">
        <a class="pass" href="#">Forgot your password?</a>
      </div>
    </div>
    <button
      type="submit"
      @click.prevent="login()"
      class="btn btn-primary mt-5 shadow-sm"
    >
      Login
    </button>

    <p class="link">
      New to Check Ahead? <router-link to="/signup">Sign up</router-link>
    </p>
    <div class="mt-4" style="padding: auto">
      <h2 class="line" style="width: 70%; margin: 10px 48px 20px;">
        <span> or </span>
      </h2>
    </div>
    <div class="providers mt-4 mb-4">
      <img
        src="@/assets/images/google.png"
        @click="SignInWithGoogle()"
        class="providerIcon"
      />
      <img
        src="@/assets/images/facebook.png"
        @click="SignInWithFacebook()"
        class="providerIcon"
      />
    </div>
  </form>
</template>

<script>
import { firebase, db } from "@/firebase";
import store from "@/store";

function setMessageFor(input, message) {
  document.getElementById(input).innerText = message;
}

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      emailSuccess: null,
      passwordSuccess: null,
    };
  },
  methods: {
    async login() {
      try {
        let result = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
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
    async SignInWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();

      try {
        let result = await firebase.auth().signInWithPopup(provider);
        let doc = await db
          .collection("users")
          .doc(result.user.uid)
          .get();

        if (!doc.exists) {
          db.collection("users")
            .doc(result.user.uid)
            .set({
              firstName: result.additionalUserInfo.profile.given_name,
              lastName: result.additionalUserInfo.profile.family_name,
              active: false,
            });
        }
      } catch (e) {
        console.error(e);

        if (e.code === "auth/account-exists-with-different-credential") {
          // The pending Google credential.
          var pendingCred = e.credential;
          var email = e.email;

          firebase
            .auth()
            .fetchProvidersForEmail(email)
            .then(function(methods) {
              if (methods[0] === "facebook.com") {
                // if signin method facebook signin with popup then link accounts
                var provider = new firebase.auth.FacebookAuthProvider();
                auth.signInWithPopup(provider).then(function(result) {
                  result.user.linkAndRetrieveDataWithCredential(pendingCred);
                });
              } else if (methods[0] === "password") {
                t.$router.push({ path: "/link_accounts" }); // if sign-in method password go to LinkAccounts (reauthentication)
              }
            });
        }
      }
    },
    async SignInWithFacebook() {
      var provider = new firebase.auth.FacebookAuthProvider();

      try {
        let result = await firebase.auth().signInWithPopup(provider);
        let doc = await db
          .collection("users")
          .doc(result.user.uid)
          .get();

        if (!doc.exists) {
          localStorage.setItem(
            "firstName",
            result.additionalUserInfo.profile.first_name
          );
          localStorage.setItem(
            "lastName",
            result.additionalUserInfo.profile.last_name
          );
          localStorage.setItem("email", result.user.email);

          let a = await db
            .collection("users")
            .doc(result.user.uid)
            .set({
              firstName: result.additionalUserInfo.profile.first_name,
              lastName: result.additionalUserInfo.profile.last_name,
              active: false,
            });
        }
      } catch (e) {
        console.error(e);
        if (e.code === "auth/account-exists-with-different-credential") {
          // email already in use

          // The pending Facebook credential.
          store.pendingCred = e.credential; // ma ne moze u store to ic jooo
          store.email = e.email;

          let t = this;
          firebase
            .auth()
            .fetchSignInMethodsForEmail(e.email)
            .then(function(methods) {
              if (methods[0] === "google.com") {
                // if signin method google signin with popup then link accounts
                var provider = new firebase.auth.GoogleAuthProvider();
                firebase
                  .auth()
                  .signInWithPopup(provider)
                  .then(function(result) {
                    result.user.linkAndRetrieveDataWithCredential(
                      store.pendingCred
                    );
                  });
              } else if (methods[0] === "password") {
                t.$router.push({ path: "/link_accounts" }); // if sign-in method password go to LinkAccounts (reauthentication)
              }
            });
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

.providers {
  display: flex;
  justify-content: space-evenly;
}

.providerIcon {
  width: 15%;
  height: 15%;
  border: 1px solid transparent;
  border-radius: 50%;
  cursor: pointer;
}
</style>
