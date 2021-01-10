<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">Sign up</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <h3>NAVBAR 1 sori i dalje je ruzno a ful nez sa da nap</h3>
    <div
      class="jumbotron jumbotron-fluid"
      :style="{ backgroundImage: `url(${require('../assets/home.jpg')})` }"
    >
      <div class="container text-center">
        <h1 class="display-5">
          We check the ingredients for you!
        </h1>
        <div class="description">
          <h4 style="font-weight: bolder; color: white">
            Welcome to the searchable database of cosmetic products.
          </h4>
          <h5 style="color:white">
            Based on your list of non-preferences, we determine if the product
            is suitable for you or not.
          </h5>
        </div>
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
        <h4 style="color: white">or</h4>
        <button type="button" class="scan btn btn-primary shadow">
          SCAN BARCODE <i class="icon-barcode"></i>
        </button>
      </div>
    </div>
    <h3>NAVBAR 2</h3>
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
          Welcome to the searchable database of cosmetic products.
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
      <button type="button" class="scan btn btn-primary mt-3 shadow-none">
        SCAN BARCODE <i class="icon-barcode"></i>
      </button>
    </div>

    <div class="container">
      <div class="recommended">
        <p>Recommended for you:</p>
        <button class="btn btn-primary shadow-none">FILTER</button>
      </div>

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
  background-image: url("../assets/home_3.1.jpeg");
  margin-bottom: 0;
  min-height: 480px;
  background-position: center center;
  -webkit-box-shadow: 0 8px 6px -6px #ccc;
  -moz-box-shadow: 0 8px 6px -6px #ccc;
  box-shadow: 0 8px 6px -6px #ccc;
}

#home-page {
  background-color: #6fa2b4;
  padding: 20px;
  -webkit-box-shadow: 0 8px 6px -6px #ccc;
  -moz-box-shadow: 0 8px 6px -6px #ccc;
  box-shadow: 0 8px 6px -6px #ccc;
}

.home .btn {
  padding: 0 9px;
}

.display-5 {
  margin-top: 15px;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 8px #777;
}
.description {
  background: rgba(200, 200, 200, 0.6);
  padding: 10px;
}
.container-fluid {
  display: flex;
  justify-content: space-between;
}

.container-fluid img {
  width: 50%;
}

.recommended {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.recommended .btn {
  margin: 0;
  width: 90px;
}

/*-----------
  Search
-----------*/

span.icon-magnifying-glass {
  font-size: 19px;
  border-radius: 20px;
  transition: 0.5s;
  padding: 3px;
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
