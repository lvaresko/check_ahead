<template>
  <footer class="footer container-fluid fixed bottom text-center">
    <div class="group">
      <div class="first">
        <a href="#" onclick="return false;">FAQ</a> <br />
        <a href="#" onclick="return false;">Privacy Policy</a>
      </div>
      <div class="second">
        <a href="#" onclick="return false;">Contact Us</a> <br />
        <a href="#" onclick="return false;">Terms of Use</a>
      </div>
      <!-- onclick="return false; TAKO DA NE REFRESHA STRANICU LINK KOJI NE VODI NIGDJE -->
    </div>
    <div>
      <h2 class="line" style="width: 80%"></h2>
      <span class="icon-copyright"></span> 2020, CheckAhead
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
.footer {
  align-content: center;
  font-size: 16px;
  background-color:#eeeeee; //ili tamnije #dddddd
  width: 100%;
}
.footer .group {
  display: flex;
  justify-content: space-evenly;
  padding-top: 5px;
}

span.icon-copyright {
  font-size: 20px;
}

a {
  font-size: 16px;
  color: #595959;
}

a:hover {
  color: #232323;
  text-decoration: none;
}
</style>
