<template>
  <div class="container text-center">
    <img
      class="loading"
      v-if="loading"
      :src="require('@/assets/loading.gif')"
    />
    <div v-else>
      <h2>Barcode scanner</h2>

      <div class="camera align-self-center">
        <v-quagga :onDetected="logIt" :readerTypes="['ean_reader']"></v-quagga>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BarodeScan",
  data() {
    return {
      detecteds: [],
      code: null,
      loading: false,
    };
  },

  methods: {
    closeScan() {
      this.$emit("close");
    },
    logIt(data) {
      console.log("detected", data.codeResult.code);
      //this.$emit("getCode", data.codeResult.code);
      this.detecteds.push(data.codeResult.code);
    },
  },
  watch: {
    detecteds: function() {
      if (this.detecteds.length == 5) this.loading = true;
    },
  },
};
</script>

<style scoped>
.camera {
  max-width: 640px;
  margin: auto;
}

.viewport {
  overflow: hidden;
  min-height: 640px;
  max-width: 640px;
}

.viewport canvas,
.viewport video {
}
</style>
