<template>
  <div id="app">
    <homeheader :city="a"></homeheader>
    <homeswiper></homeswiper>
    <icons></icons>
    <recommend></recommend>
    <weekend></weekend>
  </div>
</template>

<script>
import homeheader from "./components/homeheader";
import homeswiper from "./components/swiper";
import icons from "./components/icons";
import recommend from "./components/recommend";
import weekend from "./components/weekend";
import axios from "axios";
export default {
  name: "App",
  components: {
    homeheader,
    homeswiper,
    icons,
    recommend,
    weekend
  },
  data: function() {
    return {
      ajaxData: ""
    };
  },
  methods: {
    getHomeInfo() {
      axios.get("./api/index.json").then(response => {
        this.ajaxData = JSON.parse(this.response);
        console.log(this.ajaxData);
      });
    }
  },
  mounted() {
    this.getHomeInfo();
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
