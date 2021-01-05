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
            <button type="button" class="btn btn-primary mt-3 shadow none">Login</button>
          </form>
          <div class="mt-4" style="padding: auto">
            <h2 class="line" style="width: 70%; margin: 10px 48px 20px;">
              <span> or </span>
            </h2>
          </div>
          <button type="button" class="btn btn-secondary shadow none mt-3">
            Continue with Google
          </button>
          <div clas="row" style="margin: 30px"></div>
          <p>New to Check Ahead? <a href="/signup">Create Account</a></p>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>