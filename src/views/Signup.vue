<template>
  <div class="signup">
    <h1>Registration</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm text-left">
          <form>
            <div class="form-group">
              <label form="exampleInputEmail">Email</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                id="exampleInputEmail"
                aria-describedby="EmailHelp"
                placeholder="amy@gmail.com"
              />
            </div>
            <div class="form-group">
              <label form="exampleInputPassword1">Password</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="abc12"
              />
              <div class="form-group">
                <label form="exampleInputPassword2">Repeat password</label>
                <input
                  type="password"
                  v-model="passwordRepeat"
                  class="form-control"
                  id="exampleInputpassword2"
                  placeholder="Retype here your password..."
                />
              </div>
            </div>
            <button type="button" @click="signup" class="btn btn-primary">
              Register
            </button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
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
          .then(function () {
            console.log("Uspješna registracija");
          })
          .catch(function (error) {
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