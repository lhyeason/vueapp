<template>
   <div>
        <cityheader></cityheader>
        <citysearch></citysearch>
   </div>
</template>

<script type="text/ecmascript-6">
import cityheader from "./components/header";
import citysearch from "./components/search";
export default {
  name: "City",
  data: function() {
    return {};
  },
  components: {
    cityheader,
    citysearch
  }
};
</script>

<style scoped type='text/css'>
</style>
