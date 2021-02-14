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
        <div class="status">
          <span v-if="this.suitable" style="color: #54bb5e;"
            >SUITABLE FOR YOU</span
          >
          <span v-else style="color: #ff3d00;">NOT SUITABLE FOR YOU</span>
        </div>
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

export default {
  name: "Card",
  props: ["site", "info"],
  data() {
    return {
      favorite: false,
      suitable: false,
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
      console.log(icon);
      return "icon-" + icon;
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
