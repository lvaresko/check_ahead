<template>
  <form>
    <div class="custom-control custom-checkbox text-left">
      <span class="icon-caret-right" style="font-size: 20px"></span>
      <span class="icon-perfume"></span>
      <input type="checkbox" class="custom-control-input" id="customCheck1" />
      <label class="custom-control-label" for="customCheck1">Fragrances</label>
      <h2 class="line" style="width: 100%"></h2>
    </div>
    <div class="custom-control custom-checkbox text-left">
      <span class="icon-caret-right" style="font-size: 20px"></span>
      <span class="icon-gloves"></span>
      <input type="checkbox" class="custom-control-input" id="customCheck2" />
      <label class="custom-control-label" for="customCheck2">Natural rubber</label>
      <h2 class="line" style="width: 100%"></h2>
    </div>
    <div class="custom-control custom-checkbox text-left">
      <span class="icon-caret-right" style="font-size: 20px"></span>
      <span class="icon-test"></span>
      <input type="checkbox" class="custom-control-input" id="customCheck3" />
      <label class="custom-control-label" for="customCheck3">Preservatives</label>
      <h2 class="line" style="width: 100%"></h2>
    </div>
    <div class="custom-control custom-checkbox text-left">
      <span class="icon-caret-right" style="font-size: 20px"></span>
      <span class="icon-dye"></span>
      <input type="checkbox" class="custom-control-input" id="customCheck4" />
      <label class="custom-control-label" for="customCheck4">Dyes</label>
      <h2 class="line" style="width: 100%"></h2>
    </div>
    <div class="custom-control custom-checkbox text-left">
      <span class="icon-caret-right" style="font-size: 20px"></span>
      <span class="icon-nut-1"></span>
      <input type="checkbox" class="custom-control-input" id="customCheck5" />
      <label href="#proba" data-toggle="collapse" class="custom-control-label" for="customCheck5">Metals</label>
      <h2 class="line" style="width: 100%"></h2>
      <div id="proba" class="collapse">Lorem ipsum dolor text....</div>
    </div>
    <div class="custom-control custom-checkbox text-left">
      <span class="icon-caret-right" style="font-size: 20px"></span>
      <span class="icon-sheep"></span>
      <input type="checkbox" class="custom-control-input" id="customCheck6" />
      <label class="custom-control-label" for="customCheck6">Animal by-products</label>
      <h2 class="line" style="width: 100%"></h2>
    </div>
    <button type="button" class="btn btn-primary v2 shadow none mt-3">
      Submit
    </button>
  </form>
</template>

<script>
export default {
  name: "IngredientsList",
};
</script>