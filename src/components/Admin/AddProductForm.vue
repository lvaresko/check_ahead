<template>
  <div class="admin">
    <BarcodeReader
      :showBarcodeReader="barcodeReaderOpen"
      v-if="this.barcodeReaderOpen"
      @close="toggleBarcodeReader"
      @code="checkBarcode"
    />
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
        <label>Category: </label>
        <div class="dropdown">
          <select name="category" id="category" v-model="category" required>
            <option value="MakeUp">MakeUp</option>
            <option value="Skincare">Skincare</option>
            <option value="Toiletry">Toiletry</option>
          </select>
        </div>
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
        <div class="text">
          <textarea
            name="message"
            rows="5"
            cols="30"
            v-model="ingredients"
            required
          ></textarea>
        </div>
      </div>
      <div class="form-group text-left" style="height: 80px">
        <label>Choose a photo:</label>
        <input type="file" @change="onFileSelected" />
      </div>
      <div class="form-group text-left" style="height: 50px">
        <label>Scan barcode:</label>
        <button class="btn btn-secondary" @click.prevent="toggleBarcodeReader">
          <span class="icon-barcode"></span>
        </button>
        <span v-if="this.barcode" class="icon-check-2"></span>
      </div>
      <button
        type="button"
        class="btn btn-primary v2 shadow-sm mt-3"
        @click="addProduct"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { firebase, db, storage } from "@/firebase";
import store from "@/store";
import BarcodeReader from "../../components/BarcodeReader.vue";

export default {
  name: "AddProductForm",
  data() {
    return {
      name: null,
      brand: null,
      category: null,
      type: null,
      ingredients: null,
      selectedFile: null,
      barcode: null,
      barcodeReaderOpen: false,
    };
  },
  components: {
    BarcodeReader,
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    toggleBarcodeReader() {
      this.barcodeReaderOpen = !this.barcodeReaderOpen;
    },

    async checkBarcode(value) {
      this.toggleBarcodeReader();

      let query = await db
        .collection("products")
        .where("ean_code", "==", value[0])
        .get();

      let product_id = null;

      query.forEach((doc) => {
        product_id = doc.id;
      });

      if (product_id) {
        console.log("This ean_code already exists");
      } else {
        this.barcode = value[0];
      }
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
        ean_code: this.barcode,
      });
      this.toggleBanner(true);
    },
  },
};
</script>

<style scoped>
.dropdown {
  border: 1px solid rgba(128, 128, 128, 0.753);
  border-radius: 4px;
  display: inline-block;
  margin-left: 8px;
}

textarea {
  border: 2px solid rgba(128, 128, 128, 0.753);
  border-radius: 4px;
  width: 298px;
}

.icon-barcode {
  font-size: 25px;
}

.btn-secondary {
  width: 60px;
  margin: 0 7px;
}

.icon-check-2 {
  color: #54bb5e;
  font-size: 24px;
}

.btn:hover > .icon-barcode {
  color: white;
}
</style>
