<template>
  <div class="signup text-center">
    <img src="@/assets/images/full_logo.png" class="img-fluid" loading="lazy" />
    <p style="font-size: 20px">
      Choose the ingredients you wish to avoid:
    </p>
    <ingredients
      ref="myChild"
      @enable="enableBtn(false)"
      @disable="enableBtn(true)"
    />
    <button
      type="button"
      @click="
        checkIngredients();
        $refs.myChild.updateList();
      "
      :class="[
        selected ? 'disabledClass' : '',
        'btn btn-primary v2 shadow-sm mt-4 mb-4',
      ]"
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
import { db } from "@/firebase";

export default {
  name: "ChooseIngredients",
  components: {
    Ingredients,
  },
  data() {
    return {
      currentUser: localStorage.getItem("user"),
      selected: true,
    };
  },
  methods: {
    checkIngredients() {
      db.collection("users")
        .doc(this.currentUser)
        .update({
          active: true,
        });
      store.active = true;
      router.push({ name: "Home" });
    },
    enableBtn(value) {
      this.selected = value;
    },
  },
};
</script>

<style scoped>
.disabledClass {
  cursor: not-allowed;
  background-color: #6fa2b4;
  margin: 5px 0 5px 0;
}
</style>
