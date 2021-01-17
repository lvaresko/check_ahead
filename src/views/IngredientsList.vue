<template>
  <div class="signup text-center">
    <h1>Ingredients list</h1>
    <ingredients />
  </div>
</template>

<script>
import Ingredients from '@/components/Account/Ingredients.vue';

export default {
  name: "IngredientsList",
  components: {
    Ingredients
  },
}
</script>