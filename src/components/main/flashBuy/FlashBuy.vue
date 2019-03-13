<template>
  <div class="container"> <!---->
    <div class="content">
      <div class="content_area">
        <div style="position:relative">
          <h3 style="display:inline-block; font-size: 1.2em;">小米闪购</h3>
          <div class="left_move" ref="leftMoveRef" @click="leftClick" @mouseenter="leftMoveHover" @mouseleave="leftMoveLeave"></div>
          <div class="right_move" ref="rightMoveRef" @click="rightClick" @mouseenter="rightMoveHover" @mouseleave="rightMoveLeave"></div>
        </div>
        <flash-buy-time style="display: inline-block"></flash-buy-time>
        <div class="content_container"> <!--固定长度的容器，容器内的内容长度大于此固定长度-->
          <div class="content_commodity" ref="commodityListRef">
            <flash-buy-item v-for="(key, index) in listDataArray" v-bind:key="index"
                            class="inline" :commodity="key" :border-top-color="colorArray[(index % 5)]"></flash-buy-item>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import FlashBuyTime from './FlashBuyTime'
import FlashBuyItem from './FlashBuyItem'
// import {PLACEHOLDER_IMAGE} from '@/public/CONSTANT.js'
// import jsonData from '@static/json/main/flashBuy.json'
export default {
  name: 'FlashBuy',
  components: {FlashBuyItem, FlashBuyTime},
  data: function () {
    return {
      listDataArray: [],
      itemLength: 0,
      commodityListRef: null,
      leftMoveRef: null,
      rightMoveRef: null,
      itemMaxWidth: 0,
      itemDistance: 248, // 14 + 234
      itemIndex: 0,
      isLeftEnd: true,
      isRightEnd: false,
      colorArray: ['#FFAC13', '#83C44E', '#2196F3', '#E53935', '#00C0A5'],
      dataJson: null
    }
  },
  created: function () { /* 不要在beforeCreate时调用 */
    // this.dataJson = jsonData
    // this.listDataArray = this.dataJson['data']['list']['list']
    // this.itemLength = this.listDataArray.length
  },
  mounted: function () {
    this.getData(this)
    // console.log(this.leftMoveRef.before)
  },
  methods: {
    getData: function (host) {
      this.axios.get('/flashBuyData').then(function (res) {
        host.dataJson = res.data
        host.listDataArray = host.dataJson['data']['list']['list']
        host.itemLength = host.listDataArray.length

        host.commodityListRef = host.$refs.commodityListRef
        host.leftMoveRef = host.$refs.leftMoveRef
        host.leftMoveRef.style.opacity = '0.4'
        host.rightMoveRef = host.$refs.rightMoveRef
        host.maxWidth = (14 + 234) * host.itemLength // 14是左边的间隙，234是矩形宽度
        host.commodityListRef.style.width = host.maxWidth + 'px' // 设定可移动矩形的宽度
      })
    },
    leftClick: function () {
      this.itemIndex -= 4 // 移动一次，4个元素
      if (this.itemIndex < 0) {
        this.itemIndex = 0
        this.isLeftEnd = true // 左边到底
      } else {
        this.isLeftEnd = false
      }
      this.isRightEnd = false // 向左移动，右边必然不到底
      this.commodityListRef.style.marginLeft = -(this.itemIndex * this.itemDistance) + 'px' // 通过marginLeft来改变元素位置，实现移动
    },
    rightClick: function () {
      /*
      * 1.确定左边第一个项在数组中的index
      * 2.由这个index再确定margin-left
      * */
      this.itemIndex += 4 // 移动一次，4个元素
      this.itemIndex = this.itemIndex > (this.itemLength - 1) ? this.itemLength - 1 : this.itemIndex
      if (this.itemLength - this.itemIndex < 4) { // 不足4个
        this.itemIndex = this.itemLength - 4 // 取最后面的4个
        this.isRightEnd = true // 右边到底
      } else {
        this.isRightEnd = false
      }
      this.isLeftEnd = false // 向右移动，左边必然不到底
      this.commodityListRef.style.marginLeft = -(this.itemIndex * this.itemDistance) + 'px' // 通过marginLeft来改变元素位置，实现移动
    },
    leftMoveHover: function () {
      if (this.isLeftEnd) {
        this.leftMoveRef.style.cursor = 'default'
      } else {
        this.leftMoveRef.style.cursor = 'pointer'
      }
    },
    rightMoveHover: function () {
      if (this.isRightEnd) {
        this.rightMoveRef.style.cursor = 'default'
      } else {
        this.rightMoveRef.style.cursor = 'pointer'
      }
    },
    leftMoveLeave: function () {
      this.leftMoveRef.style.cursor = 'default'
    },
    rightMoveLeave: function () {
      this.rightMoveRef.style.cursor = 'default'
    }
  },
  watch: {
    isLeftEnd: function (curV) {
      if (curV) {
        /* 通过改变透明度来呈现enable与disable的效果
        * 而不是通过切换两种颜色来呈现enable与disable的效果
        */
        this.leftMoveRef.style.opacity = '0.4'
        this.leftMoveRef.style.cursor = 'default'
      } else {
        this.leftMoveRef.style.opacity = '0.9'
      }
    },
    isRightEnd: function (curV) {
      if (curV) {
        this.rightMoveRef.style.opacity = '0.4'
        this.rightMoveRef.style.cursor = 'default'
      } else {
        this.rightMoveRef.style.opacity = '0.9'
      }
    }
  },
  props: {
  }
}
</script>

<style lang="scss" scoped="scoped">
  @import '@scss/base.scss'; //; is needed
  .container {
  }
  .content {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: $WIDTH;
    height: 450px;
  }
  .content_area {
    position: absolute;
    width: inherit;
    height: 340px;
  }
  .content_container {
    display: inline-block;
    position: absolute;
    height: 340px;
    width: 992px;
    overflow: hidden;
  }
  .content_commodity {
    width: 3720px;
    margin-left: 0;
    transition: margin-left 0.5s ease; /* 固定长度的容器内滚动*/
  }
  .inline {
    display: inline-block;
    margin-left: 14px;
  }
  .left_move {
    display: inline-block;
    position:  absolute;
    right: 36px; /* 右边矩形长度加它左右宽度*/
    bottom: 10px;
    width: 34px;
    height: 22px;
    border: 1px solid #b5b5b5;
    border-right: hidden; /* notice */
    color: #b5b5b5;
  }
  .left_move:before{
    content: attr(data-beforeData);
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto; /* 水平垂直居中 */
    width: 8px;
    height: 8px;
    border: 2px solid #707070;
    border-right: hidden;
    border-bottom: hidden;
    transform: rotate(-45deg); /* remember*/
  }
  .right_move {
    display: inline-block;
    position: absolute;
    right: 0; /* 靠右 */
    bottom: 10px;
    width: 34px;
    height: 22px;
    border: 1px solid #b5b5b5;
    color: #b5b5b5;
  }
  .right_move:before{
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto; /* 水平垂直居中 */
    content: '';
    width: 8px;
    height: 8px;
    border: 2px solid #707070;
    border-right: hidden;
    border-bottom: hidden;
    transform: rotate(135deg); /* remember*/
  }
</style>
