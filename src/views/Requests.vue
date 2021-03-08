<template>
  <div class="requests">
    <img
      class="loading"
      v-if="loading"
      :src="require('@/assets/loading.gif')"
    />
    <div v-else class="container">
      <div class="text-center">
        <h1>Requests</h1>
        <div>
          Here you can see details on requests you've already made.
          <h5>Want to make a new one?</h5>
        </div>
        <button
          type="button"
          class="btn btn-primary shadow-sm mt-1"
          @click="togglePopup"
        >
          Make a request
        </button>
        <Popup
          v-if="popupOpen"
          :site="site"
          :showPopup="popupOpen"
          @close="togglePopup"
        />
      </div>
      <div class="row" style="padding-top: 30px">
        <div class="col-12 col-md-6 d-flex justify-content-center">
          <div>
            <div class="title">
              <span class="icon-alarm-clock-1"></span>
              <div>PENDING REQUESTS</div>
            </div>
            <div>
              <div v-if="PendingRequests.length">
                <div
                  v-for="pendingRequest in PendingRequests"
                  :key="pendingRequest.id"
                >
                  <div class="request">
                    <label>PRODUCT NAME:</label>
                    <div>{{ pendingRequest.name }}</div>
                    <label>PRODUCT BRAND:</label>
                    <div>{{ pendingRequest.brand }}</div>
                    <label>REQUEST SENT ON:</label>
                    <div>{{ pendingRequest.date }}</div>
                  </div>
                </div>
              </div>
              <div v-else>
                No pending requests
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 d-flex justify-content-center">
          <div>
            <div class="title">
              <span class="icon-alarm-clock-2"></span>
              <div>APPROVED REQUESTS</div>
            </div>
            <div v-if="ApprovedRequests.length">
              <div
                v-for="approvedRequest in ApprovedRequests"
                :key="approvedRequest.id"
              >
                <div class="request">
                  <label>PRODUCT NAME:</label>
                  <div>{{ approvedRequest.name }}</div>
                  <label>PRODUCT BRAND:</label>
                  <div>{{ approvedRequest.brand }}</div>
                </div>
              </div>
            </div>
            <div v-else>
              <div>No approved requests</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Popup from "../components/Home/Popup.vue";
import { db } from "@/firebase";
import store from "@/store";

export default {
  name: "Requests",
  data() {
    return {
      popupOpen: false,
      site: "requests",
      ApprovedRequests: [],
      PendingRequests: [],
      loading: false,
    };
  },
  components: {
    Popup,
  },
  async mounted() {
    this.loading = true;
    await this.getRequests();
    this.loading = false;
  },
  methods: {
    togglePopup() {
      this.popupOpen = !this.popupOpen;
    },

    async getRequests() {
      let query = await db
        .collection("users")
        .doc(store.currentUser)
        .collection("requests")
        .orderBy("request_sent")
        .get();

      query.forEach((doc) => {
        let data = doc.data();
        if (!data.approved) {
          this.PendingRequests.push({
            name: data.name,
            brand: data.brand,
            date: new Date(data.request_sent).toDateString(),
          });
        }
      });
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
.title {
  background: #6fa2b4;
  min-width: 330px;
  border-radius: 10px;
}
.title span[class^="icon"] {
  color: white;
  font-size: 35px;
  margin-left: 15px;
}

.title div {
  display: inline-block;
  margin-left: 10px;
  padding-bottom: 15px;
  margin-right: 30px;
  color: white;
  font-weight: bold;
}
.request {
  border: 1px solid lightgray;
  padding: 5px;
  margin: 2px;
}
.request label {
  font-size: 14px;
  font-weight: 800;
  margin-bottom: 0px;
}
</style>
