<template>
  <form class="signup text-center">
    <img src="@/assets/full_logo.png" class="img-fluid" loading="lazy" />
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
    <div class="providers">
      <img src="@/assets/google.png" @click="SignInWithGoogle()" class="providerIcon" />
      <img src="@/assets/facebook.png" @click="SignInWithFacebook()" class="providerIcon" />
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
        console.log(result.user.uid);
        let doc = await db
          .collection("users")
          .doc(result.user.uid)
          .get();

        
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else if (!doc.exists) {
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
        if (e.code === 'auth/user-not-found') {
          //
        }
        /* treba implementirat linkanje providera sa postojecim acc*/
        if (e.code ===  'auth/account-exists-with-different-credential') {
          
          console.log("GOOGLE");
          // Step 2.
          // User's email already exists.
          // The pending Facebook credential.
          var pendingCred = e.credential;
          // The provider account's email address.
          var email = e.email;

                
          // Get sign-in methods for this email.
         firebase.auth().fetchProvidersForEmail(email).then(function(methods) {
            // Step 3.
            // If the user has several sign-in methods,
            // the first method in the list will be the "recommended" method to use.
            if (methods[0] === 'password') {
              // Asks the user their password.
              // In real scenario, you should handle this asynchronously.
              var password = '123456'//promptUserForPassword(); // TODO: implement promptUserForPassword.
              firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
                // Step 4a.
                return result.user.linkWithCredential(pendingCred);
              }).then(function() {
                // Facebook account successfully linked to the existing Firebase user.
                goToApp();
              });
              return;
            }
            // All the other cases are external providers.
      // Construct provider object for that provider.
      // TODO: implement getProviderForProviderId.
      //var provider = getProviderForProviderId(methods[0]);
      var provider = new firebase.auth.FacebookAuthProvider();
      // At this point, you should let the user know that they already has an account
      // but with a different provider, and let them validate the fact they want to
      // sign in with this provider.
      // Sign in to provider. Note: browsers usually block popup triggered asynchronously,
      // so in real scenario you should ask the user to click on a "continue" button
      // that will trigger the signInWithPopup.
      auth.signInWithPopup(provider).then(function(result) {
        // Remember that the user may have signed in with an account that has a different email
        // address than the first one. This can happen as Firebase doesn't control the provider's
        // sign in flow and the user is free to login using whichever account they own.
        // Step 4b.
        // Link to Facebook credential.
        // As we have access to the pending credential, we can directly call the link method.
        result.user.linkAndRetrieveDataWithCredential(pendingCred).then(function(usercred) {
          // Facebook account successfully linked to the existing Firebase user.
          goToApp();
        });
      });
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

        if (doc.exists) {
          console.log("**Document data:", doc.data());
        } else {
          console.log("Creating user...");

          localStorage.setItem("firstName",  result.additionalUserInfo.profile.first_name);
          localStorage.setItem("lastName", result.additionalUserInfo.profile.last_name);
          localStorage.setItem("email", result.user.email);

          let a = await db.collection("users")
            .doc(result.user.uid)
            .set({
              firstName: result.additionalUserInfo.profile.first_name,
              lastName: result.additionalUserInfo.profile.last_name,
              active: false,
            });
            console.log("evo");
        }
      } catch (e) {
        console.error(e);
        if (e.code ===  'auth/account-exists-with-different-credential') {  // email already in use
          
          console.log("FACEBOOK");
          // The pending Facebook credential.
          store.pendingCred  = e.credential;  // ma ne moze u store to ic jooo
          console.log(store.pendingCred);
          store.email = e.email;

          let t = this;
          firebase.auth().fetchSignInMethodsForEmail(e.email).then(function(methods) {
            if (methods[0] === 'google.com') {             // if signin method google signin with popup then link accounts
              var provider = new firebase.auth.GoogleAuthProvider();
              firebase.auth().signInWithPopup(provider).then(function(result) {
                result.user.linkAndRetrieveDataWithCredential(store.pendingCred);
            });} else if(methods[0] === 'password') {
              console.log("TU SAAAAM ");
              t.$router.push({ path: "/link_accounts" });  // if sign-in method password go to LinkAccounts (reauthentication)
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
