<template>
  <div>
    <form>
      <div
        v-for="(content, index) in ingredientCategories()"
        :key="content.category"
        class="custom-control x custom-checkbox text-left mt-3"
      >
        <span
          :href="'#proba' + index"
          data-toggle="collapse"
          class="icon-caret-right"
          style="font-size: 20px"
        ></span>
        <span :class="classIcon(content)"></span>
        <label>
          <input
            type="checkbox"
            @click="checkAll"
            v-model="allChecked"
            class="custom-control-input"
          />
          <div class="custom-control-label pl-2">
            {{ content }}
          </div>
        </label>
        <h2 class="line1" style="width: 100%"></h2>

        <!-- dropdown -->
        <div
          v-for="content in filterIngredients(content)"
          :key="content"
          :id="'proba' + index"
          class="collapse"
        >
          <div class="dropdown-item" style="margin-left: 25px">
            <label>
              <input
                type="checkbox"
                v-model="selectedIngr"
                :value="content"
                class="custom-control-input"
              />
              <div class="custom-control-label">
                {{ content }}
              </div>
            </label>
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
          <span>{{ custom }} </span>
          <span class="icon-cancel-1" @click="deleteCustom(custom)"></span>
        </div>
      </div>
    </form>
  </div>
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
      allChecked: false,
      selectedIngr: [],
    };
  },
  methods: {
    addCustom(e) {
      if ((e.key === "," || e.key === "Enter") && this.tempCustom) {
        if (!this.custom_ingredients.includes(this.custom_ingredients)) {
          this.custom_ingredients.push(this.tempCustom.replace(",", "")); //ili to ili skuzi kako obrisat sve u inputu nakon keyown
          this.selectedIngr.push(this.tempCustom.replace(",", ""));
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
    checkAll: function() {
      this.allChecked = !this.allChecked;

      if (this.allChecked) {
        // Check all
        for (var key in this.ingredients) {
          this.selectedIngr.push(this.ingredients[key].name);
        }
      }
    },
  },
};
</script>

<style>
.custom-control.x {
  padding-left: 0;
}

/* Add custom ingredients */

.icon-caret-right {
  cursor: pointer;
}

.pill {
  color: white;
  font-weight: bold;
  display: inline-block;
  margin: 15px 8px 0 0;
  padding: 5px 10px;
  background: #eee;
  border-radius: 20px;
  font-size: 9px;
  letter-spacing: 1px;
  font-weight: bold;
}
.pill .icon-cancel-1 {
  font-size: 10px;
}
.pill .icon-cancel-1::before {
  font-size: 10px;
  cursor: pointer;
  vertical-align: 1px;
}
</style>
