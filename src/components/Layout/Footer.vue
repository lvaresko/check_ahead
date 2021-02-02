<template>
  <footer class="bd-footer text-muted py-3 bg-light">
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
      <div class="text-center">
        <span class="icon-copyright"></span> 2020, CheckAhead
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
footer {
  font-size: 16px;
  width: 100%;
  margin-top: 20px;
  left: 0;
  bottom: 0;
}
footer .group {
  display: flex;
  justify-content: space-evenly;
  padding-top: 5px;
}

span.icon-copyright {
  font-size: 20px;
}

.bd-footer a {
  font-size: 16px;
  color: #595959;
}

.bd-footer a:hover {
  color: #232323;
  text-decoration: none;
}
</style>
