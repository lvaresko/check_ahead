<template>
  <div class="signup text-center">
    <form class="signup">
      <h1>Registration</h1>

      <div class="form-group text-left pt-3">
        <label form="exampleInputFirstName">First name:</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputFirstName"
          placeholder="Amy"
        />
      </div>
      <div class="form-group text-left">
        <label form="exampleInputLastName">Last name:</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputLastName"
          placeholder="Wise"
        />
      </div>
      <div class="form-group text-left">
        <label form="exampleInputEmail">Email:</label>
        <input
          type="email"
          v-model="email"
          class="form-control"
          id="exampleInputEmail"
          aria-describedby="EmailHelp"
          placeholder="amy@gmail.com"
        />
      </div>
      <div class="form-group text-left">
        <div class="custom-control-inline">
          <label form="exampleInputPassword1">Password:</label>

          <label form="passwordWarning" style="font-size: 12px;"
            >At least 6 characters</label
          >
        </div>

        <input
          type="password"
          v-model="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="abc12"
        />
      </div>
      <div class="form-group text-left">
        <label form="exampleInputPassword2">Repeat password:</label>
        <input
          type="password"
          v-model="passwordRepeat"
          class="form-control"
          id="exampleInputpassword2"
          placeholder="Retype here your password..."
        />
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
export default {
  name: "Signup",
  data() {
    return {
      email: "",
      //username: '',
      password: "",
      passwordRepeat: "",
    };
  },
  methods: {
    signup() {
      if ((this.password = this.passwordRepeat)) {
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
  },
};
</script>
