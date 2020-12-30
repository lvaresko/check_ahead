<template>
  <div class="signup">
    <h1>Registration</h1>
    <sui-grid divided="vertically">
    <sui-grid-row :columns="3">
      <sui-grid-column></sui-grid-column>
      <sui-grid-column>
        <sui-form>
              <sui-form-field>
                <label>First Name:</label>
                <sui-input type="text" class="input1" id="exampleInputFirstName" placeholder="Amy"/>
              </sui-form-field>
              <sui-form-field>
                <label>Last Name:</label>
                <sui-input type="text" class="input1" id="exampleInputLastName" placeholder="Wise"/>
              </sui-form-field>
              <sui-form-field>
                <label>Email:</label>
                <sui-input type="email" class="input1" v-model="email" id="exampleInputEmail" placeholder="amy@gmail.com"/>
              </sui-form-field>
              <sui-form-field>
                <label>Password:</label>
                <sui-input type="password" class="input1" v-model="password" id="exampleInputPassword1" placeholder="abc12"/>
              </sui-form-field>
              <sui-form-field>
                <label>Repeat password:</label>
                <sui-input type="password" class="input1" v-model="passwordRepeat" id="exampleInputpassword2" placeholder="Retype your password here..."/>
              </sui-form-field>
          <sui-button  @click="signup">Register</sui-button>
        </sui-form>
      </sui-grid-column>
      <sui-grid-column></sui-grid-column>
    </sui-grid-row>
  </sui-grid>
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

