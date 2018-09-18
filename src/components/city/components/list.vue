<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-top-bottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button" v-text="this.city"></div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-top-bottom"> 热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id" @click="listChangeCity(item.name)">
            <div class="button" v-text="item.name"></div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cityList" :ref="key">
        <div class="title border-top-bottom" v-text="key"></div>
        <div class="item-list">
          <div class="item  borderBottom" v-for="cityItem of item" v-text="cityItem.name" @click="listChangeCity(cityItem.name)">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  props: ['cityList', 'hotCities', 'letter'],
  data: function() {
    return {}
  },
  components: {},
  methods: {
    listChangeCity(city) {
      // this.$store.commit('changeCity', city)
      this.$router.push('/')
      this.changeCity(city)
    },
    ...mapMutations(['changeCity'])
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  computed: {
    ...mapState(['city'])
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style scoped type='text/css'>
.title {
  height: 30px;
  line-height: 30px;
  color: #666;
  background: #eee;
  border-bottom: 1px solid #ccc;
}
.border-top-bottom {
  text-indent: 10px;
}
.button-list {
  overflow: hidden;
  padding: 10px;
  padding-right: 30px;
}
.button-wrapper {
  float: left;
  width: 33%;
  cursor: pointer;
}
.button {
  margin: 5px;
  text-align: center;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 3px;
}
.item-list .item {
  line-height: 30px;
  padding-left: 10px;
}
.borderBottom {
  border-bottom: 1px solid #eee;
}
.list {
  position: absolute;
  top: 100px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: -1;
}
</style>
