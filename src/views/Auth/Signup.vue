<template>
  <form class="signup text-center">
    <h1 class="pb-3">Sign Up</h1>

    <div class="form-group text-left" :class="classObject(this.nameSuccess)">
      <label form="exampleInputFirstName">First name:</label>
      <input
        type="text"
        v-model="name"
        @blur="checkName"
        class="form-control basic-input"
        placeholder="Amy"
      />
      <i class="icon-check-2"></i>
      <i class="icon-exclamation-2"></i>
      <small id="name">
        Error message.
      </small>
    </div>
    <div
      class="form-group text-left"
      :class="classObject(this.lastnameSuccess)"
    >
      <label form="exampleInputLastName">Last name:</label>
      <input
        type="text"
        v-model="lastname"
        @blur="checkLastname"
        class="form-control basic-input"
        placeholder="Wise"
      />
      <i class="icon-check-2"></i>
      <i class="icon-exclamation-2"></i>
      <small id="lastname">
        Error message.
      </small>
    </div>
    <div class="form-group text-left" :class="classObject(this.emailSuccess)">
      <label form="exampleInputEmail">Email:</label>
      <input
        type="email"
        v-model="email"
        @blur="checkEmail"
        class="form-control basic-input"
        aria-describedby="EmailHelp"
        placeholder="amy@gmail.com"
      />
      <i class="icon-check-2"></i>
      <i class="icon-exclamation-2"></i>
      <small id="email">
        Error message.
      </small>
    </div>
    <div
      class="form-group text-left"
      :class="classObject(this.passwordSuccess)"
    >
      <div class="custom-control-inline">
        <label form="exampleInputPassword1">Password:</label>

        <label form="passwordWarning" style="font-size: 12px;"
          >At least 6 characters</label
        >
      </div>
      <input
        type="password"
        v-model="password"
        @blur="checkPassword"
        class="form-control basic-input"
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
      :class="classObject(this.passwordRepeatSuccess)"
    >
      <label form="exampleInputPassword2">Repeat password:</label>
      <input
        type="password"
        v-model="passwordRepeat"
        @keyup="checkPasswordRepeat"
        class="form-control basic-input"
        placeholder="Retype here your password..."
      />
      <i class="icon-check-2"></i>
      <i class="icon-exclamation-2"></i>
      <small id="passwordRepeat">
        Error message.
      </small>
    </div>
    <button
      type="submit"
      @click.prevent="signup()"
      class="btn btn-primary shadow-sm mt-2"
    >
      Sign Up
    </button>
    <div clas="row" style="margin-top: 30px">
      <p>
        Already have an account? <router-link to="/login">Login</router-link>
      </p>
    </div>

    <p style="font-size: 12px; margin-top: 20px">
      By continuing, you agree to Check Ahead Terms of Use and confirm that you
      have read its Privacy Policy.
    </p>
  </form>
</template>

<script>
import { firebase, db } from "@/firebase";
import store from "@/store";

function setMessageFor(input, message) {
  document.getElementById(input).innerText = message;
}

export default {
  name: "Signup",
  data() {
    return {
      name: "",
      lastname: "",
      email: "",
      password: "",
      passwordRepeat: "",
      nameSuccess: null,
      lastnameSuccess: null,
      emailSuccess: null,
      passwordSuccess: null,
      passwordRepeatSuccess: null,
      errorMessage: null,
    };
  },
  methods: {
    async signup() {
      try {
        if (
          this.nameSuccess &&
          this.lastnameSuccess &&
          this.emailSuccess &&
          this.passwordSuccess &&
          this.passwordRepeatSuccess
        ) {

          //Create user
          let userCredential = await firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password);

          console.log("Success");
          db.collection("users")
            .doc(userCredential.user.uid)
            .set({
              firstName: this.name,
              lastName: this.lastname,
              active: false,
            });
        } else {
          alert("All inputs must be filled correctly.");
        }
      } catch (e) {
        console.error(e);
        if (e.code === "auth/email-already-in-use") {               //If user with the given email exists
          this.emailSuccess = false;
          setMessageFor("email", "User with the given email already exists");
        }
      }
    },
    checkName() {
      if (this.name === "") {
        this.nameSuccess = false;
        setMessageFor("name", "Name cannot be blank");
      } else this.nameSuccess = true;
    },
    checkLastname() {
      if (this.lastname === "") {
        this.lastnameSuccess = false;
        setMessageFor("lastname", "Last name cannot be blank");
      } else this.lastnameSuccess = true;
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
      } else this.emailSuccess = true;
    },
    checkPassword() {
      if (this.password === "") {
        this.passwordSuccess = false;
        setMessageFor("password", "Password cannot be blank");
      } else if (this.password.length < 6) {
        this.passwordSuccess = false;
        setMessageFor("password", "Password too short");
      } else this.passwordSuccess = true;
    },
    checkPasswordRepeat() {
      if (!this.passwordSuccess) {
        this.passwordRepeatSuccess = false;
        setMessageFor("passwordRepeat", "");
      } else if (this.passwordRepeat === "") {
        this.passwordRepeatSuccess = false;
        setMessageFor("passwordRepeat", "Password cannot be blank");
      } else if (this.password != this.passwordRepeat) {
        this.passwordRepeatSuccess = false;
        setMessageFor("passwordRepeat", "Passwords don't match");
      } else this.passwordRepeatSuccess = true;
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
  computed: {},
};
</script>

