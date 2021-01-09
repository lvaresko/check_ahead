<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">Sign up</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
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
      <button type="button" class="scan btn btn-primary mt-3 shadow none">
        SCAN BARCODE <i class="icon-barcode"></i>
      </button>
    </div>

    <div class="container">
      <div class="row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "Home",
  components: {
    Card,
  },
};
</script>

<style>
.icon-barcode::before {
  color: white;
  font-size: 25px;
  vertical-align: middle;
}

.jumbotron {
  background-size: cover;
  margin-bottom: 0;
  min-height: 500px;
  /* povecava jumbotron */
}

#home-page {
  background-color: #6fa2b4;
  padding: 20px;
  -webkit-box-shadow: 0 8px 6px -6px #ccc;
  -moz-box-shadow: 0 8px 6px -6px #ccc;
  box-shadow: 0 8px 6px -6px #ccc;
}

/*-----------
  Search
-----------*/

span.icon-magnifying-glass {
  font-size: 19px;
  border-radius: 20px;
  transition: 0.5s;
}

.icon-magnifying-glass:hover {
  color: black;
}

.search-button,
.search-input {
  border: none;
  border-radius: 20px;
}

.search-input {
  padding-right: 0;
}

.search {
  background-color: white;
  padding: 0;
  border-radius: 20px;
  -webkit-box-shadow: 0 2px 4px 0 #777;
  -moz-box-shadow: 0 2px 4px 0 #777;
  box-shadow: 0 2px 4px 0 #777;
}

.search-button:focus,
.search-input:focus {
  outline: none;
}
</style>
