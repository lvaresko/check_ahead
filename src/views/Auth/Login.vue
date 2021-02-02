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
      type="button"
      @click="login()"
      class="btn btn-primary mt-3 shadow-sm"
    >
      Login
    </button>

    <p class="link">
      New to Check Ahead? <router-link to="/signup">Sign up</router-link>
    </p>
    <div style="border: 1px solid red;">
      <div>email: test@user.com</div>
      <div>password: 123456</div>
    </div>
  </form>
</template>

<script>
import { firebase } from "@/firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          //this.$router.replace({ name: "Home" });
        })
        .catch((e) => {
          console.error(e);
        });
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
