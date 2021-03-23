<template>
  <header class="sticky-top">
    <nav class="navbar navbar-expand-sm align-middle">
      <div class="container-fluid">
        <button type="button" class="btn shadow-none" @click="$emit('open')">
          <span class="icon-menu"></span>
        </button>

        <router-link to="/">
          <img
            id="brand_img"
            src="@/assets/images/logo.png"
            alt="Check Ahead"
            loading="lazy"
          />
        </router-link>

        <router-link
          :to="{ name: 'AccountOverview', params: { id: this.currentUser } }"
          style="text-decoration: none"
        >
          <span class="icon-user"></span>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import store from "@/store";

export default {
  name: "Navbar",
  data() {
    return {
      currentUser: localStorage.getItem("user"),
    };
  },
};
</script>

<style scoped>
.navbar {
  background-color: white;
  width: 100%;
  z-index: -1;
  -webkit-box-shadow: 0 8px 6px -9px rgba(100, 100, 100, 0.397);
  -moz-box-shadow: 0 8px 6px -9px rgb(100, 100, 100, 0.397);
  box-shadow: 0 8px 6px -9px rgb(100, 100, 100, 0.397);
}

.btn {
  padding: 0;
}

/* xs */

img#brand_img {
  width: 150px;
  height: auto;
}

/* sm */

@media (min-width: 768px) {
  img#brand_img {
    width: 200px;
  }
}

/* md */

@media (min-width: 992px) {
  img#brand_img {
    width: 250px;
  }
}

/* lg */

@media (min-width: 1200px) {
  img#brand_img {
    width: 300px;
  }
}
</style>
