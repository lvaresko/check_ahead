<template>
  <div>
    <transition name="fade">
      <div
        class="desc-overlay"
        @click="closeDescription"
        v-if="showDescription"
      ></div>
    </transition>
    <transition name="fade">
      <div class="desc text-center" v-if="showDescription">
        <div>{{ info }}</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Description",
  props: ["info", "showDescription"],
  methods: {
    closeDescription() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.desc {
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

.desc-overlay {
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
