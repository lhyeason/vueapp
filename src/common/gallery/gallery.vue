<template>
    <div class="container" @click="disapperImg">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="swiper-img" :src="item">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination">
                    <span class="swiper-pagination-current"></span>
                    "/"
                    <span class="swiper-pagination-total"></span>
                </div>
            </swiper>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'commonGallary',
  props: { imgs: Array },
  data: function() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    disapperImg() {
      this.$emit('disapper')
    }
  },
  components: {}
}
</script>

<style scoped type='text/css'>
.container {
  position: fixed;
  display: flex;
  top: 0;
  width: 800px;
  height: 100%;
  z-index: 99;
  background: #000;
  flex-direction: column;
  justify-content: center;
}
.wrapper {
  background: #000;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 53.5%;
  position: relative;
}
.swiper-pagination {
  color: #fff !important;
  position: absolute;
  top: 400px;
}
</style>
