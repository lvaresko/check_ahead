<template>
  <div class="col-12 col-md-6 col-lg-4">
    <!-- justify-content-between">-->
    <div class="card" @click="product">
      <img src="@/assets/architect.jpeg" class="card-img-top" alt="..." />
      <div class="card-img-overlay">
        <span
          v-if="site == 'home'"
          :class="favorite ? 'icon-heart-2' : 'icon-heart'"
          @click.stop.prevent="toggleFav"
        ></span>
        <span v-else class="icon-trashcan"></span>
      </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Card",
  props: ["site"],
  data() {
    return {
      favorite: false,
    };
  },
  methods: {
    product() {
      console.log("PRODUCT");
      router.push({ name: "Product" });
    },
    toggleFav() {
      //ovo ce trebat s bazom sredivat i update-at
      this.favorite = !this.favorite;
    },
  },
};
</script>

<style>
.card {
  margin: 10px 0;
  cursor: pointer;
}
.card-img-top {
  height: 350px;
}
.card:hover .card-title {
  text-decoration: underline;
}

.card span.icon-trashcan::before,
.card span.icon-heart::before,
.card span.icon-heart-2::before {
  font-size: 24px;
  background: white;
  opacity: 0.6;
  padding: 4.5px 5px;
  border-radius: 70%;
  cursor: pointer;
  float: right;
  display: block;
}

.card span.icon-heart-2 {
  color: rgb(255, 0, 55);
}
</style>
