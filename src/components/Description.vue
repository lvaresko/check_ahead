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
      <div class="desc">
        <div class="text-center">
          <h2 style="align-self: center">{{ info }}</h2>
        </div>
        <div v-if="custom">
          <label>CUSTOM INGREDIENT</label>
        </div>
        <div>
          <label>CATEGORY:</label>
          <p>{{ this.data.category }}</p>
          <label>DESCRIPTION:</label>
          <p>{{ this.data.description }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { db } from "@/firebase.js";
import store from "@/store";

export default {
  name: "Description",
  props: ["info", "showDescription"],
  data() {
    return {
      custom: false,
      data: {},
      loading: true,
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      var ref = await db
        .collection("ingredients")
        .where("name", "==", this.info)
        .get();
      //must be iterated through
      ref.forEach((doc) => {
        this.data = doc.data();
      });
    },

    closeDescription() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
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

label {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 0;
}

p {
  word-wrap: break-word;
}
</style>
