<template>
    <div class="wripper">
        <swiper :options="swiperOption">
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
  data: function() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      swiperList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1809/91/836652a03cc5f802.jpg_890x330_628a9416.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1809/84/a63391f65b8b2402.jpg_890x330_bd66a929.jpg"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1706/a0/1ec3d500eabeee02.jpg_890x330_b73a0892.jpg"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1809/fb/23dd579d2218b702.jpg_890x330_a2e8b887.jpg"
        }
      ]
    };
  },
  components: {}
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
