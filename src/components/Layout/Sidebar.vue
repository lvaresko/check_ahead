<template>
    <div class="sidebar col-sm-2 sticky-top" v-if="open">
      <ul >
          <li>
            <router-link to="/" style="text-decoration: none">
                <span class="icon-home"></span>
                Home
            </router-link>
          </li>
          <li>
            <router-link to="#" style="text-decoration: none">
                <span class="icon-list"></span>
                Ingredients list
            </router-link>
          </li>
          <li>
            <router-link to="#" style="text-decoration: none">
                <span class="icon-heart"></span>
                Favourites
            </router-link>
          </li>
          <li>
            <router-link to="#" style="text-decoration: none">
                <span class="icon-request"></span>
                Your requests
            </router-link>
            <h2 class="line" style="width: 100%"></h2>
          </li>
          <li>
            <router-link to="#" style="text-decoration: none">Contact Us</router-link>
          </li>
          <li>
            <router-link to="#" style="text-decoration: none">FAQ</router-link>
          </li>
          <li>
            <router-link to="#" style="text-decoration: none">Terms of Use</router-link>
          </li>
          <li>
            <router-link to="#" style="text-decoration: none">Contact Us</router-link>
          </li>
          <li>
            <router-link to="#" style="text-decoration: none">Privacy Policy</router-link>
            <h2 class="line" style="width: 100%"></h2>
          </li>
          <li>
            <router-link to="#" style="text-decoration: none">
                <span class="icon-exit"></span>
                Sign out
            </router-link>
          </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: [
    'open'
  ],
};
</script>