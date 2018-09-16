<template>
   <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item" v-for="(item,index) of items" :key="index">
                <div class="item-img-wrapper ">
                    <img :src="item.url" class="item-img">
                </div>
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
  name: "weekend",
  data: function() {
    return {
      items: [
        {
          title: "常德桃花源",
          comment: "1120条评论",
          url:
            "http://img1.qunarzz.com/sight/source/1505/ae/11f076c6cb7c47.jpg_r_640x214_6f643489.jpg"
        },
        {
          title: "彭山旅游度假区",
          comment: "9条评论",
          url:
            "http://img1.qunarzz.com/sight/source/1505/fb/302620ed8350f8.jpg_r_640x214_25a07cb4.jpg"
        },
        {
          title: "稻野寻湘景区",
          comment: "120条评论",
          url:
            "http://img1.qunarzz.com/sight/source/1603/56/33894ef918e1a8.jpg_r_640x214_a9de6b4e.jpg"
        },
        {
          title: "枫林花海",
          comment: "79条评论",
          url:
            "http://img1.qunarzz.com/sight/source/1505/39/d61194f054f1f4.jpg_r_640x214_03da9c61.jpg"
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
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  padding-bottom: 33.9%;
  height: 0px;
}
.item-img-wrapper {
  width: 800px;
  height: 200px;
  float: left;
}
.item-img {
  width: 100%;
  height: 100%;
  float: left;
}
.item-info {
  /* float: left; */
  clear: both;
  width: 100%;
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
  border: 1px solid #333;
  border-radius: 3px;
  width: 80px;
  height: 25px;
  cursor: pointer;
  float: right;
  margin-right: 20px;
}
</style>
