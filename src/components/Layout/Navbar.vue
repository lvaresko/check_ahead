<template>
  <div>
    <sui-grid :columns="3">
      <sui-grid-row stretched>
        <sui-grid-column>
          <sui-segment> </sui-segment>
        </sui-grid-column>
        <sui-grid-column>
          <sui-segment>
            <img is="sui-image" size="medium" src="../../assets/logo.png" />
          </sui-segment>
        </sui-grid-column>
        <sui-grid-column>
          <sui-segment>1</sui-segment>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>

    <h1>ILI</h1>

    <div>
      <sui-menu attached="top" secondary>
        <sui-button item icon="bars" size="massive" basic />

        <sui-menu-menu position="right">
          <sui-menu-item right>
            <sui-button item icon="user" size="massive" basic />
          </sui-menu-item>
        </sui-menu-menu>
      </sui-menu>

      <sui-segment attached="bottom">
        <docs-wireframe name="paragraph" />
      </sui-segment>
    </div>

    <h1>ILI</h1>

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
    <sui-button content="Content as a prop" />
    <div is="sui-button">This is a div</div>
    <sui-button active>Hero</sui-button>
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
