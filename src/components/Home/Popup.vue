<template>
  <div>
    <transition name="fade">
      <div class="popup-overlay" @click="closePopup" v-if="showPopup"></div>
    </transition>
    <transition name="fade">
      <div class="popup text-center" v-if="showPopup">
        <div v-if="updated" class="updated">
          <span class="icon-check"></span>
          <div>Your request is sent!</div>
        </div>
        <div v-else>
          <div class="popup-image ">
            <img
              id="sad"
              src="@/assets/images/unavailable.png"
              alt="Product unavailable"
            />
          </div>
          <div class="popup-text mt-3">
            <p v-if="site == 'requests'" style="font-size: 18px">
              WE'RE SORRY THAT THE PRODUCTS YOU'RE LOOKING FOR ISN'T AVAILABLE,
              WOULD YOU LIKE TO SEND A REQUEST?
            </p>
            <p v-else style="font-size: 18px">
              WE'RE SORRY BUT THIS PRODUCT IS NOT AVAILABLE, WOULD YOU LIKE TO
              SEND A REQUEST?
            </p>
          </div>
          <form>
            <div
              class="form-group text-left"
              :class="classObject(this.nameSuccess)"
            >
              <label form="exampleInputFirstName">Product name:</label>
              <input
                type="text"
                class="form-control basic-input pt-0"
                v-model="name"
                id="exampleInputProductName"
                placeholder="Type here product name"
                required
              />
              <i class="icon-exclamation-2"></i>
              <small id="name">
                Error message.
              </small>
            </div>
            <div
              class="form-group text-left"
              :class="classObject(this.brandSuccess)"
            >
              <label form="exampleInputLastName">Product brand:</label>
              <input
                type="text"
                class="form-control basic-input pt-0"
                v-model="brand"
                id="exampleInputProductBrand"
                placeholder="Type here brand name"
                reqired
              />
              <i class="icon-exclamation-2"></i>
              <small id="brand">
                Error message.
              </small>
            </div>
            <div class="btn-wrapper mt-4">
              <button
                type="button"
                class="btn btn-secondary ml-3 shadow-sm"
                @click="closePopup"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-primary mr-3 shadow-sm"
                @click="sendRequest"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { db } from "@/firebase";
import store from "@/store";

function setMessageFor(input, message) {
  document.getElementById(input).innerText = message;
}

export default {
  name: "Popup",
  props: ["showPopup", "site"],
  data() {
    return {
      name: "",
      brand: "",
      nameSuccess: null,
      brandSuccess: null,
      user: localStorage.getItem("user"),
      updated: false,
    };
  },
  methods: {
    closePopup() {
      this.$emit("close");
    },
    async sendRequest() {
      try {
        if (!this.name) {
          this.nameSuccess = false;
          setMessageFor("name", "Name cannot be blank");
        } else this.nameSuccess = true;

        if (!this.brand) {
          this.brandSuccess = false;
          setMessageFor("brand", "Brand cannot be blank");
        } else this.brandSuccess = true;
        if (this.nameSuccess && this.brandSuccess) {
          await db
            .collection("users")
            .doc(this.user)
            .collection("requests")
            .add({
              name: this.name,
              brand: this.brand,
              request_sent: Date.now(),
              status: "pending",
            });
          this.updated = true;
          setTimeout(() => {
            this.updated = false;
            this.closePopup();
          }, 2000);
        }
      } catch (e) {
        console.log(e);
      }
    },
    classObject: function(varName) {
      if (varName == null) {
        return "basic";
      } else if (varName) {
        return "success";
      } else {
        return "error";
      }
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
.updated span,
.updated div {
  color: #54bb5e;
}

.updated span {
  font-size: 50px;
}
</style>
