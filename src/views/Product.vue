<template>
  <div class="product">
    <img
      class="loading"
      v-if="loading"
      :src="require('@/assets/loading.gif')"
    />
    <div v-else class="container-fluid search-next">
      <div
        class="container"
        style="display: flex; justify-content: space-between"
      >
        <div class="input-group search">
          <input
            type="text"
            class="form-control border-right-0 search-input shadow-none"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Search for a product in our database..."
            onfocus="this.placeholder = ''"
          />
          <button
            class="btn border-left-0 search-button shadow-none"
            type="button"
          >
            <span class="icon-magnifying-glass"></span>
          </button>
        </div>
        <button class="btn btn-secondary shadow-none scan-barcode">
          <i class="icon-barcode"></i>
        </button>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-xl-6">
          <img
            :src="this.product_info.url"
            alt="Img"
            class="img-fluid"
            loading="lazy"
          />
        </div>
        <div class="col-12 col-xl-6">
          <div v-if="this.suitable" class="suitable">
            <span class="icon-check"></span>
            <div>THIS PRODUCT IS SUITABLE FOR YOU!</div>

            <p v-if="!this.favorite">Add to Favorites!</p>
            <p v-else>Remove from Favorites</p>
            <span class="icon-heart"></span>
          </div>
          <div v-else class="unsuitable">
            <span class="icon-cancel"></span>
            <div>THIS PRODUCT IS <b>NOT</b> SUITABLE FOR YOU.</div>
            <br />
            <div class="contains">
              <p style="font-weight: bolder">CONTAINS:</p>
              <div
                v-for="sastojak in this.filter"
                :key="sastojak"
                style="display: inline-block"
              >
                <span @click="toggleDescription(sastojak)">{{ sastojak }}</span>
              </div>
              <Description
                v-if="DescriptionOpen"
                :showDescription="DescriptionOpen"
                :info="info"
                @close="toggleDescription"
              />
            </div>
            <br />
          </div>
          <div class="product">
            <label>BRAND:</label>
            <p>{{ this.product_info.brand }}</p>
            <label>PRODUCT NAME:</label>
            <p>{{ this.product_info.name }}</p>
            <label>INGREDIENTS:</label>
            <p>
              {{ this.ingredients }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Description from "../components/Description.vue";
import { db } from "@/firebase.js";
import store from "@/store";

export default {
  name: "Product",
  data() {
    return {
      productId: this.$route.params.product_id,
      product_info: {},
      DescriptionOpen: false,
      info: null,
      loading: true,
      favorite: true,
      ingredients: null,
      ingredientsList: [],
      filter: [],
      suitable: null,
    };
  },
  async mounted() {
    await this.getProduct();
    this.ingredients = this.product_info.ingredients.join(", ");
    this.checkSuitability();
  },
  methods: {
    async toggleDescription(x) {
      this.info = x;
      this.DescriptionOpen = !this.DescriptionOpen;
    },
    async getProduct() {
      this.loading = true;
      let result = await db
        .collection("products")
        .doc(this.productId)
        .get();

      this.product_info = result.data();
      this.loading = false;
    },
    async checkSuitability() {
      // 1. get users ingredients list
      let results = await db
        .collection("users")
        .doc(store.currentUser)
        .get();

      const data = results.data();
      this.ingredientsList.push(
        ...data.selectedIngredients,
        ...data.customIngredients
      );

      // 2. check if product contains smth from ingredients list
      this.filter = this.product_info.ingredients.filter((key) =>
        this.ingredientsList.includes(key)
      );
      if (this.filter == 0) {
        //product suitable
        this.suitable = true;
      } else {
        //product not suitable
        this.suitable = false;
      }

      // 3. store info for viewed product
      db.collection("users")
        .doc(store.currentUser)
        .collection("products")
        .doc(this.productId)
        .set({
          suitable: this.suitable,
          viewed: Date.now(),
        });
    },
  },
  components: {
    Description,
  },
};
</script>

<style scoped>
.search-next {
  background: #6fa2b4;
  padding: 20px;
  margin-bottom: 20px;
}
.search-next .search-button {
  padding: 0 15px;
}
.search-next .input-group {
  height: 45px;
}
.scan-barcode {
  width: 75px;
  border: none;
  margin: 0 5px;
  height: 45px;
}
.icon-barcode::before {
  font-size: 35px;
}

.product .img-fluid {
  width: 100%;
  height: inherit;
  object-fit: cover;
  -webkit-box-shadow: 0 8px 6px -6px #ccc;
  -moz-box-shadow: 0 8px 6px -6px #ccc;
  box-shadow: 0 8px 6px -6px #ccc;
}
.search-next .icon-barcode::before {
  vertical-align: middle;
}

/* sm */

@media (min-width: 500px) {
  .product .img-fluid {
    height: 70vh;
  }
}

/* lg */

@media (min-width: 1200px) {
  .product .img-fluid {
    height: inherit;
  }
}

.suitable,
.unsuitable {
  text-align: center;
}

.suitable div,
.suitable span {
  color: #54bb5e;
}

.unsuitable div,
.unsuitable span,
b {
  color: #ff3d00;
}

.suitable span,
.unsuitable span {
  font-size: 50px;
}

.suitable div,
.unsuitable div,
b {
  font-size: 25px;
}

.suitable .icon-heart {
  font-size: 17px;
  color: gray;
  margin-left: 5px;
}

.suitable p {
  margin-top: 5px;
  color: rgb(112, 112, 112);
  text-decoration: underline;
  cursor: pointer;
  display: inline;
}

.contains {
  text-align: left;
}

.contains p {
  margin-bottom: 0;
}

.contains span {
  font-size: 17px;
  padding: 5px;
  background: rgba(255, 0, 0, 0.3);
  color: #595959;
  margin: 5px;
  cursor: pointer;
}

.product label {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 0;
}

img {
  height: 100%;
  object-fit: cover;
}
</style>
