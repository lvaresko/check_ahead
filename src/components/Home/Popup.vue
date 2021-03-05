<template>
  <div>
    <transition name="fade">
      <div class="popup-overlay" @click="closePopup" v-if="showPopup"></div>
    </transition>
    <transition name="fade">
      <div class="popup text-center" v-if="showPopup">
        <div class="popup-image ">
          <img
            id="sad"
            src="@/assets/unavailable.png"
            alt="Product unavailable"
          />
        </div>
        <div class="popup-text mt-3">
          <p style="font-size: 18px">
            WE'RE SORRY BUT THIS PRODUCT IS NOT AVAILABLE, WOULD YOU LIKE TO
            SEND A REQUEST?
          </p>
        </div>
        <form>
          <div class="form-group text-left">
            <label form="exampleInputFirstName">Product name:</label>
            <input
              type="text"
              class="form-control basic-input pt-0"
              id="exampleInputProductName"
              placeholder="Natural Charcoal Deodorant"
            />
          </div>
          <div class="form-group text-left">
            <label form="exampleInputLastName">Product brand:</label>
            <input
              type="text"
              class="form-control basic-input pt-0"
              id="exampleInputProductBrand"
              placeholder="Yes to"
            />
          </div>
          <div class="btn-wrapper mt-4">
            <button
              type="button"
              class="btn btn-secondary ml-3 shadow none"
              @click="closePopup"
            >
              Clear
            </button>
            <button type="button" class="btn btn-primary mr-3 shadow none">
              Apply
            </button>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Popup",
  props: ["showPopup"],
  methods: {
    closePopup() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
/*
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}*/

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20000;
  padding: 35px;
  max-width: 300px;
  background-color: #ffffff;
  border-radius: 5px;
  -webkit-box-shadow: 0 2px 4px 0 #777;
  -moz-box-shadow: 0 2px 4px 0 #777;
  box-shadow: 0 2px 4px 0 #777;
}

.popup-overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

#sad {
  width: 60px;
  height: 60px;
}

.btn-wrapper {
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.btn-wrapper .btn {
  width: 90px;
}
</style>
