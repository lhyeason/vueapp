<template>
    <div class="wripper">
        <swiper>
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"> </div>
            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div> -->
            <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    swiperList: Array
  },
  data: function() {
    return {
      // swiperOption: {
      //   // pagination: ".swiper-pagination",
      //   loop: true
      // }
    };
  },
  components: {},
  computed: {
  }
};
</script>

<style>
.swiper-pagination-bullet-active {
  background: #fff !important;
}
</style>
<style  scoped>
.wripper {
  position: relative;
  width: 100%;
}
.swiper-img {
  width: 100%;
}
</style>
