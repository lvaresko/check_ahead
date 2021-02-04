<template>
  <div class="signup text-center">
    <img src="@/assets/full_logo.png" class="img-fluid" />
    <p style="font-size: 20px">
      Choose the ingredients you wish to avoid:
    </p>
    <ingredients />
    <button
      type="button"
      @click="checkIngredients()"
      class="btn btn-primary v2 shadow-sm mt-3"
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
  },
};
</script>
