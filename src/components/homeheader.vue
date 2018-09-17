<template>
   <div class="header">
        <div class="header-left">
          <span class="iconfont ">&#xe624;</span>
        </div>
        <div class="header-input"><span class="iconfont">&#xe632;</span>输入景点/城市/游玩主题 </div>
        <router-link to="/hello"> 
          <div class="header-right"  @click="jumpToHello">{{this.city}} <span class="iconfont">&#xe64a;</span></div>
        </router-link>
   </div>
  
</template>

<script type="text/ecmascript-6">
export default {
  data: function() {
    return {};
  },
  components: {},
  props: {
    city: String
  },
  methods: {
    jumpToHello() {
      console.log("click !!!");
      this.$router.push({ path: "hello" });
    }
  }
};
</script>

<style scoped lang='less'>
.header {
  width: 100%;
  height: 64px;
  color: #fff;
  background: #00bcd4;
  display: flex;
  line-height: 64px;
  text-align: center;
  .header-left {
    float: left;
    width: 40px;
    cursor: pointer;
  }
  .header-input {
    flex: 1;
    margin-left: 10px;
    height: 40px;
    margin-top: 12px;
    background: #fff;
    border-radius: 5px;
    color: #ccc;
    line-height: 40px;
    padding-left: 10px;
    text-align: left;
  }
  .header-right {
    float: right;
    width: 80px;
    cursor: pointer;
    color: #fff;
  }
}
</style>
