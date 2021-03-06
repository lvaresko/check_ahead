<template>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card" @click="product">
      <img :src="info.url" class="card-img-top" alt="..." />
      <div class="card-img-overlay">
        <span
          v-if="site == 'home'"
          class="transform"
          :class="favorite ? 'icon-heart-2' : 'icon-heart'"
          @click.stop.prevent="toggleFavorites"
        ></span>
        <span v-else>
          <span
            class="icon-trashcan transform"
            @click.stop.prevent="removeFromFavorites"
          ></span>
          <div class="status">
            <span v-if="info.suitable" style="color: #54bb5e;"
              >SUITABLE FOR YOU</span
            >
            <span v-else style="color: #ff3d00;">NOT SUITABLE FOR YOU</span>
          </div>
        </span>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ info.brand }}</h5>
        <p class="card-text" @mouseover="moveText" @mouseleave="returnText">
          {{ info.name }}
        </p>
        <div class="category_brand">
          <span :class="classIcon"></span>
          <span> {{ info.category }}</span> | <span>{{ info.type }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { db } from "@/firebase.js";

export default {
  name: "Card",
  props: ["site", "info"],
  data() {
    return {
      favorite: null,
      currentUser: localStorage.getItem("user"),
    };
  },
  methods: {
    product() {
      router.push({ name: "Product", params: { product_id: this.info.id } });
    },
    async toggleFavorites() {
      this.favorite = !this.favorite;
      if (this.favorite) {
        await db
          .collection("users")
          .doc(this.currentUser)
          .collection("favorites")
          .doc(this.info.id)
          .set({
            favorited: Date.now(),
          });
        this.checkSuitability();
      } else this.removeFromFavorites();
    },
    async removeFromFavorites() {
      if (this.site == "favorites") this.$emit("delete", this.info.id);
      await db
        .collection("users")
        .doc(this.currentUser)
        .collection("favorites")
        .doc(this.info.id)
        .delete();
    },
    async checkSuitability() {
      // 1. get users ingredients list
      let results = await db
        .collection("users")
        .doc(this.currentUser)
        .get();

      const data = results.data();
      let user_list = [];
      user_list.push(...data.selectedIngredients, ...data.customIngredients);

      // 2. get product ingredients
      results = await db
        .collection("products")
        .doc(this.info.id)
        .get();

      const data2 = results.data();
      let product_list = data2.ingredients;

      // 3. check if product contains smth from ingredients list
      let suitable = null;
      let list = user_list.filter((key) => product_list.includes(key));
      if (list.length) {
        suitable = false;
      } else suitable = true;

      // 4. add to db
      await db
        .collection("users")
        .doc(this.currentUser)
        .collection("products")
        .doc(this.info.id)
        .set({
          suitable: suitable,
        });
    },
    /*async isSuitable() {
      let results = await db
        .collection("users")
        .doc(store.currentUser)
        .collection("products")
        .doc(this.info.id)
        .get();
      if (results.exists) {
        let data = results.data();
        this.suitable = data.suitable;
      } //else this.favorite = false;
    },*/
    async isFav() {
      let favorited = await db
        .collection("users")
        .doc(this.currentUser)
        .collection("favorites")
        .doc(this.info.id)
        .get();
      if (favorited.exists) {
        this.favorite = true;
      } else this.favorite = false;
    },
    moveText(e) {
      const x = e.target;
      const text = x.innerHTML.length; //ili treba pronac sirinu u pixelima (nemoguce bas)
      const width = x.clientWidth;
      const total = width - text * 11.7;
      x.style.transition = "2s ease-in-out";
      if (total < 0) x.style.marginLeft = total + "px";
    },
    returnText(e) {
      const x = e.target;
      x.style.transition = "0s";
      x.style.marginLeft = "0px";
    },
  },
  computed: {
    classIcon() {
      const icon = this.info.category.toLowerCase();
      return "icon-" + icon;
    },
  },
  async mounted() {
    //this.isSuitable();
    this.isFav();
  },
};
</script>

<style scoped>
.card {
  margin: 10px 0;
  cursor: pointer;
}
.card-img-top {
  width: 100%;
  height: 350px;
  object-fit: cover;
}
.card:hover .card-text {
  text-decoration: underline;
}

.card span.icon-trashcan::before,
.card span.icon-heart::before,
.card span.icon-heart-2::before {
  font-size: 24px;
  background: rgba(255, 255, 255, 0.5);
  padding: 5px 5px 3px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}

.card span.icon-heart-2::before {
  color: rgba(255, 0, 43, 0.685);
}

.transform {
  float: right;
  transition-property: transform;
  transition-duration: 0.6s;
}

.transform:active {
  transform: scale(0.2);
}
.card-img-overlay {
  height: 350px;
}
.card-body {
  padding-bottom: 5px;
  height: 135px;
  overflow: hidden;
}

.card-title {
  font-size: 14px;
  font-weight: 800;
  margin-bottom: 0px;
  text-transform: uppercase;
}

.card-text {
  margin-bottom: 0;
  margin-top: 8px;
  margin-left: 0em;
  height: 35px;
  font-size: 25px;
  overflow: hidden;
  white-space: nowrap;

  text-overflow: ellipsis;
}

.category_brand {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 6px;
}

.category_brand span {
  font-size: 17px;
}

.card-img-overlay:hover {
  color: red;
}

.status {
  text-align: center;
  margin-top: 280px;
}

.status span {
  font-size: 20px;
  font-weight: bolder;
  background: rgba(255, 255, 255, 0.466);
  padding: 7px;
}
</style>
