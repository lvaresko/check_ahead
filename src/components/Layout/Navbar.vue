<template>
  <div>
    <nav class="navbar sticky-top navbar-expand-sm align-middle">
      <div class="container-fluid">
        <button type="button" class="btn" @click="$emit('tooglenav')">
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
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
