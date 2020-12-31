<template>
  <div>
    <nav class="navbar navbar-expand-sm">
      <div class="container-sm">
        <div class="col-sm">
          <button>
            <span class="icon-menu"></span>
          </button>
        </div>
        <div class="col-sm">
          <router-link to="/about">
            <span class="icon-user"></span
          ></router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
};
</script>
