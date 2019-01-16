<template>
  <div class="container">
    <div class="content">
      <div class="title">
        <h3 style="display:inline-block">手机</h3>
        <a class="right_extent" :href="cellDataUrl">查看全部</a>
      </div>
      <div class="content_inside">
        <div class="left_area">
          <left-brick234x614 class="focuseable"></left-brick234x614>
        </div>
        <div class="right_area">
          <right-brick234x300 v-for="(key, index) in cellDataArray" v-bind:key="index" :commodity="key" class="focuseable" :is-comment=false></right-brick234x300>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RightBrick234x300 from '../brick/RightBrick234x300'
import LeftBrick234x614 from '../brick/LeftBrick234x614'
import phoneData from '@assets/json/main/mi.json'
import SegmentTitle from '../base/SegmentTitle'
export default {
  name: 'SegmentCellphone',
  components: {SegmentTitle, LeftBrick234x614, RightBrick234x300},
  data: function () {
    return {
      cellData: {},
      cellDataLeft: {},
      cellDataUrl: {},
      cellDataArray: [],
      linkArray: ['查看全部']
    }
  },
  created: function () {
    this.cellData = phoneData['phone']
    this.cellDataLeft = this.cellData['left'][0]
    this.cellDataUrl = this.cellData['right'][0]['area_url']
    this.cellDataArray = this.cellData['right'][0]['items']
  },
  mounted: function () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped="" type="text/scss">
  @import '@scss/base.scss'; //; is needed
  .container{
  }
  .content {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: $WIDTH;
    height: 685px;
    background-color: #f5f5f5
  }
  .title {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: $WIDTH;
    height: 65px;
  }
  .right_extent {
    position: absolute; /* 绝对布局，确定位置*/
    right: 2px;
    bottom: 25px;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    width: 92px;
    height: 17px;
    color: #424242;
  }
  .right_extent:hover{
    color: #fa6509;
  }
  .right_extent:before {
    position: absolute; /*必须*/
    content: '';
    right: 1px;
    top: 1px;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background: #b0b0b0;
  }
  .right_extent:hover:before {  /*notice hover在前 before在后*/
    background: #fa6509;
  }
  .right_extent:after {
    position: absolute;
    right: 9px;
    top: 8px;
    content: '';
    width: 5px;
    height: 5px;
    border: 2px solid white;
    border-left: hidden;
    border-bottom: hidden;
    transform: rotate(45deg); /* 旋转直角 */
  }
  .content_inside { /* 两部分  left_area  right_area*/
    display: flex;
    justify-content: space-between;
  }
  .left_area {
    width: 234px;
    height: 614px;
  }
  .right_area {
    margin-left: 14px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between; /*垂直方向 上下两个间隔为14px*/
    width: 978px;
    height: 614px;
  }
  .focuseable {
    transition: margin-top 0.2s linear, box-shadow 0.2s linear; /* 多个属性用逗号隔开 */
  }
  .focuseable:hover { /* 左移2px 上移2px*/
    margin-top: -3px;
    box-shadow: 0 4px 6px 6px #e5e5e5;
  }
</style>
