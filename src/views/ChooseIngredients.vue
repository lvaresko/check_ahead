<template>
  <div class="signup text-center">
    <img src="@/assets/full_logo.png" class="img-fluid" />
    <p style="font-size: 20px">
      Choose the ingredients you wish to avoid:
    </p>
    <ingredients-list />
  </div>
</template>

<script>
import IngredientsList from '@/components/Profile/IngredientsList.vue';

export default {
  name: "ChooseIngredients",
  components: {
    IngredientsList
  },
}
</script>