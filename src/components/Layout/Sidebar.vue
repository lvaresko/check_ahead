<template>
  <header class="sticky-top">  
    <div class="sidebar" >
      <div class="backdrop" @click.self="closeSidebar" v-if="openSidebar"></div>         
      <transition name="slide">            
        <div class="menu-items" v-if="openSidebar">
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
      </transition>        
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
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 300ms ease-in 0s
}

.menu-items {
  width: 50vmin;
  height: 100%;
  position: fixed;
  padding: 0;
  background: white;
  top: 0;
  z-index: 999;
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
  cursor: pointer;
}
</style>