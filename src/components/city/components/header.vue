<template>
   <div class="city-header">
        城市选择  
        <router-link to="/">
        <span class="iconfont header-back">&#xe624;</span> 
       </router-link>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  data: function() {
    return {};
  },
  components: {}
};
</script>

<style scoped type='text/css'>
.city-header {
  width: 100%;
  text-align: center;
  background: #00bcd4;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  color: #fff;
  position: relative;
}
.header-back {
  width: 40px;
  text-align: center;
  font-size: 20px;
  float: left;
  color: #fff;
  position: absolute;
  left: 0px;
  top: 0px;
}
</style>
