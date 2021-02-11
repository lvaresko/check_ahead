<template>
  <form class="signup text-center">
    <div class="form-group text-left">
      <label>Name:</label>
      <input
        v-model="name"
        class="form-control basic-input"
        placeholder="Type here product name..."
        required
      />
    </div>
    <div class="form-group text-left">
      <label>Brand:</label>
      <input
        v-model="brand"
        class="form-control basic-input"
        placeholder="Type here product brand..."
        required
      />
    </div>
    <div class="form-group text-left" style="height: 50px">
      <label>Category:</label>
      <select name="category" id="category" v-model="category" required>
        <option value="MakeUp">MakeUp</option>
        <option value="Skincare">Skincare</option>
        <option value="Toiletry">Toiletry</option>
      </select>
    </div>
    <div class="form-group text-left">
      <label>Type:</label>
      <input
        v-model="type"
        class="form-control basic-input"
        placeholder="Type here product type..."
        required
      />
    </div>
    <div class="form-group text-left" style="height: 200px">
      <label>Ingredients:</label>
      <textarea
        name="message"
        rows="5"
        cols="30"
        v-model="ingredients"
        required
      ></textarea>
    </div>

    <input type="file" @change="onFileSelected" />
    <button
      type="button"
      class="btn btn-primary v2 shadow-sm mt-3"
      @click="addProduct"
    >
      Submit
    </button>
  </form>
</template>

<script>
import { firebase, db, storage } from "@/firebase";
import store from "@/store";

export default {
  name: "Admin",
  data() {
    return {
      name: null,
      brand: null,
      category: null,
      type: null,
      ingredients: null,
      selectedFile: null,
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    async addProduct() {
      //remove ' ' for imgRef
      const brandNew = this.brand.replace(/\s/g, "");
      const nameNew = this.name.replace(/\s/g, "");

      //put ingredients into array
      const ingredientsArray = this.ingredients
        .replace(/[()]/g, ",")
        .split(",")
        .map((x) => x.trim())
        .map((x) => x.toLowerCase())
        .map((x) => x.charAt(0).toUpperCase() + x.slice(1));

      //remove duplicated and ""
      const ingredients = [...new Set(ingredientsArray)].filter((x) => x != "");
      console.log(ingredients);

      //storage + firestore
      const imgRef = "products/" + brandNew + "_" + nameNew + ".png";
      let result = await storage.ref(imgRef).put(this.selectedFile);
      let url = await result.ref.getDownloadURL();

      const doc = await db.collection("products").add({
        brand: this.brand,
        category: this.category,
        ingredients: ingredients,
        name: this.name,
        type: this.type,
        url: url,
        //fali barcode
      });
      console.log("uspjeh");
      //refresh kao
    },
  },
};
</script>

<style></style>
