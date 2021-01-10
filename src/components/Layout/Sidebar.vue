<template>

  <header class="sticky-top">
    <div class="sidebar col-sm-2" v-if="open">
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
  </header>

</template>

<script>
export default {
  name: "Sidebar",
  props: [
    'open'
  ],
};
</script>

<style lang="scss" scoped>
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
}

.side-btn:hover {
    background-color: #eeeeee;
}

.side-btn .active {
  background-color: #eeeeee;
}

.side-btn .link-container:hover{
  color: #232323;
}



</style>