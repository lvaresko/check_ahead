<template>
  <div class="admin">
    <Banner v-if="this.updated" @toggle="toggleBanner(false)" />

    <div class="nav">
      <router-link to="/admin/handleRequests">Handle Requests</router-link>
      <router-link to="/admin/addProduct">Add Product to Database</router-link>
    </div>

    <router-view :key="$route.fullPath" id="app_content" />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";

export default {
  name: "Admin",
  data() {
    return { updated: false };
  },
  components: { Banner },
  methods: {
    toggleBanner(value) {
      this.updated = value;
    },
  },
};
</script>

<style></style>
