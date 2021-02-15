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
      element.style.marginTop = "0px";
      setTimeout(() => {
        element.style.marginTop = "-44px";
        setTimeout(() => {
          this.$emit("toggle");
        }, 1000);
      }, 3000);
    },
  },
};
</script>

<style scoped>
.banner {
  position: absolute;

  left: 0;
  right: 0;
  background: #479e44d8;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  margin-top: -44px;
  overflow: hidden;
  transition: 0.5s margin-top ease-in-out;
  cursor: pointer;
}

.banner span {
  color: white;
}
</style>
