<template>
  <div class="signup text-center">
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm p-5">
          <img src="@/assets/full_logo.png" class="img-fluid" />
          <form>
            <div class="form-group text-left">
              <label form="exampleInputEmail">Email:</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail"
                aria-describedby="EmailHelp"
                placeholder="Type here your email..."
              />
            </div>
            <div class="form-group text-left">
              <label form="exampleInputPassword1">Password:</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Type here your password..."
              />
            </div>
            <button type="button" class="btn btn-primary mt-4">Login</button>
          </form>
          <button type="button" class="btn btn-secondary mt-4">
            Continue with Google
          </button>
          <div clas="row" style="margin: 30px"></div>
          <p>New to Check Ahead? Create Account</p>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
