<template>
  <div class="col-12 col-md-6 col-lg-4">
    <!-- justify-content-between">-->
    <div class="card">
      <img src="@/assets/architect.jpeg" class="card-img-top" alt="..." />
      <div class="card-img-overlay">
        <span class="icon-heart"></span>
      </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style>
.card {
  margin: 10px 0;
}
.card-img-top {
  height: 350px;
}
.card span.icon-heart {
  font-size: 22px;
  background: white;
  opacity: 0.6;
  padding: 0 6px;

  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>
