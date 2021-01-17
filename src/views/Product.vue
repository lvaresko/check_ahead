<template>
  <div class="product">
    <div class="container-fluid search-next">
      <div
        class="container"
        style="  display: flex;
  justify-content: space-between;"
      >
        <div class="input-group search">
          <input
            type="text"
            class="form-control border-right-0 search-input shadow-none"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Search for a product in our database..."
            onfocus="this.placeholder = ''"
          />
          <button
            class="btn border-left-0 search-button  shadow-none"
            type="button"
          >
            <span class="icon-magnifying-glass"></span>
          </button>
        </div>
        <button class="btn btn-secondary shadow-none scan-barcode">
          <i class="icon-barcode"></i>
        </button>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-xl-6">
          <img src="@/assets/architect.jpeg" alt="Img" class="img-fluid" />
        </div>
        <div class="col-12 col-xl-6">
          <!--<div class="suitable">
          <span class="icon-check"></span>
          <div>THIS PRODUCT IS SUITABLE FOR YOU!</div>
        </div>-->
          <div class="unsuitable">
            <span class="icon-cancel"></span>
            <div>THIS PRODUCT IS <b>NOT</b> SUITABLE FOR YOU.</div>
            <br />
            <div class="contains">
              <p style="font-weight: bolder">CONTAINS:</p>
              <div
                v-for="sastojak in [
                  'Hexyl cinnamaladehyde',
                  'Lanolin',
                  'Shellac',
                  'jos nesto',
                  'jos nesto sa puno razmaka za probu',
                ]"
                :key="sastojak"
                style="display: inline-block"
              >
                <span>{{ sastojak }}</span>
              </div>
            </div>
            <br />
          </div>
          <div class="product">
            <label>BRAND:</label>
            <p>AJmooooooooooo</p>
            <label>PRODUCT NAME:</label>
            <p>Se moze ovo dinamicki?</p>
            <label>INGREDIENTS:</label>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iste
              temporibus voluptas corrupti maxime consectetur quos cumque quis.
              Aliquid, tempore odio. Distinctio non eligendi iure ut ipsa
              excepturi necessitatibus quibusdam! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Recusandae doloremque minima, vitae
              consequatur ab illum modi eius quisquam deleniti corporis earum
              animi esse placeat dolore. Veritatis fugit totam eaque nam. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Provident
              quidem numquam quibusdam. Iure numquam soluta accusantium iusto
              qui hic aut illo, repellat dicta odit voluptate, repudiandae ipsa
              maxime ut. Impedit!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.search-next {
  background: #6fa2b4;
  padding: 20px;
  margin-bottom: 20px;
}
.search-next .search-button {
  padding: 0 15px;
}
.search-next .input-group {
  height: 45px;
}
.scan-barcode {
  width: 75px;
  border: none;
  margin: 0 5px;
  height: 45px;
}
.icon-barcode::before {
  font-size: 35px;
}

.product .img-fluid {
  width: 100%;
  height: inherit;
  object-fit: cover;
  -webkit-box-shadow: 0 8px 6px -6px #ccc;
  -moz-box-shadow: 0 8px 6px -6px #ccc;
  box-shadow: 0 8px 6px -6px #ccc;
}
.search-next .icon-barcode::before {
  vertical-align: middle;
}

/* sm */

@media (min-width: 500px) {
  .img-fluid {
    height: 70vh;
  }
}

/* lg */

@media (min-width: 1200px) {
  .img-fluid {
    height: inherit;
  }
}

.suitable,
.unsuitable {
  text-align: center;
}

.suitable div,
.suitable span {
  color: #54bb5e;
}

.unsuitable div,
.unsuitable span,
b {
  color: #ff3d00;
}

.suitable span,
.unsuitable span {
  font-size: 50px;
}

.suitable div,
.unsuitable div,
b {
  font-size: 25px;
}

.contains {
  text-align: left;
}

.contains p {
  margin-bottom: 0;
}

.contains span {
  font-size: 17px;
  padding: 5px;
  background: rgba(255, 0, 0, 0.3);
  color: #595959;
  margin: 5px;
  cursor: pointer;
}

.product label {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 0;
}

img {
  height: 100%;
  object-fit: cover;
}
</style>
