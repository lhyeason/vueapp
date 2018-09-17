<template>
   <div class="list" ref="wrapper">
       <div>
            <div class="area">
                <div class="title border-top-bottom" >当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div> 
                </div>
            </div>
            <div class="area">
                <div class="title border-top-bottom"> 热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-top-bottom">A</div>
                <div class="item-list">
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom" >
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-top-bottom">A</div>
                <div class="item-list">
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom" >
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-top-bottom">A</div>
                <div class="item-list">
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom" >
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-top-bottom">A</div>
                <div class="item-list">
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom" >
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-top-bottom">A</div>
                <div class="item-list">
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom" >
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-top-bottom">A</div>
                <div class="item-list">
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom" >
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-top-bottom">A</div>
                <div class="item-list">
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom" >
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-top-bottom">A</div>
                <div class="item-list">
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom" >
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                    <div class="item  borderBottom">
                        阿拉尔
                    </div>
                </div>
            </div>
       </div>
   </div>
</template>
<script type="text/ecmascript-6">
import Bscroll from "better-scroll";
export default {
  data: function() {
    return {};
  },
  components: {},
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  }
};
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
  height: 1000px;
  z-index: -1;
}
</style>
