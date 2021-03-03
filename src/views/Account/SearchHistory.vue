<template>
  <div class="account">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4" id="nav">
          <AccountSidebar />
        </div>
        <div class="col-12 col-md-8 mt-6 text-center right-side ">
          <div class="recently-viewed">
            <h2 class="mb-4">Recently viewed items:</h2>
            <div v-for="(product, index) in products" :key="product.id">
              <div v-if="index < historyLimit" class="row text-left ml-0" @click="toProduct(product)">
                <div class="col-2 p-0">
                  <img
                    :src="product.url"
                    alt="product"
                  />
                </div>
                <div class="col-8">{{ product.name }}</div>
                <div class="col-2 p-0">
                  <span  v-if="product.suitable" class="icon-check"></span>
                  <span  v-else class="icon-cancel"></span>
                </div>
              </div>
            </div> 
            <div v-if="totalHistory > historyLimit" class="text-left">
              <a href="#" @click.prevent="historyLimit += 3" class="load">Load more...</a>
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
      historyLimit: 3,
      totalHistory: 0,
    };
  },
  async mounted() {
    await this.getHistory();
  },
  updated() {
    this.totalHistory = this.products.length;
    console.log(this.products.length);
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
  cursor: pointer;
}

.recently-viewed img {
  height: 55px;
  width: 100%;
  object-fit: cover;
  object-position: 100% 40%;
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

.recently-viewed .load:hover {
  color: #232323;
  text-decoration: none;
  cursor: pointer;
}
</style>
