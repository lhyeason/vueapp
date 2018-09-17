<template>
   <div>
        <cityheader></cityheader>
        <citysearch></citysearch>
        <citylist></citylist>
   </div>
</template>

<script type="text/ecmascript-6">
import cityheader from "./components/header";
import citysearch from "./components/search";
import citylist from "./components/list";
export default {
  name: "City",
  data: function() {
    return {};
  },
  components: {
    cityheader,
    citysearch,
    citylist
  }
};
</script>

<style scoped type='text/css'>
</style>
