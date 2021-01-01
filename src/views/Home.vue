<template>
  <div class="home">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Fluid jumbotron</h1>
        <p class="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </div>
    </div>
    <div id="home-page" class="container-fluid">
      <div class="container">
        <div style="text-align: center;">
          <h4 style="color:white; font-weight: bolder">
            Welcome to the searchable database of cosmetics products.
          </h4>
          <h5 style="color:white">
            Based on your list of non-preferences, we determine if the product
            is suitable for you or not.
          </h5>
        </div>
        <div form="search-form">
          <input
            type="text"
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <span class="icon-magnifying-glass"></span>
        </div>
      </div>
    </div>
    <h4>
      <span class="icon-group"></span> Or <span class="icon-group"></span>
    </h4>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
