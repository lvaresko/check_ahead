<template>
  <div class="home">
    <img
      class="loading"
      v-if="loading"
      :src="require('@/assets/loading.gif')"
    />
    <div v-else>
      <BarcodeReader
        v-if="this.barcodeReaderOpen"
        @close="toggleBarcodeReader"
        @code="checkBarcode"
      />
      <Popup v-if="this.popupOpen" @close="togglePopup" />
      <div
        class="jumbotron jumbotron-fluid"
        :style="{
          backgroundImage: `url(${require('../assets/images/home.jpg')})`,
        }"
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
          class="row"
          v-if="!filter"
          data-masonry='{"percentPosition": true }'
        >
          <Card
            v-for="product in showProducts"
            :key="product.id"
            :site="site"
            :info="product"
          />
          <div v-if="!this.products.length">
            We're sorry, there are no products to show.
          </div>
        </div>

        <div class="row" v-else data-masonry='{"percentPosition": true }'>
          <Card
            v-for="product in showFiltered"
            :key="product.id"
            :site="site"
            :info="product"
          />
          <div v-if="!this.filtered.length">
            We're sorry, there are no products to show.
          </div>
        </div>

        <div
          v-if="
            (this.filter ? this.filtered.length : this.totalProducts) >
              productsLimit
          "
          @click.prevent="productsLimit += 6"
          class="load text-center"
        >
          Load more...
        </div>
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
      loading: false,
      filter: false,
      filtered: [],
      filter_items: [],
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
    this.loading = true;
    await this.getRecommended();
    this.loading = false;
  },
  updated() {
    this.totalProducts = this.products.length;
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
    async getRecommended() {
      let results = await db.collection("products").get();
      this.products = [];

      let favorited = await db
        .collection("users")
        .doc(this.currentUser)
        .collection("favorites")
        .get();

      let viewed = await db
        .collection("users")
        .doc(this.currentUser)
        .collection("products")
        .get();

      let user_results = await db
        .collection("users")
        .doc(this.currentUser)
        .get();

      const user_info = user_results.data();
      let ingredientsList = [];
      ingredientsList.push(
        ...user_info.selectedIngredients,
        ...user_info.customIngredients
      );

      for (let doc of results.docs) {
        let data = doc.data();
        //don't show products that are favorited, viewed and not suitable
        let isFavorited = favorited.docs.filter((result) => {
          return result.id.includes(doc.id);
        });
        //console.log(favorited.docs.filter((lala) => console.log(lala.id)));
        //console.log(viewed.docs.filter((lala) => console.log(lala.id)));
        let isViewed = viewed.docs.filter((result) => {
          return result.id.includes(doc.id);
        });

        if (!isFavorited.length && !isViewed.length) {
          // if product not favorited and viewed check suitability

          let filter = data.ingredients.filter((key) =>
            ingredientsList.includes(key)
          );
          if (filter == 0) {
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
        }
        if (this.products.length == 6) this.loading = false;
      }
    },
    async filterRecommendations(category, type, brand) {
      this.toggleFilter();
      this.loading = true;
      this.productsLimit = 6;
      this.filtered = [];
      this.filter_items = [];

      for (let product of this.products) {
        this.filter_items.push({
          brand: product.brand,
          category: product.category,
          type: product.type,
        });
      }

      if (!category.length) category = this.filter_options(1);

      if (!type.length) type = this.filter_options(2);

      if (!brand.length) brand = this.filter_options(3);

      this.filtered.push(
        this.products.filter(
          (product) =>
            category.includes(product.category) &&
            type.includes(product.type) &&
            brand.includes(product.brand)
        )
      );

      this.filtered = this.filtered[0];
      this.loading = false;
      this.filter = true;
    },
    filter_options(x) {
      switch (x) {
        case 1:
          return [
            ...new Set(this.filter_items.map(({ category }) => category)),
          ].sort();
        case 2:
          return [...new Set(this.filter_items.map(({ type }) => type))].sort();
        case 3:
          return [
            ...new Set(this.filter_items.map(({ brand }) => brand)),
          ].sort();
      }
    },
    clearFilter() {
      this.filter = false;
      this.filtered = [];
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
        this.loading = false;
        this.togglePopup();
      }
    },
  },
  computed: {
    showProducts() {
      return this.products.slice(0, this.productsLimit);
    },
    showFiltered() {
      return this.filtered.slice(0, this.productsLimit);
    },
  },
};
</script>

<style scoped>
.home .icon-barcode::before {
  color: white;
  font-size: 26px;
  vertical-align: top;
}

.home .jumbotron {
  background-size: cover;
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

.load {
  border: 1px solid lightgray;
  padding: 5px;
  font-weight: 500;
  cursor: pointer;
  font-size: 15px;
  transition: 0.3s;
}

.load:hover {
  color: white;
  background: lightgray;
}
</style>
