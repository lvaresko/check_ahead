<template>
  <div class="account">
    <div class="container">
      <div class="col text-center">
        <h3>Hi {{ user_name }}!</h3>
        <h1>Your account</h1>
        <div class="signup change-password">
          <label>CHANGE PASSWORD:</label>
          <div class="form-group text-left pt-3">
            <div class="custom-control-inline">
              <label form="exampleInputPassword1">Password:</label>

              <label form="passwordWarning" style="font-size: 12px"
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
          <button type="button" class="btn btn-primary shadow none mt-4">
            Reset
          </button>
        </div>
      </div>
      <div class="recently-viewed">
        <label>RECENTLY VIEWED ITEMS:</label>
        <div v-for="content in products" :key="">
          <div class="row">
            <div class="col-2">
              <img
                src="@/assets/architect.jpeg"
                alt="product"
                class="img-fluid"
              />
            </div>
            <div class="col-9 pl-0">{{ content.name }}</div>
            <div class="col-1 pl-0">
              <div v-if="content.suitable">
                <span class="icon-check"></span>
              </div>
              <div v-else>
                <span class="icon-cancel"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_name: "Amy",
      email: "",
      //username: '',
      password: "",
      passwordRepeat: "",
      products: [
        { name: "bas dobar sampon", suitable: true },
        { name: "ful dobra krema", suitable: false },
        {
          name:
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          suitable: true,
        },
      ],
    };
  },
};
</script>
<style>
.recently-viewed label,
.signup > label {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 0;
}

.recently-viewed .row {
  border-bottom: 1px solid lightgray;
}
.recently-viewed img {
  height: 45px;
  max-width: 150px;
}

.recently-viewed div {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
  font-weight: unset;
}

.recently-viewed .col-8 {
  align-items: center;
}

.recently-viewed .icon-check {
  justify-content: flex-end;
  color: #54bb5e;
}
.recently-viewed span {
  float: right;
}
.recently-viewed .icon-cancel {
  color: #ff3d00;
}
</style>
