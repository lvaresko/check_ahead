<template>
  <div class="requests">
    <img
      class="loading"
      v-if="loading"
      :src="require('@/assets/loading.gif')"
    />
    <div v-else class="container">
      <div class="text-center">
        <h1 class="pt-3">Requests</h1>
        <div>
          Here you can see details on requests you've already made. <br />
          Want to make a new one?
          <span class="make_request" @click="togglePopup">
            Make a request
          </span>
        </div>
        <Popup
          v-if="popupOpen"
          :site="site"
          :showPopup="popupOpen"
          @close="togglePopup"
        />
      </div>
      <div class="row" style="padding-top: 30px">
        <div class="col-12 col-md-6 mb-3 d-flex justify-content-center">
          <div>
            <div class="title">
              <span class="icon-alarm-clock-1"></span>
              <div>PENDING REQUESTS</div>
            </div>
            <div>
              <div v-if="PendingRequests.length">
                <div
                  v-for="(pendingRequest, index) in PendingRequests"
                  :key="pendingRequest.id"
                >
                  <div v-if="index < pendingLimit" class="request">
                    <label>PRODUCT NAME:</label>
                    <div>{{ pendingRequest.name }}</div>
                    <label>PRODUCT BRAND:</label>
                    <div>{{ pendingRequest.brand }}</div>
                    <label>REQUEST SENT ON:</label>
                    <div>{{ pendingRequest.date }}</div>
                  </div>
                </div>
                <div v-if="totalPending > pendingLimit" class="text-left">
                  <a href="#" @click.prevent="pendingLimit += 2" class="load"
                    >Load more...</a
                  >
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
                v-for="(approvedRequest, index) in ApprovedRequests"
                :key="approvedRequest.id"
              >
                <div v-if="index < approvedLimit" class="request">
                  <label>PRODUCT NAME:</label>
                  <div>{{ approvedRequest.name }}</div>
                  <label>PRODUCT BRAND:</label>
                  <div>{{ approvedRequest.brand }}</div>
                  <div class="text-center">
                    <router-link
                      :to="{
                        name: 'Product',
                        params: { product_id: approvedRequest.product_id },
                      }"
                    >
                      <button class="btn btn-secondary check">
                        CHECK
                      </button></router-link
                    >
                  </div>
                </div>
              </div>
              <div v-if="totalApproved > approvedLimit" class="text-left">
                <a href="#" @click.prevent="approvedLimit += 2" class="load"
                  >Load more...</a
                >
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

export default {
  name: "Requests",
  data() {
    return {
      popupOpen: false,
      site: "requests",
      ApprovedRequests: [],
      PendingRequests: [],
      loading: false,
      pendingLimit: 2,
      approvedLimit: 2,
      totalPending: 0,
      totalApproved: 0,
      user: localStorage.getItem("user"),
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
  updated() {
    this.totalPending = this.PendingRequests.length;
    this.totalApproved = this.ApprovedRequests.length;
  },
  methods: {
    togglePopup() {
      this.popupOpen = !this.popupOpen;
      if (!this.popupOpen) this.getRequests();
    },

    async getRequests() {
      this.ApprovedRequests = [];
      this.PendingRequests = [];
      let query = await db
        .collection("users")
        .doc(this.user)
        .collection("requests")
        .orderBy("request_sent")
        .get();

      query.forEach((doc) => {
        let data = doc.data();
        if (data.status == "pending") {
          this.PendingRequests.push({
            name: data.name,
            brand: data.brand,
            date: new Date(data.request_sent).toDateString(),
          });
        } else if (data.status == "approved") {
          this.ApprovedRequests.push({
            name: data.name,
            brand: data.brand,
            product_id: data.product_id,
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
.make_request {
  color: #6fa2b4;
  cursor: pointer;
}

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
  border-radius: 5%;
  padding: 5px;
  margin: 2px;
}
.request label {
  font-size: 14px;
  font-weight: 800;
  margin-bottom: 0px;
}
.check {
  max-width: 60px;
  font-size: 15px;
  max-height: 30px;
  border: 1px solid gray;
}
.load:hover {
  color: #232323;
  text-decoration: none;
  cursor: pointer;
}
</style>
