<template>
   <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item" v-for="(item,index) of items" :key="index">
                <img :src="item.url" class="item-img">
                <div class="item-info">
                    <p class="item-title" v-text="item.title"></p>
                    <p class="item-desc" v-text="item.comment"></p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "recommend",
  data: function() {
    return {
      items: [
        {
          title: "挑花雪缘室内滑雪场",
          comment: "150条评论",
          url:
            "http://img1.qunarzz.com/sight/p0/1612/dd/dd711572a9528d47a3.water.jpg_200x200_208789c7.jpg"
        },
        {
          title: "穿紫河游船",
          comment: "100条评论",
          url:
            "http://img1.qunarzz.com/sight/p0/1706/f3/f38ea610f0ed3bb4a3.img.png_200x200_f445cbe4.png"
        },
        {
          title: "城头山遗址",
          comment: "120条评论",
          url:
            "http://img1.qunarzz.com/sight/p0/201403/10/b3cdc5d07fe7d62ec97206a635195c97.jpg_200x200_5fb6cee4.jpg"
        },
        {
          title: "夷望溪",
          comment: "99条评论",
          url:
            "http://img1.qunarzz.com/sight/p0/1510/f6/f6673115be3a6631.img.jpg_200x200_61c876d6.jpg"
        }
      ]
    };
  },
  components: {}
};
</script>

<style scoped type='text/css'>
.recommend-title {
  line-height: 30px;
  background: #eee;
  text-indent: 10px;
}
.item {
  display: flex;
  height: 100px;
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
}
.item-img {
  width: 100px;
  height: 80px;
  padding: 10px;
}
.item-info {
  flex: 1;
  padding-left: 20px;
  box-sizing: border-box;
}
.item-title {
  height: 30px;
  line-height: 30px;
  margin-top: 5px;
}
.item-desc {
  height: 30px;
  line-height: 30px;
  display: inline-block;
  background: orange;
  color: #fff;
  border-radius: 5px;
  padding: 0px 10px;
  box-sizing: border-box;
}
.item-button {
  float: right;
  margin-right: 20px;
  border: 1px solid #333;
  border-radius: 3px;
  width: 80px;
  height: 25px;
  cursor: pointer;
}
</style>
