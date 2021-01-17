<template>
  <div class="col">
    <div class="card mt-3 mb-3">
      <img
        src="@/assets/architect.jpeg"
        class="card-img-top img-fluid"
        alt="..."
      />
      <div class="card-img-overlay">
        <span class="icon-heart"></span>
      </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped>
.card-img-top {
  width: 100%;
  height: 40vh;
  object-fit: cover;
}

span.icon-heart {
  background: white;
  opacity: 0.7;
  padding: 0 8px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>
