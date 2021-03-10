<template>
  <div class="addProduct mt-3">
    <h2>Add a product to database</h2>
    <div v-if="added" class="updated">
      <div>See the newly added product <a @click="this.product">Here</a></div>
    </div>
    <AddProductForm v-else @finish="updated" />
  </div>
</template>

<script>
import AddProductForm from "@/components/Admin/AddProductForm.vue";
import router from "@/router";

export default {
  name: "AddProduct",
  data() {
    return {
      product_id: null,
      added: false,
    };
  },
  components: {
    AddProductForm,
  },
  methods: {
    updated(value) {
      this.added = true;
      this.product_id = value;
      this.$emit("updated");
    },
    product() {
      router.push({ name: "Product", params: { product_id: this.product_id } });
    },
  },
};
</script>

<style scoped>
a {
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
</style>
