<template>
  <div>
    <multiselect
      v-model="value"
      :options="options"
      :options-limit="4"
      track-by="name"
      label="name"
      placeholder="Search for a product.."
    ></multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import { db } from "@/firebase.js";
import router from "@/router";

export default {
  components: { Multiselect },
  data() {
    return {
      value: null,
      options: [],
    };
  },
  async mounted() {
    await this.getAllProducts();
  },
  methods: {
    async getAllProducts() {
      let snapshot = await db
      .collection("products")
      .orderBy("name")
      .get();
    this.options = [];
    snapshot.docs.forEach((doc) => {
      this.options.push({
        id: doc.id,
        name: doc.data().name
      });
    });
    }
  },
  watch: {
    value() {
      router.push({ name: "Product", params: { product_id: this.value.id } });
    },
  },
};
</script>

