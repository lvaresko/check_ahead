<template>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card" @click="product">
      <img :src="info.url" class="card-img-top" alt="..." />
      <div class="card-img-overlay">
        <span
          v-if="site == 'home'"
          class="transform"
          :class="favorite ? 'icon-heart-2' : 'icon-heart'"
          @click.stop.prevent="toggleFav"
        ></span>
        <span
          v-else
          class="icon-trashcan transform"
          @click.stop.prevent="deleteProduct"
        ></span>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ info.brand }}</h5>
        <p class="card-text">
          {{ info.name }}
        </p>
        <div class="m-0">
          <span class="icon-shampoo"></span>
          <span>{{ info.category }}</span> | <span>{{ info.type }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Card",
  props: ["site", "info"],
  data() {
    return {
      favorite: false,
    };
  },
  methods: {
    product() {
      console.log("PRODUCT");
      router.push({ name: "Product", params: { product_id: this.info.id } });
    },
    toggleFav() {
      //ovo ce trebat s bazom sredivat i update-at
      this.favorite = !this.favorite;
    },
    deleteProduct() {
      console.log("OBRISI");
    },
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

.card-body {
  margin-bottom: 5px;
  height: 140px;
}

.card-title {
  font-size: 14px;
  font-weight: 800;
  margin-bottom: 0px;
  text-transform: uppercase;
}

.card-text {
  margin-bottom: 0;
  height: 52px;
  font-size: larger;
}
</style>
