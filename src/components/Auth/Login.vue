<template>
  <div class="login ui container">
    <sui-grid divided="vertically">
      <sui-grid-row :columns="3">
        <sui-grid-column></sui-grid-column>
        <sui-grid-column>
            <img src="@/assets/check_ahead_logo.png">
          <sui-form>
            <sui-form-field>
              <label>Email:</label>
              <sui-input
                type="email"
                class="input1"
                v-model="email"
                id="exampleInputEmail"
                placeholder="Type here your email..."
              />
            </sui-form-field>
            <sui-form-field>
              <label>Password:</label>
              <sui-input
                type="password"
                class="input1"
                v-model="password"
                id="exampleInputPassword1"
                placeholder="Type here your password..."
              />
            </sui-form-field>
            <sui-button>Login</sui-button>
          </sui-form>
        </sui-grid-column>
        <sui-grid-column></sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </div>
</template>

<script>
export default {
    name: "Login",
}
</script>