<template>
  <div id="app">
    <homeheader></homeheader>
    <homeswiper></homeswiper>
  </div>
</template>

<script>
import homeheader from "./components/homeheader";
import homeswiper from "./components/swiper";
export default {
  name: "App",
  components: {
    homeheader,
    homeswiper
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  list-style: none;
}
#app {
  width: 800px;
  margin: 0 auto;
}
</style>
