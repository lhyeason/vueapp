<template>
  <div id="Home">
    <homeheader></homeheader>
    <homeswiper :swiperList="ajaxData.swiperList"></homeswiper>
    <icons :iconList="ajaxData.iconList"></icons>
    <recommend :items="ajaxData.items"></recommend>
    <weekend :itemsWeek="ajaxData.itemsWeek"></weekend>
  </div>
</template>

<script>
import homeheader from "./homeheader";
import homeswiper from "./swiper";
import icons from "./icons";
import recommend from "./recommend";
import weekend from "./weekend";
import axios from "axios";
import Vue from "vue";
export default {
  name: "Home",
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
      axios.get("../../static/mock/index.json").then(response => {
        this.ajaxData = response.data;
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
</style>