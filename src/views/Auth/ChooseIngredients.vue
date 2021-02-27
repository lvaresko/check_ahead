<template>
  <div class="signup text-center">
    <img src="@/assets/full_logo.png" class="img-fluid" loading="lazy" />
    <p style="font-size: 20px">
      Choose the ingredients you wish to avoid:
    </p>
    <ingredients ref="myChild" @change="enableBtn"/>
    <button
      type="button"
      @click="checkIngredients();$refs.myChild.updateList();"
      :class="[selected ? 'disabledClass'  : '', enabledClass]"
      class="btn btn-primary v2 shadow-sm mt-3"
      :disabled="selected"
    >
      Submit
    </button>
  </div>
</template>

<script>
import Ingredients from "@/components/Account/Ingredients.vue";
import store from "@/store";
import router from "@/router";
import { firebase, db } from "@/firebase";

export default {
  name: "ChooseIngredients",
  components: {
    Ingredients,
  },
  data() {
    return {
      selected: true,
      enabledClass: "btn btn-primary v2 shadow-sm mt-3",
    };
  },
  methods: {
    checkIngredients() {
      db.collection("users")
        .doc(store.currentUser)
        .update({
          active: true,
        });
      store.active = true;
      router.push({ name: "Home" });
    },
    enableBtn() {
      this.selected = !this.selected;
    },
  },
};
</script>

<style scoped>
.disabledClass {
  cursor: not-allowed;
  background-color: #6FA2B4;
}
</style>