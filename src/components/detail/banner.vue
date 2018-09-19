<template>
    <div class="banner-container" @click="checkBanner">
        <div class="banner">
            <img src="//img1.qunarzz.com/sight/p0/1706/84/84c3c1121457285a3.img.png_600x330_61e78410.png" alt="" class="banner-img">
            <div class="banner-info">
                <div class="banner-title">穿紫河游船(AAA景区)</div>
                <div class="banner-number">
                    <span class="iconfont">&#xe691;</span>39
                </div>
            </div>
        </div>
        <commongallary :imgs="imgs" v-show="gallerystate" @disapper="hidden"></commongallary>
    </div>

</template>

<script type="text/ecmascript-6">
import commongallary from '../../common/gallery/gallery'
export default {
  data: function() {
    return {
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1801/6e/6e3d5a8fcf7a2180a3.img.jpg_r_800x800_31f31ad5.jpg',
        'http://img1.qunarzz.com/sight/p0/1706/cc/ccb96e157eef72e0a3.img.png_r_800x800_c6ba0714.png',
        'http://img1.qunarzz.com/sight/p0/1706/94/94deaf6791505b89a3.img.png_r_800x800_b69da02f.png'
      ],
      gallerystate: false
    }
  },
  components: {
    commongallary
  },
  methods: {
    checkBanner() {
      this.gallerystate = true
    },
    hidden() {
      this.gallerystate = false
      console.log(this.gallerystate)
      this.imgs = []
    }
  }
}
</script>

<style scoped type='text/css'>
.banner {
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  position: relative;
  color: #ffffff;
  font-size: 16px;
}
.banner-img {
  width: 100%;
}
.banner-info {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  line-height: 25px;
  padding: 0 10px;
  background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
}
.banner-title {
  flex: 1;
}
.banner-number {
  padding: 0 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.8);
}
</style>
<style>
.banner-container {
  width: 100%;
  height: 100%;
}
</style>

