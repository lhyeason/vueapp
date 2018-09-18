<template>
  <div>
    <ul class="list">
      <li :ref="key" class="item" v-for="(item,key) of cityList" v-text="key" @click="getTheLetter($event)" @mousedown="dragStart" @mousemove="dragMoving" @mouseup="dragEnd"></li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['cityList'],
  data: function() {
    return {
      state: false
    }
  },
  computed: {
    letters() {
      const letters = []
      for (let i in this.cityList) {
        letters.push(i)
      }
      return letters
    }
  },
  components: {},
  methods: {
    getTheLetter(e) {
      const letter = e.target.innerText
      this.$emit('getLetter', letter)
    },
    dragStart() {
      this.state = true
    },
    dragMoving(e) {
      if (this.state) {
        const startY = this.$refs['A'][0].offsetTop
        let mouseY = e.clientY
        let index = Math.floor((mouseY - startY) / 30)
        // console.log(index)
        // console.log(this.letters)
        this.$emit('getLetter', this.letters[index])
      }
    },
    dragEnd() {
      this.state = false
    }
  }
}
</script>

<style scoped type='text/css'>
.list {
  position: absolute;
  top: 100px;
  right: 10px;
  font-size: 16px;
  width: 30px;
  text-align: center;
  line-height: 30px;
  color: #00bcd4;
  user-select: none;
  cursor: pointer;
}
</style>
