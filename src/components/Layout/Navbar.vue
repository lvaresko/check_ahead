<template>
  <header class="sticky-top">
    <nav class="navbar navbar-expand-sm align-middle">
      <div class="container-fluid">
        <button type="button" class="btn shadow-none" @click="$emit('open')">
          <span class="icon-menu"></span>
        </button>

        <router-link to="/">
          <img
            id="brand"
            src="@/assets/logo.png"
            alt="Check Ahead"
            loading="lazy"
          />
        </router-link>

        <router-link to="/profile" style="text-decoration: none">
          <span class="icon-user"></span>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.navbar {
  background-color: white;
  width: 100%;
  z-index: -1;
}

.btn {
  padding: 0;
}

/* xs */

img#brand {
  width: 150px;
  height: auto;
}

/* sm */

@media (min-width: 768px) {
  img#brand {
    width: 200px;
  }
}

/* md */

@media (min-width: 992px) {
  img#brand {
    width: 250px;
  }
}

/* lg */

@media (min-width: 1200px) {
  img#brand {
    width: 300px;
  }
}
</style>
