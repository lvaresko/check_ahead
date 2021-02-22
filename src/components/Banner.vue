<template>
  <div class="banner">
    <span>Succesfully updated </span>
    <span class="icon-check"></span>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {};
  },
  mounted() {
    this.getBanner();
  },
  methods: {
    getBanner() {
      const element = this.$el;
      setTimeout(() => {
        element.style.marginTop = "0px";
        setTimeout(() => {
          element.style.marginTop = "-50px";
          setTimeout(() => {
            this.$emit("toggle");
          }, 500);
        }, 1500);
      }, 500);
    },
  },
};
</script>

<style scoped>
.banner {
  position: absolute;
  position: fixed;
  padding-bottom: 5px;
  z-index: 500;
  left: 0;
  right: 0;
  background: #51af4e;
  text-align: center;
  margin-top: -50px;
  overflow: hidden;
  transition: 0.5s margin-top ease-in-out;
  cursor: pointer;
}

.banner span {
  color: white;
}
</style>
