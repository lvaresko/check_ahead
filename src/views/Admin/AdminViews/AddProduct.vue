<template>
  <div class="addProduct">
    <h2>Add a product to database</h2>
    <AddProductForm />
  </div>
</template>

<script>
import AddProductForm from "@/components/Admin/AddProductForm.vue";

export default {
  name: "AddProduct",
  components: {
    AddProductForm,
  },
};
</script>

<style></style>
