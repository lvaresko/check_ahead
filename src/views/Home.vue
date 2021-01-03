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
        <div class="input-group mb-3">
          <input
            id="search"
            type="text"
            class="form-control border-right-0"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Search for a product in our database..."
          />
          <span
            class="icon-magnifying-glass input-group-append bg-white"
          ></span>
        </div>
        <div class="form-group has-feedback">
          <input
            id="search"
            type="text"
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Search for a product in our database..."
          />
          <span class="icon-magnifying-glass form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <label class="control-label">Username</label>
          <input type="text" class="form-control" placeholder="Username" />
          <i class="icon-magnifying-glass form-control-feedback"></i>
        </div>
      
      <!-- evoo nez ako je ovako okej, trebalo bi jos samo uredit malo da ne bude plavi border kad kliknes itd... -->
        <div class="input-group mt-4">
          <input 
            id="search1"
            type="text"
            class="form-control border-right-0"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Search for a product in our database..."
          >
          <span class="input-group-append bg-white rounded">
              <button class="btn border border-left-0" type="button"><i class="icon-magnifying-glass"></i></button>
          </span>
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
