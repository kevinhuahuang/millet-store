<template>
  <div class="container">
    <div class="content">
      <div class="title">
        <segment-title com-type="智能" :link-array="linkArray" @get-link-index="getLinkIndex"></segment-title>
      </div>
      <div class="content_inside">
        <div class="left_area">
          <div :href="dataLeft[0]['url']" class="left_top focuseable"><img :src="dataLeft[0]['img']"></div>
          <div :href="dataLeft[1]['url']" class="left_bottom focuseable"><img :src="dataLeft[1]['img']"></div>
        </div>
        <div class="right_area">
          <right-brick234x300 v-for="(key, index) in dataRightArray[linkIndex].slice(0,7)" v-bind:key="index" :commodity="key" class="focuseable" :is-comment=true></right-brick234x300>
          <brick234x300-group :commodity="dataRightArray[linkIndex][7]" :href="linkArrayHref[linkIndex]"></brick234x300-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RightBrick234x300 from '../brick/RightBrick234x300'
import SegmentTitle from '../base/SegmentTitle'
import dataJson from '@assets/json/main/mi.json'
import Brick234x300Group from '../brick/Brick234x300Group'
export default {
  name: 'SegmentSmart',
  components: {Brick234x300Group, SegmentTitle, RightBrick234x300},
  data: function () {
    return {
      dataLeft: [],
      dataRight: [],
      dataRightArray: [],
      dataRightCur: [],
      dataRightEnd: [],
      linkArray: [],
      linkArrayHref: [],
      linkIndex: 2
    }
  },
  created: function () {
    let data = dataJson['smart']
    let dataLeft = data['left']
    this.dataLeft.push({'url': dataLeft[0]['url'], 'img': dataLeft[0]['image'], 'img_hd': dataLeft[0]['image_hd']})
    this.dataLeft.push({'url': dataLeft[1]['url'], 'img': dataLeft[1]['image'], 'img_hd': dataLeft[1]['image_hd']})
    this.dataRight = data['right']
    for (let i = 0; i < this.dataRight.length; i++) {
      this.linkArray.push(this.dataRight[i]['area_title'])
      this.linkArrayHref.push(this.dataRight[i]['area_url'])
      this.dataRightArray.push(this.dataRight[i]['items'])
    }
  },
  mounted: function () {
  },
  methods: {
    getLinkIndex: function (index) {
      this.linkIndex = index
    }
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
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: $WIDTH;
    height: 65px;
  }
  .content_inside {
    display: flex;
    justify-content: space-between;
  }
  .left_area {
    /*display: flex; */
    /*flex-direction: column;  margin-top第一行有效果，第二行margin-top小于或等于第一行与第二行的间隙时无效果*/
    /* 设置第二行margin-top大于第一行与第二行的间隙时，改变第一行margin-top也影响了第二行的位置,*/
    /* 是否是flex布局隐藏的使用了margin属性，弃用flex布局*/
    /*flex-wrap: wrap;*/ /* 垂直方向排列时，此语句无效*/
    /*justify-content: space-between;*/
    position: relative;
    width: 234px;
    height: 614px;
  }
  .left_top, .left_bottom {
    width: 234px;
    height: 300px;
    font-size: 0; /* 去除由幽灵空白节点，line-height，vertical-align产生于图片下方的一个空白间隙，并且会影响flex布局*/
  }
  .left_bottom {
    position: absolute;
    top: 314px;
  }
  img {
    width: 234px;
    height: 300px;
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
  .focuseable:hover { /* 上移2px*/
    margin-top: -3px;
    box-shadow: 0 4px 6px 6px #e5e5e5;
  }
</style>
