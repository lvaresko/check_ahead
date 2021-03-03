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
            <div class="filter-close">
              <button type="button" class="btn btn-secondary shadow-sm" @click="clear();">
                Clear
              </button>
              <button type="button" class="btn btn-primary shadow-sm" @click.self="closeFilter();">
                Done
              </button>
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
                  v-for="category in filter(1)"
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
                    class="collapsed arrow icon-caret-right"
                    style="font-size: 20px"
                    @click="rotate"
                  ></span>
                  Type
                </label>
                <h2 class="line1" style="width: 90%"></h2>

                <!-- dropdown -->
                <div
                  class="collapse"
                  id="type"
                  v-for="type in filter(2)"
                  :key="type"
                >
                  <div class="dropdown-item">
                    <label>
                      <input
                        type="checkbox"
                        v-model="selectedType"
                        :value="type"
                        class="custom-control-input"
                      />
                      <div class="custom-control-label">
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
                    class="collapsed arrow icon-caret-right"
                    style="font-size: 20px"
                    @click="rotate"
                  ></span>
                  Brand
                </label>
                <h2 class="line1" style="width: 90%"></h2>

                <!-- dropdown -->
                <div
                  class="collapse"
                  id="brand"
                  v-for="brand in filter(3)"
                  :key="brand"
                >
                  <div class="dropdown-item">
                    <label>
                      <input
                        type="checkbox"
                        v-model="selectedBrand"
                        :value="brand"
                        class="custom-control-input"
                      />
                      <div class="custom-control-label">
                        {{ brand }}
                      </div>
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
  </form>
</template>

<script>
import { db } from "@/firebase";

export default {
  name: "FilterProducts",
  props: ["openFilter"],
  data() {
    return {
      filter_items: [],
      selectedCat: [],
      selectedType: [],
      selectedBrand: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    closeFilter() {
      this.$emit("close");
      this.$emit('filter', this.selectedCat, this.selectedType, this.selectedBrand);
    },
    async getData() {
      let results = await db.collection("products").get();

      results.forEach((doc) => {
        let data = doc.data();
        this.filter_items.push({
          brand: data.brand,
          category: data.category,
          type: data.type,
        });
      });
    },
    filter(x) {
      switch (x) {
        case 1:
          return [...new Set(this.filter_items.map(({ category }) => category))];
        case 2:
          return [...new Set(this.filter_items.map(({ type }) => type))];
        case 3:
          return [...new Set(this.filter_items.map(({ brand }) => brand))];
      }
    },
    rotate(e) {
      const element = e.target;
      if (element.className.includes("collapsed")) {
        element.style.transform = "rotate(90deg)";
      } else {
        element.style.transform = "rotate(0deg)";
      }
    },
    clear() {
      this.selectedCat = [];
      this.selectedType = [];
      this.selectedBrand = [];
      this.$emit('clear');
    }
  },
};
</script>

<style scoped>
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
  margin: 15px 15px 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filter-close .btn {
  width: 60px;
}

/*
.icon-cancel-1::before {
  font-size: 20px;
  vertical-align: top;
  cursor: pointer;
}*/

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
