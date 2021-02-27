<template>
  <div v-if="showScan">
    <transition name="fade">
      <div class="popup-overlay" @click="closeScan"></div>
    </transition>

    <div class="cam">
      <span class="close" @click="closeScan">{{ this.code }}</span>
      <v-quagga
        :onDetected="logIt"
        :readerSize="readerSize"
        :readerTypes="['ean_reader']"
      ></v-quagga>
    </div>
  </div>
</template>

<script>
export default {
  name: "BarodeReader",
  props: ["showScan"],
  data() {
    return {
      readerSize: {
        width: 500,
        height: 400,
      },
      constraints: {
        width: 200,
        height: 200,
        facing: "environment", // or user
      },
      detecteds: [],
      code: null,
    };
  },

  methods: {
    closeScan() {
      this.$emit("close");
    },
    logIt(data) {
      console.log("detected", data.codeResult.code);
      //this.$emit("getCode", data.codeResult.code);
      this.code = data.codeResult.code;
    },
  },
};
</script>

<style scoped>
.cam {
  position: fixed;
  z-index: 20000;
  top: 50%;
  left: 50%;
  margin-top: -140px;
  margin-left: -320px;
  -webkit-box-shadow: 0 2px 4px 0 #777;
  -moz-box-shadow: 0 2px 4px 0 #777;
  box-shadow: 0 2px 4px 0 #777;
}

.close {
  background: white;
  height: 30px;
  width: 640px;
  cursor: pointer;
  margin-top: -30px;
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
</style>
