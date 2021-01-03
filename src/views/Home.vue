<template>
  <div class="home">
    <div
      class="jumbotron jumbotron-fluid"
      :style="{ backgroundImage: `url(${require('../assets/home.jpg')})` }"
    >
      <div class="container">
        <h1 class="display-5" style="color:white">
          We check the ingredients for you!
        </h1>
        <p class="lead" style="color:white">
          Ovo sve mora ljepše bit, malo modernije? nez kako
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
            id="search"
            type="text"
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Search for a product in our database..."
          />
          <span class="icon-magnifying-glass"></span>
        </div>
      </div>
    </div>
    <div class="container" style="padding: auto">
      <h2 class="line">
        <span> or </span>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
