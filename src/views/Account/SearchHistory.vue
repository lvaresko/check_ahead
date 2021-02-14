<template>
  <div class="account">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4" id="nav">
          <AccountSidebar />
        </div>
        <div class="col-12 col-md-8 mt-6 text-center right-side ">
          <div class="recently-viewed">
            <h2 class="mb-5">Recently viewed items:</h2>
            <!--<label>RECENTLY VIEWED ITEMS:</label>-->
            <div v-for="content in products" :key="">
              <div class="row">
                <div class="col-2 p-0">
                  <img
                    src="@/assets/architect.jpeg"
                    alt="product"
                    class="img-fluid"
                  />
                </div>
                <div class="col-8 ">{{ content.name }}</div>
                <div class="col-2 ">
                  <div v-if="content.suitable">
                    <span class="icon-check"></span>
                  </div>
                  <div v-else>
                    <span class="icon-cancel"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountSidebar from "@/components/Account/AccountSidebar.vue";

export default {
  name: "SearchHistory",
  components: {
    AccountSidebar,
  },
  data() {
    return {
      user_name: "Amy",
      email: "",
      //username: '',
      password: "",
      passwordRepeat: "",
      products: [
        { name: "bas dobar sampon", suitable: true },
        { name: "ful dobra krema", suitable: false },
        {
          name:
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          suitable: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
.recently-viewed label {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 0;
}

.recently-viewed .row {
  border-bottom: 1px solid lightgray;
}
.recently-viewed img {
  height: 45px;
  max-width: 150px;
  width: 100%;
  object-fit: cover;
}

.recently-viewed div {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
  font-weight: unset;
}

.recently-viewed .col-8 {
  align-items: center;
}

.recently-viewed .icon-check {
  justify-content: flex-end;
  color: #54bb5e;
}

.recently-viewed .icon-cancel {
  justify-content: flex-end;
  color: #ff3d00;
}
</style>
