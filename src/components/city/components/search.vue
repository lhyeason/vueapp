<template>
  <div class="search-container">
    <div class="search">
      <input type="text" placeholder="输入城市名或拼音" class="city-search" v-model="searchContent">
    </div>
    <div class="search-content" v-show="searchState">
      <ul>
        <li v-for="item of list" v-text="item" class="result" @click="listChangeCity(item)"></li>
      </ul>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
import { mapMutations } from 'vuex'
export default {
  data: function() {
    return {
      searchContent: '',
      list: [],
      timer: null,
      searchState: false
    }
  },
  props: ['cityList'],
  components: {},
  watch: {
    searchContent() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.searchContent) {
        this.list = []
        this.searchState = false
      } else {
        this.searchState = true
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cityList) {
          this.cityList[i].forEach(value => {
            if (
              value.spell.indexOf(this.searchContent) > -1 ||
              value.name.indexOf(this.searchContent) > -1
            ) {
              result.push(value.name)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    listChangeCity(city) {
      this.changeCity(city)
      this.list = []
      this.searchContent = ''
      this.searchState = false
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
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
  color: #333;
  text-align: center;
}
.search-container {
  position: relative;
}
.search-content {
  position: absolute;
  width: 100%;
  background: white;
  z-index: 1;
  text-align: center;
  padding: 50px 0px;
}
.result {
  color: #333;
  height: 30px;
  width: 25%;
  margin: 5px 20px;
  line-height: 30px;
  background: #fff;
  text-align: center;
  border-radius: 5px;
  display: inline-block;
  cursor: pointer;
  transition: background ease 0.4s, color ease 0.4s;
  border: 1px solid lightgray;
  box-sizing: border-box;
}
.result:hover {
  color: #00bcd4;
  background: #ccc;
}
</style>
