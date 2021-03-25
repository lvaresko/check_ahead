<template>
  <div class="handlerequests">
    <img
      class="loading"
      v-if="loading"
      :src="require('@/assets/loading.gif')"
    />
    <div v-else>
      <div v-if="!this.requests.length" class="no-requests mt-3">
        <h3>There are no active requests</h3>
        <div v-if="added" class="updated text-center">
          <div>
            See the newly added product <a @click="this.product">Here</a>
          </div>
        </div>
      </div>
      <div v-else class="requests mt-3">
        <h2>Handle Requests</h2>
        <p>Number of active requests: {{ requests.length }}</p>
        <div class="text-left">
          <p style="text-decoration: underline;">Handle the oldest request:</p>
          <h5>Request ID: {{ this.requests[0].request_id }}</h5>
          <h5>Sent on: {{ this.requests[0].request_sent }}</h5>
          <h5>
            Sent by: {{ this.requests[0].author_firstName }}
            {{ this.requests[0].author_lastName }}
          </h5>
          <h5>Requested brand: {{ this.requests[0].brand }}</h5>
          <h5>Requested product: {{ this.requests[0].name }}</h5>
          <div v-if="added" class="updated text-center">
            <div>
              See the newly added product <a @click="this.product">Here</a>
            </div>
          </div>
          <div class="btn-wrapper mt-4 text-center">
            <button
              type="button"
              class="btn btn-secondary m-1 shadow-sm"
              @click="this.Reject"
            >
              Reject
            </button>
            <button
              type="button"
              class="btn btn-primary m-1 shadow-sm"
              @click="this.Approve"
            >
              Approve
            </button>
          </div>
          <div class="reject text-center mt-3" v-if="this.rejectOpen">
            <h5>Are you sure you want to reject this request?</h5>
            <p>This request will be marked as "rejected".</p>
            <button
              type="button"
              class="btn btn-secondary m-1 shadow-sm btn-reject"
              @click="this.rejectRequest"
            >
              Reject request
            </button>
          </div>
          <div class="approve text-center" v-if="this.approveOpen">
            <h2>Add the requested product to database</h2>
            <AddProductForm @finish="approveRequest" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase.js";
import AddProductForm from "@/components/Admin/AddProductForm.vue";
import router from "@/router";

export default {
  name: "HandleRequests",
  data() {
    return {
      requests: [],
      loading: true,
      rejectOpen: false,
      approveOpen: false,
      product_id: null,
      added: false,
    };
  },
  components: {
    AddProductForm,
  },
  async mounted() {
    this.loading = true;
    await this.getAllRequests();
    this.loading = false;
  },
  methods: {
    sortedPush(value) {
      const _ = require("underscore");
      this.requests.splice(
        _.sortedIndex(this.requests, value, "request_sent"),
        0,
        value
      );
    },

    async getAllRequests() {
      try {
        this.requests = [];
        let query = await db.collection("users").get();

        for (let user of query.docs) {
          let requests = await db
            .collection("users")
            .doc(user.id)
            .collection("requests")
            .get();

          requests.docs.map((doc) => {
            if (doc.data().status == "pending") {
              this.sortedPush({
                request_id: doc.id,
                author: user.id,
                author_firstName: user.data().firstName,
                author_lastName: user.data().lastName,
                name: doc.data().name,
                brand: doc.data().brand,
                request_sent: new Date(
                  doc.data().request_sent
                ).toLocaleString(),
              });
            }
          });
        }
      } catch (e) {
        console.error(e);
      }
    },
    Reject() {
      this.approveOpen = false;
      this.rejectOpen = true;
    },
    async rejectRequest() {
      let query = await db
        .collection("users")
        .doc(this.requests[0].author)
        .collection("requests")
        .doc(this.requests[0].request_id)
        .update({ status: "rejected" });

      this.getAllRequests();
      this.rejectOpen = false;
    },
    Approve() {
      this.rejectOpen = false;
      this.approveOpen = true;
    },
    async approveRequest(value) {
      this.product_id = value;
      let query = await db
        .collection("users")
        .doc(this.requests[0].author)
        .collection("requests")
        .doc(this.requests[0].request_id)
        .update({ status: "approved", product_id: this.product_id });

      this.$emit("updated");
      this.getAllRequests();
      this.added = true;
      this.approveOpen = false;
    },
    product() {
      router.push({ name: "Product", params: { product_id: this.product_id } });
    },
  },
};
</script>

<style scoped>
.btn-wrapper {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
}
.btn-reject:hover {
  background: rgba(255, 59, 59, 0.726);
  border: none;
}
a {
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
</style>
