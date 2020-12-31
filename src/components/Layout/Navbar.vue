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

    <sui-input size="massive" placeholder="Search big..." icon="search" />

    <div></div>
    <sui-button>Click Here</sui-button>
    <!-- semantic vue -->
    <sui-button content="Content as a prop" />
    <div is="sui-button">This is a div</div>
    <div class="ui input">
      <input type="text" placeholder="Search..." />
    </div>
    <button class="ui button">Follow</button>
    <!-- semantic original-->

    <nav class="navbar navbar-expand-sm">
      <div class="container-sm">
        <div class="col-sm">
          <button>
            <span class="menu"></span>
          </button>
        </div>
      </div>
    </nav>
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

<style>
input.ui.input {
  border: 7 solid black !important;
}
sui-menu-item.sui-button {
  color: red !important;
}
</style>
