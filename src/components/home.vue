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
import homeheader from './homeheader'
import homeswiper from './swiper'
import icons from './icons'
import recommend from './recommend'
import weekend from './weekend'
import axios from 'axios'
import Vue from 'vue'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    homeheader,
    homeswiper,
    icons,
    recommend,
    weekend
  },
  data: function() {
    return {
      ajaxData: '',
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo() {
      axios
        .get('../../static/mock/index.json?city=' + this.city)
        .then(response => {
          this.ajaxData = response.data
        })
    }
  },
  mounted() {
    this.getHomeInfo()
    console.log('mounted')
    this.lastCity = this.city
  },
  activated() {
    if (this.lastCity != this.city) {
      this.getHomeInfo()
      this.lastCity = this.city
    }
    console.log('activated')
  }
}
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  list-style: none;
}
</style>