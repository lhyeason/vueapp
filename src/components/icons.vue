<template>
   <div class="icons">
        <swiper v-if="showIconList" :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
            <div class="icon" v-for="item of page" :key="item.id">
                <div class="icon-img">
                    <img :src="item.imgUrl" alt=""  class="icon-img-content">
                    <p v-text="item.title" class="icon-title"></p>
                </div>
            </div>
            </swiper-slide>
        </swiper>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    iconList: Array
  },
  data: function() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination"
      }
    };
  },
  components: {},
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
    showIconList() {
      return this.iconList;
    }
  }
};
</script>

<style scoped type='text/css'>
.icons {
  width: 100%;
  padding-bottom: 25%;
  height: 0px;
  color: #333;
  margin-bottom: 15px;
}
.icon {
  width: 25%;
  float: left;
}
.icon-img {
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
}
.icon-img-content {
  width: 35%;
}
.icon-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
