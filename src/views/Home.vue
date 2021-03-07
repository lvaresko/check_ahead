<template>
  <div class="home">
    <img
      class="loading"
      v-if="loading"
      :src="require('@/assets/loading.gif')"
    />
    <div v-else>
      <BarcodeReader
        :showBarcodeReader="barcodeReaderOpen"
        v-if="this.barcodeReaderOpen"
        @close="toggleBarcodeReader"
        @code="checkBarcode"
      />
      <div
        class="jumbotron jumbotron-fluid"
        :style="{ backgroundImage: `url(${require('../assets/home.jpg')})` }"
      >
        <div class="container text-center">
          <h1 class="display-5">
            We check the ingredients for you!
          </h1>
          <div class="description">
            <h4 style="font-weight: bolder; color: white">
              Welcome to the searchable database of cosmetic products.
            </h4>
            <h5 style="color:white">
              Based on your list of non-preferences, we determine if the product
              is suitable for you or not.
            </h5>
          </div>
          <SearchDropdown />
          <h4 style="color: white">or</h4>
          <button
            type="button"
            class="scan btn btn-primary shadow-sm"
            @click="toggleBarcodeReader"
          >
            SCAN BARCODE <i class="icon-barcode"></i>
          </button>
        </div>
      </div>

      <div class="container">
        <div class="recommended">
          <p>Recommended for you:</p>
          <button class="btn btn-primary shadow-sm ml-5" @click="toggleFilter">
            FILTER
          </button>
        </div>

        <FilterProducts
          :openFilter="filterOpen"
          @close="toggleFilter"
          @filter="filterRecommendations"
          @clear="clearFilter"
        />

        <div
          v-if="!filter"
          class="row"
          data-masonry='{"percentPosition": true }'
        >
          <Card
            v-for="(product, index) in products"
            v-if="index < productsLimit"
            :key="product.id"
            :site="site"
            :info="product"
          />
        </div>
        <div v-else class="row" data-masonry='{"percentPosition": true }'>
          <Card
            v-for="product in filtered"
            :key="product.id"
            :site="site"
            :info="product"
          />
        </div>
        <div v-if="totalProducts > productsLimit" class="text-left">
          <a href="#" @click.prevent="productsLimit += 6" class="load"
            >Load more...</a
          >
        </div>

        <button
          type="button"
          class="btn btn-primary shadow-none"
          @click="togglePopup"
        >
          Popup
        </button>
        <Popup :site="site" :showPopup="popupOpen" @close="togglePopup" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Home/Card.vue";
import Popup from "../components/Home/Popup.vue";
import FilterProducts from "../components/Home/FilterProducts.vue";
import { db } from "@/firebase.js";
import BarcodeReader from "../components/BarcodeReader.vue";
import router from "@/router";
import SearchDropdown from "../components/SearchDropdown.vue";

export default {
  name: "Home",
  data: () => {
    return {
      currentUser: localStorage.getItem("user"),
      products: [],
      popupOpen: false,
      filterOpen: false,
      barcodeReaderOpen: false,
      site: "home",
      loading: false,
      filter: false,
      filtered: [],
      productsLimit: 6,
      totalProducts: 0,
    };
  },
  components: {
    Card,
    Popup,
    FilterProducts,
    BarcodeReader,
    SearchDropdown,
  },
  async mounted() {
    await this.getReccomended();
  },
  updated() {
    this.totalProducts = this.products.length;
    console.log(this.products.length);
  },
  methods: {
    togglePopup() {
      this.popupOpen = !this.popupOpen;
    },
    toggleFilter() {
      this.filterOpen = !this.filterOpen;
    },
    toggleBarcodeReader() {
      this.barcodeReaderOpen = !this.barcodeReaderOpen;
    },
    async getReccomended() {
      this.loading = true;

      let results = await db.collection("products").get();
      this.products = [];
      results.forEach(async (doc) => {
        let data = doc.data();
        //don't show products that are favorited
        let favorited = await db
          .collection("users")
          .doc(this.currentUser)
          .collection("favorites")
          .doc(doc.id)
          .get();

        if (!favorited.exists) {
          this.products.push({
            id: doc.id,
            brand: data.brand,
            name: data.name,
            category: data.category,
            type: data.type,
            ingredients: data.ingredients,
            url: data.url,
          });
        }

        this.loading = false;
      });
    },
    filterRecommendations(category, type, brand) {
      console.log("Filter emita oke", category, type, brand);

      if (category.length && type.length && brand.length) {
        // if something selected
        this.filter = true;
        this.filtered = this.products.filter(
          (product) =>
            category.includes(product.category) &&
            type.includes(product.type) &&
            brand.includes(product.brand)
        );
       
        console.log(this.filtered);
      }
    },
    clearFilter() {
      this.filter = false;
    },
    async checkBarcode(value) {
      this.toggleBarcodeReader();
      this.loading = true;

      let query = await db
        .collection("products")
        .where("ean_code", "==", value[0])
        .get();
      let product_id = null;

      query.forEach((doc) => {
        product_id = doc.id;
      });

      if (product_id) {
        this.loading = false;
        router.push({ name: "Product", params: { product_id: product_id } });
      } else {
        store.loading = false;
        this.togglePopup();
      }
    },
  },
};
</script>

<style>
.home .icon-barcode::before {
  color: white;
  font-size: 26px;
  vertical-align: top;
}

.home .jumbotron {
  background-size: cover;
  background-image: url("../assets/home_3.1.jpeg");
  margin-bottom: 0;
  min-height: 480px;
  background-position: center center;
  margin-bottom: 20px;
  -webkit-box-shadow: 0 8px 6px -6px #ccc;
  -moz-box-shadow: 0 8px 6px -6px #ccc;
  box-shadow: 0 8px 6px -6px #ccc;
}

#home-page {
  background-color: #6fa2b4;
  padding: 20px;
  -webkit-box-shadow: 0 8px 6px -6px #ccc;
  -moz-box-shadow: 0 8px 6px -6px #ccc;
  box-shadow: 0 8px 6px -6px #ccc;
}

.display-5 {
  margin-top: 15px;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 8px #777;
}

.description {
  background: rgba(200, 200, 200, 0.6);
  padding: 10px;
  margin: 7px;
  text-shadow: 2px 2px 8px #777;
}

.home .search-button {
  padding: 0 15px;
}

.container-fluid {
  display: flex;
  justify-content: space-between;
}

.container-fluid img {
  width: 50%;
}

.recommended {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.recommended .btn {
  margin: 0;
  width: 90px;
}

.load:hover {
  color: #232323;
  text-decoration: none;
  cursor: pointer;
}
</style>
