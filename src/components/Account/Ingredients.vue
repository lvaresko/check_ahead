<template>
  <form>
    <div
      v-for="content in ingredientCategories()"
      :key="content.category"
      class="custom-control custom-checkbox text-left"
    >
      <span class="icon-caret-right" style="font-size: 20px"></span>
      <span :class="classIcon(content)"></span>
      <input type="checkbox" class="custom-control-input"/>
      <label
        href="#proba"
        data-toggle="collapse"
        class="custom-control-label"
      >
        {{ content }}</label
      >
      <h2 class="line" style="width: 100%"></h2>

      <!-- dropdown -->
      <div
        v-for="content in filterIngredients(content)"
        :key="content"
        id="proba"
        class="collapse"
      >
      <div class="dropdown-item" style="margin-left: 25px">
        <input type="checkbox" class="custom-control-input" id="customCheck1" />
        <label
          href="#proba"
          data-toggle="collapse"
          class="custom-control-label"
          for="customCheck1"
        >
          {{ content }}</label
        >
        <h2 class="line2" style="width: 100%"></h2>
      </div>
      </div>
    </div>
    
    <div class="form-group proba text-left mt-4">
      <label form="exampleInputCustom">CUSTOM:</label>
      <input
        type="text"
        class="form-control basic-input"
        id="exampleInputCustom"
        placeholder="e.g. citrus, petroleum..."
        v-model="tempCustom"
        @keyup="addCustom"
      />
      <div v-for="custom in custom_ingredients" :key="custom" class="pill">
        <span>{{ custom }} </span
        ><span class="icon-cancel-1" @click="deleteCustom(custom)"></span>
      </div>
      <!-- botun prebacit u input 
      <button type="button" class="btn btn-primary v3 shadow none mt-3">
        add
      </button> -->
      <!-- vjv nece trebat ovaj gumb jer se automatski doda kad stavis ','-->
    </div>
    <button type="button" class="btn btn-primary v2 shadow none mt-3">
      Submit
    </button>
  </form>
</template>

<script>
export default {
  name: "Ingredients",
  data() {
    return {
      tempCustom: "",
      custom_ingredients: [],
      ingredients: [
        { name: "perfume", category: "fragrances" },
        { name: "eugenol", category: "fragrances" },
        { name: "geraniol", category: "fragrances" },
        { name: "methylisothiazolinone", category: "preservatives" },
        { name: "coal-tar", category: "dyes" },
        { name: "p-phenylenediamine", category: "dyes" },
        { name: "gold", category: "metals" },
        { name: "nickel", category: "metals" },
      ],
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
    ingredientCategories() {
      return [...new Set(this.ingredients.map(({ category }) => category))];
    },
    classIcon(icon) {
      //console.log("icon-"+ icon);
      //console.log(this.ingredients);
      return "icon-" + icon;
    },
    filterIngredients(name) {
      //console.log(this.ingredients);
      //console.log("filter " + name + " " + this.ingredients.filter((key) => key.category.includes(name)).map(({name}) => name));

      return this.ingredients
        .filter((key) => key.category.includes(name))
        .map(({ name }) => name);
    },
  },
};
</script>

<style lang="scss">
/* Checkbox label position */

.custom-control.custom-checkbox {
  padding-left: 0;
}

label.custom-control-label {
  position: relative;
  padding-top: 4px;
  padding-right: 1.5rem;
  margin: 8px;
}

label.custom-control-label::before,
label.custom-control-label::after {
  right: 0;
  left: inherit;
  top: 8px;
}

/* Divider */

h2.line {
    border-bottom: 1px solid #a3a3a3;
    margin: 10px auto;
}

h2.line2 {
    border-bottom: 1px solid #ccc;
    line-height: 0.1em;
    margin: 2px auto;
}

/* Checkbox style */

.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {
  background-color: white;
  border-color: lightgray !important;
  box-shadow: none !important;
}

.custom-control-input:checked ~ .custom-control-label::before,
.custom-control-input:not(:disabled):active ~ .custom-control-label::before {
  background-color: lightgray;
  border-color: gray !important;
  box-shadow: none !important;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='gray' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
}

/* Add custom ingredients */

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
  font-size: 13px !important;
  cursor: pointer;
  vertical-align: 3px;
}
</style>
