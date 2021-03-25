<template>
  <div class="container text-center">
    <img
      class="loading"
      v-if="loading"
      :src="require('@/assets/loading.gif')"
    />
    <div v-else>
      <h1 class="favorite m-6">Favorites list</h1>
      <div v-if="!this.products.length">
        <p>
          You don't have any products saved to your favorites list. <br />
          Click the <span class="icon-heart"></span> icon to add one!
        </p>
      </div>
      <div
        v-else
        class="row text-left"
        data-masonry='{"percentPosition": true }'
      >
        <Card
          v-for="product in products"
          :key="product.id"
          :info="product"
          @delete="handleDelete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Home/Card.vue";
import { db } from "@/firebase.js";

export default {
  name: "Favorites",
  data() {
    return {
      currentUser: localStorage.getItem("user"),
      products: [],
      loading: false,
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
      this.loading = true;

      let results = await db
        .collection("users")
        .doc(this.currentUser)
        .collection("favorites")
        .orderBy("favorited", "desc")
        .get();

      for (let doc of results.docs) {
        const product = await db
          .collection("products")
          .doc(doc.id)
          .get();

        const result = await db
          .collection("users")
          .doc(this.currentUser)
          .collection("products")
          .doc(doc.id)
          .get();

        let data = product.data();
        let data_suitable = result.data();

        this.products.push({
          id: doc.id,
          brand: data.brand,
          name: data.name,
          category: data.category,
          type: data.type,
          ingredients: data.ingredients,
          url: data.url,
          suitable: data_suitable.suitable,
        });
      }
      this.loading = false;
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

.icon-heart {
  font-size: 25px;
}
</style>
