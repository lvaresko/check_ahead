<template>
  <div class="signup text-center ingredients_list">
    <Banner v-if="this.updated" @toggle="toggleBanner(false)" />

    <h1 class="pt-3">Ingredients list</h1>
    <Ingredients ref="myChild" @toggle="toggleBanner(true)" />
    <button
      type="button"
      @click="$refs.myChild.updateList()"
      class="btn btn-primary v2 shadow-sm mt-3"
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
    };
  },

  methods: {
    toggleBanner(value) {
      this.updated = value;
    },
  },
};
</script>

<style scoped>
.ingredients_list {
  padding-top: 0;
}
</style>
