<template>
  <div class="signup text-center">
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm p-2">
          <img src="@/assets/full_logo.png" class="img-fluid" />
          <p style="font-size: 20px">
            Choose the ingredients you wish to avoid:
          </p>
          <form>
            <div class="custom-control custom-checkbox text-left">
              <span class="icon-caret-right" style="font-size: 20px"></span>
              <span class="icon-perfume"></span>
              <input type="checkbox" class="custom-control-input" id="customCheck1">
              <label class="custom-control-label" for="customCheck1">Fragrances</label>
            </div>
            <div class="custom-control custom-checkbox text-left">
              <span class="icon-caret-right" style="font-size: 20px"></span>
              <span class="icon-gloves"></span>
              <input type="checkbox" class="custom-control-input" id="customCheck2">
              <label class="custom-control-label" for="customCheck2">Netural rubber</label>
            </div>
           <div class="custom-control custom-checkbox text-left">
              <span class="icon-caret-right" style="font-size: 20px"></span>
              <span class="icon-test"></span>
              <input type="checkbox" class="custom-control-input" id="customCheck3">
              <label class="custom-control-label" for="customCheck3">Preservatives</label>
            </div>
           <div class="custom-control custom-checkbox text-left">
              <span class="icon-caret-right" style="font-size: 20px"></span>
              <span class="icon-dye"></span>
              <input type="checkbox" class="custom-control-input" id="customCheck4">
              <label  class="custom-control-label" for="customCheck4">Dyes</label>
            </div>
            <div class="custom-control custom-checkbox text-left">
              <span class="icon-caret-right" style="font-size: 20px"></span>
              <span class="icon-nut-1"></span>
              <input type="checkbox" class="custom-control-input" id="customCheck5">
              <label href="#proba" data-toggle="collapse" class="custom-control-label" for="customCheck5">Metals</label>
              <div id="proba" class="collapse">Lorem ipsum dolor text....</div>
            </div>
            <div class="custom-control custom-checkbox text-left">
              <span class="icon-caret-right" style="font-size: 20px"></span>
              <span class="icon-sheep"></span>
              <input type="checkbox" class="custom-control-input" id="customCheck6">
              <label class="custom-control-label" for="customCheck6">Animal by-products</label>
            </div>
            <button type="button" class="btn btn-primary v2 mt-3 ">Submit</button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
