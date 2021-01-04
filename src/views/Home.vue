<template>
  <div class="home">
    <div
      class="jumbotron jumbotron-fluid"
      :style="{ backgroundImage: `url(${require('../assets/home_3.1.jpeg')})` }"
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
      <div class="container" style="text-align: center">
        <h4 style="font-weight: bolder; color: white">
          Welcome to the searchable database of cosmetics products.
        </h4>
        <h5 style="color:white">
          Based on your list of non-preferences, we determine if the product is
          suitable for you or not.
        </h5>
        <div class="input-group mt-4 search">
          <input
            type="text"
            class="form-control border-right-0 search-input shadow-none"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Search for a product in our database..."
            onfocus="this.placeholder = ''"
          />
          <button
            class="btn border-left-0 search-button shadow-none"
            type="button"
          >
            <span class="icon-magnifying-glass"></span>
          </button>
        </div>
      </div>
    </div>
    <div class="container" style="text-align: center">
      <h2 class="line">
        <span> or </span>
      </h2>
      <p>BOTUN ZA SCAN</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
