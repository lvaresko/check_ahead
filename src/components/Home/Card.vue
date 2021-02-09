<template>
  <div class="col-12 col-md-6 col-lg-4">
    <!-- justify-content-between">-->
    <div class="card" @click="product">
      <img src="@/assets/architect.jpeg" class="card-img-top" alt="..." />
      <div class="card-img-overlay">
        <span
          v-if="site == 'home'"
          class="transform"
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
  background: rgba(255, 255, 255, 0.5);
  padding: 5px 5px 3px 4.5px;
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
</style>
