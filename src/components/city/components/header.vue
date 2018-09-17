<template>
   <div class="city-header">
       <router-link to="/">
        <span class="iconfont header-back">&#xe624;</span> 
       </router-link>
        城市选择  
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
  height: 64px;
  line-height: 64px;
  font-size: 16px;
  color: #fff;
}
.header-back {
  width: 40px;
  text-align: center;
  font-size: 20px;
  float: left;
  color: #fff
}
</style>
