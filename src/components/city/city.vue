<template>
   <div>
        <cityheader></cityheader>
        <citysearch></citysearch>
        <citylist></citylist>
        <cityalphabet></cityalphabet>
   </div>
</template>

<script type="text/ecmascript-6">
import cityheader from "./components/header";
import citysearch from "./components/search";
import citylist from "./components/list";
import cityalphabet from "./components/alphabet";
export default {
  name: "City",
  data: function() {
    return {};
  },
  components: {
    cityheader,
    citysearch,
    citylist,
    cityalphabet
  }
};
</script>

<style scoped type='text/css'>
</style>
