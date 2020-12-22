<template>
  <div>
    <b-nav>
      <b-nav-item align="left">wohooo</b-nav-item>
      <b-nav-item align="center">wohooo</b-nav-item>
      <b-nav-item align="right">woho</b-nav-item>
    </b-nav>

    <b-navbar variant="faded" type="light">
      <b-navbar-toggle
        v-b-toggle.sidebar-backdrop
        target="nav-collapse"
        style="border: none;"
        >blaa</b-navbar-toggle
      >

      <b-navbar-nav>
        <img alt="Logo" src="@/assets/logo.png" style="width: 30%;" href="#" />
      </b-navbar-nav>

      <b-navbar-nav>
        <b-icon icon="person-fill"></b-icon>
      </b-navbar-nav>
    </b-navbar>
    <b-sidebar
      id="sidebar-backdrop"
      title="Sidebar with backdrop"
      :backdrop-variant="variant"
      backdrop
      shadow
    >
      <div class="px-3 py-2">
        <b-form-group label="Backdrop variant" label-for="backdrop-variant">
          <b-form-select
            id="backdrop-variant"
            v-model="variant"
            :options="variants"
          ></b-form-select>
        </b-form-group>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
};
</script>

<style>
.b-navbar-nav > {
  float: none;
  text-align: center;
  display: inline-block;
}
</style>
