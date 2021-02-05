<template>
  <div class="container">
    <div
      class="row justify-content-between"
      data-masonry='{"percentPosition": true }'
    >
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>

<script>
import Card from "../components/Home/Card.vue";
export default {
  name: "Favorites",
  data() {
    return {};
  },
  components: {
    Card,
  },
};
</script>

<style></style>
