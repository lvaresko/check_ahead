<template>
  <form>
    <header class="sticky-top">
      <div>
        <transition name="fade">
          <div
            class="filter-overlay"
            @click.self="closeFilter"
            v-if="openFilter"
          ></div>
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
                <label>
                  <span
                    href="#category"
                    data-toggle="collapse"
                    class="icon-caret-right collapsed arrow"
                    style="font-size: 20px"
                    @click="rotate"
                  ></span>
                  Category
                </label>
                <h2 class="line1" style="width: 90%"></h2>

                <!-- dropdown -->
                <div
                  class="collapse"
                  id="category"
                  v-for="category in product_categories"
                  :key="category"
                >
                  <div class="dropdown-item">
                    <label>
                      <input
                        type="checkbox"
                        v-model="selectedCat"
                        :value="category"
                        class="custom-control-input"
                      />
                      <div class="custom-control-label">
                        {{ category }}
                      </div>
                    </label>
                    <h2 class="line2" style="width: 100%"></h2>
                  </div>
                </div>
              </div>
              <div class="filter-item">
                <label>
                  <span
                    href="#type"
                    data-toggle="collapse"
                    class="icon-caret-right"
                    style="font-size: 20px"
                  ></span>
                  Type
                </label>
                <h2 class="line1" style="width: 90%"></h2>

                <!-- dropdown -->
                <div
                  class="collapse"
                  id="type"
                  v-for="type in product_types"
                  :key="type"
                >
                  <div class="dropdown-item">
                    <label>
                      <input
                        type="checkbox"
                        v-model="selectedType"
                        :value="type"
                        class="custom-control-input"
                        id="customCheck1"
                      />
                      <div class="custom-control-label" for="customCheck1">
                        {{ type }}
                      </div>
                    </label>
                    <h2 class="line2" style="width: 100%"></h2>
                  </div>
                </div>
              </div>
              <div class="filter-item">
                <label>
                  <span
                    href="#brand"
                    data-toggle="collapse"
                    class="icon-caret-right"
                    style="font-size: 20px"
                  ></span>
                  Brand
                </label>
                <h2 class="line1" style="width: 90%"></h2>

                <!-- dropdown -->
                <div
                  class="collapse"
                  id="brand"
                  v-for="brand in brands"
                  :key="brand"
                >
                  <div class="dropdown-item">
                    <label>
                      <input
                        type="checkbox"
                        v-model="selectedBrand"
                        :value="brand"
                        class="custom-control-input"
                        id="customCheck1"
                      />
                      <div class="custom-control-label" for="customCheck1">
                        {{ brand }}
                      </div>
                    </label>
                    <h2 class="line2" style="width: 100%"></h2>
                  </div>
                </div>
              </div>
            </div>
            <!-- TEST 
            {{selectedCat}}
            {{selectedType}}
            {{selectedBrand}} 
          --></div>
        </transition>
      </div>
    </header>
  </form>
</template>

<script>
export default {
  name: "FilterProducts",
  props: ["openFilter"],
  data() {
    return {
      product_categories: ["Makeup", "Toiletry", "Skincare"],
      product_types: ["Cleansing gel", "Lipstick", "Hair Shampoo"],
      brands: ["Skintegra", "Lush", "Trixie Cosmetics"],
      selectedCat: [],
      selectedType: [],
      selectedBrand: [],
    };
  },
  methods: {
    closeFilter() {
      this.$emit("close");
    },
    rotate(e) {
      const element = e.target;
      if (element.className.includes("collapsed")) {
        element.style.transform = "rotate(90deg)";
      } else {
        element.style.transform = "rotate(0deg)";
      }
    },
  },
};
</script>

<style>
.filter {
  width: 330px;
  height: 100%;
  position: fixed;
  padding: 0;
  background: white;
  top: 0;
  right: 0;
  z-index: 20000;
  overflow: scroll;
}

.filter-close {
  margin: 15px 15px 0 0;
}

.icon-cancel-1::before {
  font-size: 20px;
  vertical-align: top;
  cursor: pointer;
}

.filter-title {
  display: inline-block;
  margin: 25px 0 25px 0;
}

.icon-filter::before {
  font-size: 35px;
  vertical-align: top;
}

.icon-caret-right::before {
  vertical-align: baseline;
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
