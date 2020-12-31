<template>
  <div>
    <sui-menu attached="top" :widths="3" secondary>
      <sui-menu-item icon="bars" is="sui-button" size="massive">
      </sui-menu-item>
      <sui-menu-item is="sui-button">
        <img is="sui-image" size="medium" src="../../assets/logo.png" />
      </sui-menu-item>
      <sui-menu-item icon="user" is="sui-button" size="massive">
      </sui-menu-item>
    </sui-menu>

    <nav class="navbar navbar-expand-sm">
      <div class="container-sm">
        <div class="col-sm">
          <i src="../../assets/icons/menu.svg"></i>
        </div>
        <a class="navbar-brand" href="#">Navbar</a>
      </div>
    </nav>
    <span class="icon-perfume" style="font-size: 50px"></span>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  data() {
    return { src: "../../assets/logo.png" };
  },
};
</script>

