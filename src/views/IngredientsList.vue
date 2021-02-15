<template>
  <div class="signup text-center ingredients_list">
    <div @open="this.updated = false"></div>
    <Banner v-if="this.updated" @toggle="toggleBanner" />
    <!-- Prije je bilo bez gornjeg div-a
    mislila sam da ne radi jer u Ingredients je emitao ''toggle'' 
    pa sam misla da nemoze doc do toga jer nije povezan nikako s bannerom
    ali doslovno ne hvata emit na open koj je u obicnom divu
     -->
    <h1 class="pt-3">Ingredients list</h1>
    <ingredients ref="myChild" />
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
    toggleBanner() {
      console.log("nikad ne dode tu jelda");
      this.updated = !this.updated;
    },
  },
};
</script>

<style scoped>
.ingredients_list {
  padding-top: 0;
}
</style>
