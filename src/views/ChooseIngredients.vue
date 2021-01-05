<template>
  <div class="signup text-center">
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm p-5">
          <img src="@/assets/full_logo.png" class="img-fluid" />
          <p style="font-size: 20px">
            Choose the ingredients you wish to avoid:
          </p>
          <ingredients-list />
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
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