<template>
  <div class="container text-center">
    <h1 class="favorite m-6">Favorites list</h1>
    <img
      class="loading"
      v-if="loading"
      :src="require('@/assets/loading.gif')"
    />
    <div v-if="!this.products.length && !loading">
      <h3>
        You don't have any products saved to your favorites list
      </h3>
      <h5>Click the <span class="icon-heart"></span> icon to add one!</h5>
    </div>
    <div v-else class="row text-left" data-masonry='{"percentPosition": true }'>
      <Card
        v-for="product in products"
        :key="product.id"
        :site="site"
        :info="product"
        @delete="handleDelete"
      />
    </div>
  </div>
</template>

<script>
import Card from "../components/Home/Card.vue";
import { db } from "@/firebase.js";
import store from "@/store";

export default {
  name: "Favorites",
  data() {
    return {
      products: [],
      loading: true,
      site: "favorites",
    };
  },
  components: {
    Card,
  },
  async mounted() {
    await this.getFavorites();
  },
  methods: {
    async getFavorites() {
      let results = await db
        .collection("users")
        .doc(store.currentUser)
        .collection("favorites")
        .orderBy("favorited", "desc")
        .get();

      if (!results.exists) this.loading = false;

      results.forEach(async (doc) => {
        const product = await db
          .collection("products")
          .doc(doc.id)
          .get();

        let data = product.data();
        this.products.push({
          id: doc.id,
          brand: data.brand,
          name: data.name,
          category: data.category,
          type: data.type,
          ingredients: data.ingredients,
          url: data.url,
        });
        this.loading = false;
      });
    },
    handleDelete(id) {
      this.products = this.products.filter((product) => {
        return product.id !== id;
      });
    },
  },
};
</script>

<style scoped>
.favorite {
  margin-top: 30px;
}
</style>
