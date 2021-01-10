<template>
  <header class="sticky-top">
    <div class="sidebar" v-if="openSidebar">
      <div class="backdrop" @click.self="closeSidebar">
      <div class="menu-items">
        <router-link to="/" active-class="active" tag="button" class="side-btn">
            <div class="link-container">
                <span class="icon-home"></span>
                Home
            </div>
        </router-link>
        <router-link to="#" active-class="active" tag="button" class="side-btn">
            <div class="link-container">
                <span class="icon-list"></span>
                Ingredients list
            </div>
        </router-link>
        <router-link to="#" active-class="active" tag="button" class="side-btn">
            <div class="link-container">
                <span class="icon-heart"></span>
                Favourites
            </div>
        </router-link>
        <router-link to="#" active-class="active" tag="button" class="side-btn">
            <div class="link-container">
                <span class="icon-request"></span>
                Your requests
            </div>
        </router-link>
        <h2 class="line" style="width: 100%"></h2>
        <router-link to="#" active-class="active" exact tag="button" class="side-btn">
            <div class="link-container">
                Contact Us
            </div>
        </router-link>
        <br>
        <router-link to="#" active-class="active" exact tag="button" class="side-btn">
            <div class="link-container">
                FAQ
            </div>
        </router-link>
        <br>
        <router-link to="#" active-class="active" exact tag="button" class="side-btn">
            <div class="link-container">
                Terms of use
            </div>
        </router-link>
        <br>
        <router-link to="#" active-class="active" exact tag="button" class="side-btn">
            <div class="link-container">
               Privacy Policy
            </div>
        </router-link>
        <h2 class="line" style="width: 100%"></h2>
        <router-link to="#" active-class="active" exact tag="button" class="side-btn">
            <div class="link-container">
               <span class="icon-exit"></span>
               Sign out
            </div>
        </router-link>
      </div>  
      </div>
    </div> 
  </header>
</template>

<script>
export default {
  name: "Sidebar",
  props: [
    'openSidebar'
  ],
  methods: {
    closeSidebar() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss">
.sidebar {
    width: 100%;
    max-width: 250px;
    height: calc(100vh - 50px);
    background-color: white;
    position: fixed;
    padding: 0;
}

.menu-items {
  width: 40vw;
  height: 100%;
  background: white;
}

.side-btn {
  width: 100%;
  text-align: left;
  border: none;
  cursor: pointer;
  background-color: white;
  padding-left: 10px;
}

.side-btn:focus {
  outline: none;
  background-color: #eeeeee;
}

.side-btn:hover {
    background-color: #eeeeee;
}

.side-btn .link-container:hover{
  color: #232323;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
</style>