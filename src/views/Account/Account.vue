<template>
  <div class="account">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4" id="nav">
          <AccountSidebar />
        </div>
        <div class="col-12 col-md-8 mt-6 text-center right-side">
          <div class="col text-center">
            <h3>Hi {{ user_name }}!</h3>
            <h1>Your account</h1>
          </div>
          <h3>Welcome to your acocunt!</h3>
          <p>Here you can update your settings ??????</p>
          <p>
            Ovaj account je uzasno uzasan ..izgleda katastroficno i trenutno
            nemam vise snage za trazit neki dobar dizajn paa ako se tebi da moes
            ili cemo ful ostavit za kraj
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountSidebar from "@/components/Account/AccountSidebar.vue";

export default {
  name: "Account",
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
<style></style>
