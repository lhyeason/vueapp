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
      state: false,
      startY: 0,
      timer: null
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
      // console.log(this.startY)
      if (this.state) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          let mouseY = e.clientY - 100
          let index = Math.floor((mouseY - this.startY) / 30)
          this.$emit('getLetter', this.letters[index])
        }, 100)
      }
    },
    dragEnd() {
      this.state = false
    }
  },
  updated() {
    this.startY = this.$refs['A'][0].offsetTop
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
