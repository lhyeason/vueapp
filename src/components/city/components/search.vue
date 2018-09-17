<template>
    <div class="search">
        <input type="text" placeholder="输入城市名或拼音" class="city-search">
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
.search {
  background: #00bcd4;
  width: 100%;
  height: 50px;
  line-height: 40px;
  padding: 0px 40px 5px 40px;
  box-sizing: border-box;
}
.city-search {
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #eee;
  color: #fff;
  text-align: center;
}
</style>
