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
      <label class="custom-control-label" for="customCheck2"
        >Natural rubber</label
      >
      <h2 class="line" style="width: 100%"></h2>
    </div>
    <div class="custom-control custom-checkbox text-left">
      <span class="icon-caret-right" style="font-size: 20px"></span>
      <span class="icon-test"></span>
      <input type="checkbox" class="custom-control-input" id="customCheck3" />
      <label class="custom-control-label" for="customCheck3"
        >Preservatives</label
      >
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
      <label
        href="#proba"
        data-toggle="collapse"
        class="custom-control-label"
        for="customCheck5"
        >Metals</label
      >
      <h2 class="line" style="width: 100%"></h2>
      <div id="proba" class="collapse">Lorem ipsum dolor text....</div>
    </div>
    <div class="custom-control custom-checkbox text-left">
      <span class="icon-caret-right" style="font-size: 20px"></span>
      <span class="icon-sheep"></span>
      <input type="checkbox" class="custom-control-input" id="customCheck6" />
      <label class="custom-control-label" for="customCheck6"
        >Animal by-products</label
      >
      <h2 class="line" style="width: 100%"></h2>
    </div>
    <div class="form-group proba text-left mt-4">
      <label form="exampleInputCustom">CUSTOM:</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputCustom"
        placeholder="e.g. citrus, petroleum..."
        v-model="tempCustom"
        @keyup="addCustom"
      />
      <div v-for="custom in custom_ingredients" :key="custom" class="pill">
        <span>{{ custom }} </span
        ><span class="icon-cancel-1" @click="deleteCustom(custom)"></span>
      </div>
      <!-- botun prebacit u input -->
      <button type="button" class="btn btn-primary v3 shadow none mt-3">
        add
      </button>
      <!-- vjv nece trebat ovaj gumb jer se automatski doda kad stavis ','-->
    </div>
    <button type="button" class="btn btn-primary v2 shadow none mt-3">
      Submit
    </button>
  </form>
</template>

<script>
export default {
  name: "IngredientsList",
  data() {
    return {
      tempCustom: "",
      custom_ingredients: [],
    };
  },
  methods: {
    addCustom(e) {
      if ((e.key === "," || e.key === "Enter") && this.tempCustom) {
        if (!this.custom_ingredients.includes(this.custom_ingredients)) {
          this.custom_ingredients.push(this.tempCustom.replace(",", "")); //ili to ili skuzi kako obrisat sve u inputu nakon keyown
        }
        this.tempCustom = "";
      }
    },

    deleteCustom(custom) {
      this.custom_ingredients = this.custom_ingredients.filter((item) => {
        return custom !== item;
      });
    },
  },
};
</script>
<style scoped>
.pill {
  color: white;
  font-weight: bold;
  display: inline-block;
  margin: 15px 8px 0 0;
  padding: 5px 10px;
  background: #eee;
  border-radius: 20px;
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: bold;
}
.icon-cancel-1 {
  font-size: 13px;
  cursor: pointer;
  vertical-align: 3px;
}
</style>
