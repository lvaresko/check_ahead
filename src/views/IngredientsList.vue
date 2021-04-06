<template>
  <div class="signup text-center ingredients_list">
    <Banner v-if="this.updated" @toggle="toggleBanner(false)" />

    <h1 class="pt-3">Ingredients list</h1>
    <Ingredients ref="myChild" @toggle="toggleBanner(true)" @enable="enableBtn(false)" @disable="enableBtn(true)" />
    <button
      type="button"
      @click="$refs.myChild.updateList()"
      :class="[selected ? 'disabledClass' : '', 'btn btn-primary v2 shadow-sm mt-3']"
      :disabled="selected"
    >
      Submit
    </button>
  </div>
</template>

<script>
import Ingredients from "@/components/Account/Ingredients.vue";
import Banner from "@/components/Banner.vue";

export default {
  name: "IngredientsList",
  components: {
    Banner,
    Ingredients,
  },
  data() {
    return {
      updated: false,
      selected: false,
    };
  },

  methods: {
    toggleBanner(value) {
      this.updated = value;
    },
    enableBtn(value) {
      this.selected = value;
    },
  },
};
</script>

<style scoped>
.ingredients_list {
  padding-top: 0;
}

.disabledClass {
  cursor: not-allowed;
  background-color: #6FA2B4;
}

.btn-primary:disabled{
  color: #fff;
  background-color: #6fa2b4;
  border: none;
}
</style>
