<template>
  <div class="requests">
    <div class="container">
      <div class="text-center">
        <h1>Requests</h1>
        <div>
          Here you can see details on requests you've already made. Want to make
          a new one? lolll
        </div>
        <button type="button" class="btn btn-primary shadow none mt-4">
          Make a request
        </button>
      </div>
      <div class="row" style="padding-top: 30px">
        <div class="col-12 col-md-6 d-flex justify-content-center">
          <div>
            <div class="title">
              <span class="icon-alarm-clock-1"></span>
              <div>PENDING REQUESTS</div>
            </div>
            <div>
              <div v-if="requests.length">
                <div v-for="request in requests" :key="request">
                  <div class="request">
                    <label>PRODUCT NAME</label>
                    <div>{{ request.name }}</div>
                    <label>PRODUCT BRAND</label>
                    <div>{{ request.brand }}</div>
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
            <div v-if="requests2.length">
              <div v-for="request in requests2" :key="nis">
                <div class="request">
                  <label>PRODUCT NAME</label>
                  <div>{{ request.name }}</div>
                  <label>PRODUCT BRAND</label>
                  <div>{{ request.brand }}</div>
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
export default {
  name: "Requests",
  data() {
    return {
      requests: [
        { name: "perfume", brand: "fragrances" },
        { name: "eugenol", brand: "fragrances" },
        { name: "geraniol", brand: "fragrances" },
        { name: "methylisothiazolinone", brand: "preservatives" },
      ],
      requests2: [],
    };
  },
};
</script>

<style>
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
