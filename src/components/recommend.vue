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
  props:{
    items:Array
  },
  data: function() {
    return {
  
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
