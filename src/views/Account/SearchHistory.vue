<template>
  <div class="account">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4" id="nav">
          <AccountSidebar />
        </div>
        <div class="col-12 col-md-8 mt-6 text-center right-side ">
          <div class="recently-viewed">
            <h2 class="mb-5">Recently viewed items:</h2>
            <div v-for="product in products" :key="product.id">
              <div class="row text-left" @click="toProduct(product)">
                <div class="col-2 p-0">
                  <img
                    :src="product.url"
                    alt="product"
                    class="img-fluid"
                  />
                </div>
                <div class="col-8 ">{{ product.name }}</div>
                <div class="col-2 ">
                  <div v-if="product.suitable">
                    <span class="icon-check"></span>
                  </div>
                  <div v-else>
                    <span class="icon-cancel"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountSidebar from "@/components/Account/AccountSidebar.vue";
import { db } from "@/firebase.js";
import store from "@/store";
import router from "@/router";

export default {
  name: "SearchHistory",
  components: {
    AccountSidebar,
  },
  data() {
    return {
      user_name: "Amy",
      email: "",
      password: "",
      passwordRepeat: "",
      products: [],
    };
  },
  async mounted() {
    await this.getHistory();
  },
  methods: {
    async getHistory() {
      let results = await db
        .collection("users")
        .doc(store.currentUser)
        .collection("products")
        .orderBy("viewed", "desc")
        .get();

      results.forEach(async (doc) => {
        const product = await db
          .collection("products")
          .doc(doc.id)
          .get();

        const result = await db
          .collection("users")
          .doc(store.currentUser)
          .collection("products")
          .doc(doc.id)
          .get();

        let data = product.data();
        let data_suitable = result.data();

        this.products.push({
          id: doc.id,
          name: data.name,
          url: data.url,
          suitable: data_suitable.suitable,
        });
      });
    },
    toProduct(x) {
      router.push({ name: "Product", params: { product_id: x.id } });
    },
  }
};
</script>

<style scoped>
.recently-viewed label {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 0;
}

.recently-viewed .row {
  border-bottom: 1px solid lightgray;
}
.recently-viewed img {
  height: 45px;
  max-width: 150px;
  width: 100%;
  object-fit: cover;
}

.recently-viewed div {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
  font-weight: unset;
}

.recently-viewed .col-8 {
  align-items: center;
}

.recently-viewed .icon-check {
  justify-content: flex-end;
  color: #54bb5e;
}

.recently-viewed .icon-cancel {
  justify-content: flex-end;
  color: #ff3d00;
}
</style>
