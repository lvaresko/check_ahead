<template>
  <div class="barcodeReader" v-if="showBarcodeReader">
    <transition name="fade">
      <div class="popup-overlay"></div>
    </transition>

    <transition name="fade">
      <div class="container text-center">
        <div class="camera align-self-center">
          <div class="title">
            <span class="title_text">SCAN YOUR BARCODE!</span>
            <span class="icon-cancel-1" @click="closeBarcodeReader"></span>
          </div>
          <img class="loading" :src="require('@/assets/loading.gif')" />

          <v-quagga
            :onDetected="logIt"
            :readerTypes="['ean_reader']"
          ></v-quagga>
        </div></div
    ></transition>
  </div>
</template>

<script>
export default {
  name: "BarcodeReader",
  props: ["showBarcodeReader"],
  data() {
    return {
      detecteds: [],
      code: null,
      loading: false,
    };
  },

  methods: {
    closeBarcodeReader() {
      this.$emit("close");
    },
    logIt(data) {
      this.detecteds.push(data.codeResult.code);
    },
  },
  watch: {
    detecteds: function() {
      if (this.detecteds.length == 5) {
        //find the most frequent

        let counts = this.detecteds.reduce((a, c) => {
          a[c] = (a[c] || 0) + 1;
          return a;
        }, {});
        let maxCount = Math.max(...Object.values(counts));
        let mostFrequent = Object.keys(counts).filter(
          (k) => counts[k] === maxCount
        );

        this.$emit("code", mostFrequent);
      }
    },
  },
  mounted() {
    this.loading = false;
  },
  beforeMount() {
    this.loading = true;
  },
};
</script>

<style scoped>
.loading {
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.popup-overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.5);
}

.barcodeReader {
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.container {
  position: fixed;
  z-index: 30000;
}

.camera {
  max-width: 640px;
  margin: auto;
  z-index: 20000;
}

.viewport {
  overflow: hidden;
  min-height: 640px;
  max-width: 640px;
  z-index: 20000;
}

.title {
  margin-top: 20px;
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;
}
.title_text {
  font-size: 12;
  color: white;
  font-weight: 200;
}

.icon-cancel-1 {
  font-size: 17px;
  color: white;
  cursor: pointer;
}
</style>
