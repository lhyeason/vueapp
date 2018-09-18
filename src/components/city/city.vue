<template>
  <div>
    <cityheader></cityheader>
    <citysearch :cityList="cityList"></citysearch>
    <citylist :cityList="cityList" :hotCities="hotCities" :letter="letter"></citylist>
    <cityalphabet :cityList="cityList" @getLetter="forWardedLetter"></cityalphabet>
  </div>
</template>

<script type="text/ecmascript-6">
import cityheader from './components/header'
import citysearch from './components/search'
import citylist from './components/list'
import cityalphabet from './components/alphabet'
import axios from 'axios'
export default {
  name: 'City',
  data: function() {
    return {
      hotCities: '',
      cityList: '',
      letter: ''
    }
  },
  components: {
    cityheader,
    citysearch,
    citylist,
    cityalphabet
  },
  mounted() {
    axios.get('../../../static/mock/city.json').then(response => {
      this.cityList = response.data.data.cities
      this.hotCities = response.data.data.hotCities
    })
  },
  methods: {
    forWardedLetter(target) {
      this.letter = target
    }
  }
}
</script>

<style scoped type='text/css'>
</style>
