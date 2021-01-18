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
            <h3><i class="icon-filter"></i> Filter</h3>
          </div>
          <div class="filter-list custom-control custom-checkbox text-left">
            <div class="filter-item">
              <label href="#category" data-toggle="collapse" class="custom-control-label">
                <span class="icon-caret-right" style="font-size: 20px"></span>
                Category
              </label>
              <h2 class="line1" style="width: 90%"></h2>

              <!-- dropdown -->
              <div v-for="category in product_categories" :key="category">
                <div class="dropdown-item collapse" id="category" style="margin-left: 15px">
                  <input type="checkbox" class="custom-control-input" id="customCheck1" />
                  <label class="custom-control-label" for="customCheck1">
                    {{ category }}
                  </label>
                  <h2 class="line2" style="width: 100%"></h2>
                </div>
              </div>
            </div>
            <div class="filter-item">
              <label href="#type" data-toggle="collapse" class="custom-control-label">
                <span class="icon-caret-right" style="font-size: 20px"></span>
                Type
              </label>
              <h2 class="line1" style="width: 90%"></h2>

              <!-- dropdown -->
              <div v-for="type in product_types" :key="type">
                <div class="dropdown-item collapse" id="type" style="margin-left: 15px">
                  <input type="checkbox" class="custom-control-input" id="customCheck1" />
                  <label class="custom-control-label" for="customCheck1">
                    {{ type }}
                  </label>
                  <h2 class="line2" style="width: 100%"></h2>
                </div>
              </div>
            </div>
            <div class="filter-item">
              <label href="#brand" data-toggle="collapse" class="custom-control-label">
                <span class="icon-caret-right" style="font-size: 20px"></span>
                Brand
              </label>
              <h2 class="line1" style="width: 90%"></h2>

              <!-- dropdown -->
              <div v-for="brand in brands" :key="brand">
                <div class="dropdown-item collapse" id="brand" style="margin-left: 15px">
                  <input type="checkbox" class="custom-control-input" id="customCheck1" />
                  <label class="custom-control-label" for="customCheck1">
                    {{ brand }}
                  </label>
                  <h2 class="line2" style="width: 100%"></h2>
                </div>
              </div>
            </div>
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
  data() {
    return {
      product_categories: ["Makeup","Toiletry","Skincare"],
      product_types: ["Cleansing gel", "Lipstick", "Hair Shampoo"],
      brands: ["Skintegra", "Lush", "Trixie Cosmetics"],
    }
  },
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
  margin-top: 25px;
}

.icon-filter::before {
  font-size: 35px;
  vertical-align: top;
}

.icon-caret-right::before {
  vertical-align: baseline;
}

.filter-item {
  padding: 0 15px 0;
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
