<template>
  <form class="signup text-center">
    <h2 class="mb-3">Admin overview</h2>
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
    <button
      type="submit"
      @click.prevent="addAdmin()"
      class="btn btn-primary mt-2 shadow-sm"
    >
      ADD ADMIN
    </button>
  </form>
</template>

<script>
import { functions, db } from "@/firebase.js";

function setMessageFor(input, message) {
  document.getElementById(input).innerText = message;
}

export default {
  name: "AdminOverview",
  data() {
    return {
      email: "",
      emailSuccess: null,
    };
  },
  methods: {
    checkEmail() {
      if (this.email === "") {
        this.emailSuccess = false;
        setMessageFor("email", "Email cannot be blank");
      } 
      else if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          this.email
        )
      ) {
        this.emailSuccess = false;
        setMessageFor("email", "Email formulation invalid");
      } 
    },
    async addAdmin() {
      // Reference to addAdminRole function
      const addAdminRole = functions.httpsCallable("addAdminRole");
      // Invoke that funiton
      let result = await addAdminRole({ email: this.email });
      console.log(result);
      this.$emit("updated");
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

<style></style>
