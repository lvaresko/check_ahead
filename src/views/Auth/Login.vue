<template>
  <form class="signup text-center">
    <img src="@/assets/full_logo.png" class="img-fluid" />
    <div class="form-group text-left">
      <label form="exampleInputEmail">Email:</label>
      <input
        type="email"
        v-model="email"
        class="form-control basic-input"
        id="exampleInputEmail"
        aria-describedby="EmailHelp"
        placeholder="Type here your email..."
      />
    </div>
    <div class="form-group text-left mb-0">
      <label form="exampleInputPassword1">Password:</label>
      <input
        type="password"
        v-model="password"
        class="form-control basic-input password_input"
        id="exampleInputPassword1"
        placeholder="Type here your password..."
      />
      <div class="text-right">
        <a class="pass" href="#">Forgot your password?</a>
      </div>
    </div>
    <button
      type="submit"
      @click.prevent="login()"
      class="btn btn-primary mt-3 shadow-sm"
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
    <button
      type="button"
      class="btn btn-secondary shadow-sm mt-3"
      @click="SignInWithGoogle()"
    >
      Continue with Google
    </button>
    <button type="button" class="btn btn-secondary shadow-sm mt-3">
      Continue with Facebook
    </button>
    <div style="border: 1px solid red;">
      <div>email: test@user.com</div>
      <div>password: 123456</div>
    </div>
  </form>
</template>

<script>
import { firebase, db } from "@/firebase";
import store from "@/store";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
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

        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else {
          console.log("Creating user...");

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
  margin-bottom: 0;
}
</style>
