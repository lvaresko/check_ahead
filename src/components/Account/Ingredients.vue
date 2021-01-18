<template>
  <form>
    <div
      v-for="content in ingredientCategories()"
      :key="content.category"
      class="custom-control custom-checkbox text-left mt-3"
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
      <h2 class="line1" style="width: 100%"></h2>

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
