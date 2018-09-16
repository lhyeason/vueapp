<template>
   <div class="icons">
        <swiper>
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
  data: function() {
    return {
      iconList: [
        {
          id: "01",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票"
        },
        {
          id: "02",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",
          title: "滑雪季"
        },
        {
          id: "03",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          title: "自然风光"
        },
        {
          id: "04",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",
          title: "动植物园"
        },
        {
          id: "05",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票"
        },
        {
          id: "06",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",
          title: "滑雪季"
        },
        {
          id: "07",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          title: "自然风光"
        },
        {
          id: "08",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",
          title: "动植物园"
        },
        // {
        //   id: "09",
        //   imgUrl:
        //     "http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",
        //   title: "动植物园"
        // }
      ]
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
      console.log("计算属性被调用");
      return pages;
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
