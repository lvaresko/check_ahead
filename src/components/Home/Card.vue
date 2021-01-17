<template>
  <div class="col-12 col-md-6 col-lg-3">
    <!-- justify-content-between">-->
    <div class="card">
      <img src="@/assets/logo.png" class="card-img-top" alt="..." />
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
/*.column {
  margin: 10px;
}
.card {
  width: 310px;
}
.card-img-top {
  width: 100%;
  height: 500px;
}*/
.card-img-top {
  height: 350px;
}
.card span.icon-heart {
  background: white;
  opacity: 0.7;
  padding: 0 8px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
/*
@media (max-width: 767px) {
  .column {
    margin: auto;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .column {
    margin: 10px 0;
  }
}*/
</style>
