<template>
  <div class="signup text-center">
    <h1>Ingredients list</h1>
    <ingredients />

    <button type="button" class="btn btn-primary v2 shadow-sm mt-3">
      Submit
    </button>
  </div>
</template>

<script>
import Ingredients from "@/components/Account/Ingredients.vue";

export default {
  name: "IngredientsList",
  components: {
    Ingredients,
  },
};
</script>
