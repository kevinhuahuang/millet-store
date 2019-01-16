<template>
  <div class="commodity_navigator"> <!--宽度无限-->
    <div class="header"> <!--宽度固定 水平居中-->
      <div class="header_content">
        <div class="left">
          <img style="display:inline" src="@static/images/logo.jpg"/>
        </div>
        <div class="middle">
          <div class="commodity_content">
            <a class="navigator_item" @mouseenter="leftCommodityHover" @mouseleave="leftCommodityOut">全部商品分类</a>
            <a v-for="(key, index) in listArray" v-bind:key="index"
               @mouseenter="hoverOperate(index)"
               @mouseleave="mouseOutOperate">
              {{key}}
            </a>
            <a class="navigator_item">服务</a>
            <a class="navigator_item">社区</a>
          </div>
        </div>
        <div class="right">search</div>
      </div>
    </div>
    <div  class="commodity_display" ref="sixcommodity"  @mouseenter="listHover" @mouseleave="listOut">
      <HeaderNavigatorItemList :commodities="sixCommodity"></HeaderNavigatorItemList>
    </div>
    <div class="left_navigator" ref="leftNavigator"  @mouseenter="leftNavigatorHover" @mouseleave="leftNavigatorOut">
      <left-navigator-popup></left-navigator-popup>
    </div>
  </div>
</template>

<script>
import listData from '../../../assets/json/main/navHeader.json'
import HeaderNavigatorItemList from './HeaderNavigatorItemList.vue'
import LeftNavigatorPopup from '../leftNavigator/LeftNavigatorPopup'
export default {
  name: 'HeaderNavigatorWithLeft',
  components: {LeftNavigatorPopup, HeaderNavigatorItemList},
  data () {
    return {
      listArray: [],
      displayArea: null,
      commodityType: 0,
      sixCommodity: null,
      commodityData: [],
      isNavigatorHover: false,
      isNavigatorOut: true,
      isListOut: false,
      isListHover: false,
      leftNavigator: null,
      isLeftCommodityHover: false,
      isLeftCommodityOut: false,
      isLeftNavigatorOut: false,
      isLeftNavigatorHover: false
    }
  },
  created: function () { // mounted 前把数据准备好
    this.displayArea = this.$refs.show
    Object.keys(listData).forEach(key => { // JSON无length属性，for in会遍历继承属性，虽然它并没有继承属性
      this.listArray.push(key)
      this.commodityData.push(listData[key])
    })
    this.listArray.splice(this.listArray.length - 2, 2) // 删除后面两个子项
    this.sixCommodity = listData[this.listArray[0]]
  },
  mounted: function () {
    // console.log(this.listArray)
  },
  methods: {
    hoverOperate: function (type) {
      this.commodityType = type
      this.$refs.sixcommodity.style.height = '236px'
      this.isNavigatorHover = true
      this.isNavigatorOut = false
      this.isListHover = false
      this.isListOut = true
    },
    leftCommodityHover: function () {
      this.$refs.leftNavigator.style.height = '465px' // 比实际的高度大2，用来显示边界，否则，边界被切掉了
      this.isLeftCommodityHover = true
      this.isLeftCommodityOut = false
      this.isLeftNavigatorHover = false
      this.isLeftNavigatorOut = true
    },
    mouseOutOperate: function () {
      this.isNavigatorHover = false
      this.isNavigatorOut = true
      setTimeout(this.hideList, 100) // 延时100毫秒再关闭
    },
    leftCommodityOut: function () {
      this.isLeftCommodityHover = false
      this.isLeftCommodityOut = true
      setTimeout(this.hideLeftNavigator, 100) // 延时100毫秒再关闭
    },
    listHover: function () {
      this.isListHover = true
      this.isListOut = false
    },
    listOut: function () {
      this.isListHover = false
      this.isListOut = true
      setTimeout(this.hideList, 100) // 延时100毫秒再关闭
    },
    hideList: function () {
      // console.log(this.isListOut + ' : ' + this.isNavigatorOut)
      if (this.isListOut && this.isNavigatorOut) {
        this.$refs.sixcommodity.style.height = '0'
      }
    },
    leftNavigatorHover: function () {
      this.isLeftNavigatorHover = true
      this.isLeftNavigatorOut = false
    },
    leftNavigatorOut: function () {
      this.isLeftNavigatorOut = true
      this.isLeftNavigatorHover = false
      setTimeout(this.hideLeftNavigator, 100) // 延时100毫秒再关闭
    },
    hideLeftNavigator: function () {
      if (this.isLeftCommodityOut && this.isLeftNavigatorOut) {
        this.$refs.leftNavigator.style.height = '0'
      }
    }
  },
  props: {
  },
  watch: {
    commodityType (curVal, oldVal) {
      this.sixCommodity = listData[this.listArray[curVal]]
    }
  }
}
</script>

<style lang="scss" scoped="">
  @import '@scss/base.scss';
  $header_height: 100px;
  $font_size: 1rem;
  .commodity_navigator {
    position: relative;
    height: $header_height;
  }
  .header {
    /*position: relative;*/
    height: $header_height;
    width: $WIDTH;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto; /* 水平居中*/

  }
  .header_content {
    display: flex;
    /*所有元素平铺在同一行上，主要分为三大部分*/
    /*左边：logo（固定宽度） */
    /*中间：产品导航（动态宽度） */
    /*右边：搜索（固定宽度） */
    flex-direction: row;
    justify-content: space-between;
    width: $WIDTH;
    height: $header_height;
    /*border: 1px solid gold;*/
  }
  .left { /* 因为父元素使用了flex 不需要position: absolute*/
    height: inherit; /*flex(direction:row)布局下的block子元素，高度继承父元素，宽度为0。 非flex布局下，高度为0，宽度继承父元素*/
    width: 50px; /*需设置此值 img为absolute，无法让父元素拥有它一样的宽度*/
    img {
      position: absolute; /* 必须(改成relative无效)，因此也脱离了Left的流，img的宽度并不会影响父元素left的宽度*/
      top: 0;
      bottom: 0;
      margin:auto; /*图片垂直居中*/
      cursor: pointer;
      width: 50px;
    }
    /*border: 1px solid blue;*/
  }
  .middle { /* 因为父元素使用了flex 不需要position: absolute*/
    /*border: 1px solid #ff6d10;*/
  }
  .right { /* 因为父元素使用了flex 不需要position: absolute*/
    top: 0;
    bottom: 0;
    margin-top:auto; /*搜索框垂直居中*/
    margin-bottom: auto; /*margin-left与margin-right不能设置为auto,否则将导致flex布局失效*/
    width: 300px;
    height: 50px;
    line-height: 50px; /*框内文字垂直居中*/
    border: 1px solid grey;
  }
  .promotion {
  }
  .commodity_content {
    display: inline-block;  /*行内元素，默认高度与font-size和line-height有关*/
    a {
      line-height: $header_height; /* a元素垂直居中，通过文本的居中，形成了元素的居中*/
      cursor: pointer;
      text-decoration: none;
      color: black;
      font-size: $font_size;
      margin-left: 15px; /*间隙*/
    }
    a:hover {
      color: #ff6700;
    }
    /*border: 1px solid aqua;*/
  }
  .navigator_item {
    margin-left: 15px; /* 间隙*/
    color: black;
  }
  .commodity_display {
    /* 正常的流，疑惑的是当弹出元素的高度从0变为不为0时，父元素（非本元素）下面的元素位置并无变化，它是怎么脱离正常的流的
    它并没有脱离正常的流，只是它的父元素block设置了固定的高度，而作为子元素的它，高度大小并不会影响父元素的高度，
    因此也不会影响父元素的兄弟元素的高度，但会影响自己下面的兄弟元素的位置
    */
    background: white;
    left: 0;
    right: 0;
    height: 0;
    transition: all 0.3s; /* 隐藏与显示间的切换动画*/
    overflow: hidden; /* important*/
  }
  .left_navigator {
    /* 正常的流，疑惑的是当弹出元素的高度从0变为不为0时，父元素（非本元素）下面的元素位置并无变化，它是怎么脱离正常的流的
    它并没有脱离正常的流，只是它的父元素block设置了固定的高度，而作为子元素的它，高度大小并不会影响父元素的高度，
    因此也不会影响父元素的兄弟元素的高度，但会影响自己下面的兄弟元素的位置
    */
    left: 0;
    right: 0;
    height: 0;
    width: 1226px;
    margin: auto;
    transition: all 0.3s; /* 隐藏与显示间的切换动画 */
    overflow: hidden; /* important */
  }
</style>
