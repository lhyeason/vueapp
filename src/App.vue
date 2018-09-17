<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: function() {
    return {};
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  list-style: none;
}
#app {
  width: 800px;
  margin: 0 auto;
}
</style>
