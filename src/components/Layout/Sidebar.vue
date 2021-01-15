<template>
  <header class="sticky-top">  
    <div class="sidebar" >
      <div class="backdrop" @click.self="closeSidebar" v-if="openSidebar"></div>         
      <transition name="slide-l">            
        <div class="menu-items" v-if="openSidebar">
          <router-link to="/" tag="button" class="side-btn">
              <div class="link-container" @click.self="closeSidebar">
                  <span class="icon-home"></span>
                  Home
              </div>
          </router-link>
          <router-link to="/choose_ingredients" tag="button" class="side-btn">
              <div class="link-container" @click.self="closeSidebar">
                  <span class="icon-list"></span>
                  Ingredients list
              </div>
          </router-link>
          <router-link to="#" tag="button" class="side-btn">
              <div class="link-container" @click.self="closeSidebar">
                  <span class="icon-heart"></span>
                  Favourites
              </div>
          </router-link>
          <router-link to="#" tag="button" class="side-btn">
              <div class="link-container" @click.self="closeSidebar"> 
                  <span class="icon-request"></span>
                  Your requests
              </div>
          </router-link>
          <h2 class="line" style="width: 100%"></h2>
          <router-link to="#" tag="button" class="side-btn">
              <div class="link-container" @click.self="closeSidebar">
                  Contact Us
              </div>
          </router-link>
          <br>
          <router-link to="#" tag="button" class="side-btn">
              <div class="link-container" @click.self="closeSidebar">
                  FAQ
              </div>
          </router-link>
          <br>
          <router-link to="#" tag="button" class="side-btn">
              <div class="link-container" @click.self="closeSidebar">
                  Terms of use
              </div>
          </router-link>
          <br>
          <router-link to="#" tag="button" class="side-btn">
              <div class="link-container" @click.self="closeSidebar">
                Privacy Policy
              </div>
          </router-link>
          <h2 class="line" style="width: 100%"></h2>
          <router-link to="#" tag="button" class="side-btn">
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
    },
  }
};
</script>

<style lang="scss">
.slide-l-enter-active,
.slide-l-leave-active {
  transition: transform 0.4s ease;
}

.slide-l-enter,
.slide-l-leave-to {
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

.side-btn:focus { outline: none; }

.side-btn:hover,
.link-container:hover {
  color: #232323;
}

.router-link-exact-active {
  background-color: #eeeeee;
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