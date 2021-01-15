<template>
  <div class="signup personal-info">
    <label>PERSONAL INFO:</label>
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
    <button type="button" class="btn btn-primary shadow none mt-4">
      Save changes
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
