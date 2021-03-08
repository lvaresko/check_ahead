<template>
  <div class="handlerequests">
    <h2>Handle Requests</h2>
    <p>Number of active requests: {{ requests.length }}</p>
  </div>
</template>

<script>
import { db } from "@/firebase.js";

export default {
  name: "HandleRequests",
  data() {
    return { requests: [] };
  },
  async mounted() {
    await this.getRequests();
  },
  methods: {
    async getRequests() {
      let query = await db.collection("users").get();
      query.forEach(async (data) => {
        let requests = await db
          .collection("users")
          .doc(data.id)
          .collection("requests")
          .get();

        requests.docs.map((doc) => {
          let date = new Date(doc.data().request_sent).toLocaleString();
          this.requests.push({
            author: data.id,
            author_firstName: data.data().firstName,
            author_lastName: data.data().lastName,
            name: doc.data().name,
            brand: doc.data().brand,
            request_sent: date,
          });
        });
      });
      //ne radi nez zas
      this.requests.sort(function(a, b) {
        return new Date(a.request_sent) - new Date(b.request_sent);
      });
    },
  },
};
</script>

<style></style>
