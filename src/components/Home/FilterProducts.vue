<template>
  <header class="sticky-top">
    <div>
      <transition name="fade">
        <div class="filter-overlay" @click.self="closeFilter" v-if="openFilter"></div>
      </transition>
      <transition name="slide-r">
        <div class="filter text-center" v-if="openFilter">
          <div class="filter-close text-right">
            <span class="icon-cancel-1" @click.self="closeFilter"></span>
          </div>
          <div class="filter-title">
            <h1><i class="icon-filter"></i> Filter</h1>
          </div>
          <div class="filter-content text-left">
            <label href="#proba" data-toggle="collapse">
              Product category
            </label>
            <div class="collapse" id="proba">aa</div>
            <p data-toggle="collapse">Product type</p>
            <p data-toggle="collapse">Brand</p>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  name: "FilterProducts",
  props: ["openFilter"],
  methods: {
    closeFilter() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.filter {
  width: 50vmin;
  height: 100%;
  position: fixed;
  padding: 0;
  background: white;
  top: 0;
  right: 0;
  z-index: 20000;
}

.filter-close {
  margin: 15px 15px 0 0;
}

.icon-cancel-1::before {
  font-size: 20px;
  vertical-align: top;
}

.filter-title {
  display: inline-block;
  margin-top: 30px;
}

.icon-filter::before {
  font-size: 45px;
  vertical-align: top;
}

.filter-content {
  margin: 40px;
}


.filter-overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
</style>
