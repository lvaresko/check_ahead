<template>
  <div class="signup text-center">
    <img src="@/assets/full_logo.png" class="img-fluid" />
    <p style="font-size: 20px">
      Choose the ingredients you wish to avoid:
    </p>
    <ingredients />
  </div>
</template>

<script>
import Ingredients from '@/components/Account/Ingredients.vue';

export default {
  name: "ChooseIngredients",
  components: {
    Ingredients
  },
}
</script>
