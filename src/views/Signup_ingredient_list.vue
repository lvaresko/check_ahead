<template>
  <div class="signup text-center">
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm p-5">
          <img src="@/assets/full_logo.png" class="img-fluid" />
          <p style="font-size: 20px">Choose the ingredients you wish to avoid:</p>
          <form>
            <div class="form-check">
              <span class="icon-caret-right" style=" font-size: 20px;"></span>
              <span class="icon-perfume"></span>
              <label class="form-check-label" for="exampleCheck1">Fragrances</label>
            </div>
            <div class="form-check">
              <span class="icon-caret-right" style=" font-size: 20px;"></span>
              <span class="icon-gloves"></span>
              <label class="form-check-label" for="exampleCheck1">Natural rubber</label>
            </div>
            <div class="form-check">
              <span class="icon-caret-right" style=" font-size: 20px;"></span>
              <span class="icon-test"></span>
              <label class="form-check-label" for="exampleCheck1">Preservatives</label>
            </div>
            <div class="form-check">
              <span class="icon-caret-right" style=" font-size: 20px;"></span>
              <span class="icon-dye"></span>
              <label class="form-check-label" for="exampleCheck1">Dyes</label>
            </div>
            <div class="form-check">
              <span class="icon-caret-right" style=" font-size: 20px;"></span>
              <span class="icon-nut-1"></span>
              <label class="form-check-label" for="exampleCheck1">Metals</label>
            </div>
            <div class="form-check">
              <span class="icon-caret-right" style=" font-size: 20px;"></span>
              <span class="icon-sheep"></span>
              <label class="form-check-label" for="exampleCheck1">Animal by-products</label>
            </div>

            <button type="button" class="btn btn-primary mt-3">Submit</button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
