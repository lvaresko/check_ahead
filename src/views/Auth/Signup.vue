<template>
  <div class="signup text-center">
    <form class="signup">
      <h1 class="pb-3">Registration</h1>

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
          @blur="checkPasswordRepeat"
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
        type="button"
        @click="$router.push('choose_ingredients')"
        class="btn btn-primary shadow none mt-4"
      >
        Register
      </button>
    </form>
    <div clas="row" style="margin: 30px">
      <p style="font-size: 12px">
        By continuing, you agree to Check Ahead Terms of Use and confirm that
        you have read its Privacy Policy.
      </p>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase";

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
    };
  },
  methods: {
    signup() {
      if (
        this.nameSuccess &&
        this.lastnameSuccess &&
        this.emailSuccess &&
        this.passwordSuccess &&
        this.passwordRepeatSuccess
      ) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(function() {
            console.log("Uspješna registracija");
          })
          .catch(function(error) {
            console.error("Došlo je do pogreške", error);
          });
        console.log("Nastavak");
      } else {
        alert("Lozinke se ne podudaraju!");
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
      } else if (!this.email.includes("@") || !this.email.includes(".")) {
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
<style>
.signup small {
  position: absolute;
  bottom: 0;
  left: 0;
  visibility: hidden;
}
.signup .form-group {
  position: relative;
  height: 102px;
  margin-bottom: 0;
}
.signup .form-group i {
  position: absolute;
  top: 45px;
  right: 15px;
  visibility: hidden;
}
.signup .form-group.success input {
  border-width: 2px;
  border-color: #2ecc71;
}

.signup .form-group.success i.icon-check-2 {
  color: #2ecc71;
  visibility: visible;
}

.signup .form-group.error input {
  border-width: 2px;
  border-color: #e74c3c;
}

.signup .form-group.error i.icon-exclamation-2,
.signup .form-group.error small {
  color: #e74c3c;
  visibility: visible;
}
</style>
