<template>
  <div class="total">
    <div class="container">
      <div class="content"> <!--改为v-for-->
        <div v-for="(key ,index) in commodities" v-bind:key="index" class="item">
          <header-navigator-item :commodity=key></header-navigator-item>
          <span v-if="index < (commodities.length - 1)" class="separate"></span> <!--最后一个无分隔条-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNavigatorItem from './HeaderNavigatorItem'
import {PLACEHOLDER_IMAGE} from '@/public/CONSTANT.js'
export default {
  name: 'HeaderNavigatorItemList',
  components: {HeaderNavigatorItem},
  props: {
    commodities: {
      type: Array,
      default: function () {
        return [
          {
            'url': 'https://www.mi.com/mix3/',
            'title': '小米MIX 3',
            'img': PLACEHOLDER_IMAGE,
            'flag': '新品',
            'price': '3299元起'
          },
          {
            'url': 'https://www.mi.com/mix3/',
            'title': '小米MIX 4',
            'img': PLACEHOLDER_IMAGE,
            'flag': '新品',
            'price': '3299元起'
          },
          {
            'url': 'https://www.mi.com/mix3/',
            'title': '小米MIX 5',
            'img': PLACEHOLDER_IMAGE,
            'flag': '新品',
            'price': '3299元起'
          },
          {
            'url': 'https://www.mi.com/mix3/',
            'title': '小米MIX 6',
            'img': PLACEHOLDER_IMAGE,
            'flag': '新品',
            'price': '3299元起'
          },
          {
            'url': 'https://www.mi.com/mix3/',
            'title': '小米MIX 7',
            'img': PLACEHOLDER_IMAGE,
            'flag': '新品',
            'price': '3299元起'
          },
          {
            'url': 'https://www.mi.com/mix3/',
            'title': '小米MIX 8',
            'img': PLACEHOLDER_IMAGE,
            'flag': '新品',
            'price': '3299元起'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped="scoped" type="text/scss">
  @import "@scss/base.scss";
  .total {
    height: 230px;
    border-top: 1px solid #d3d3d3; /* border-top与box-shadow放在父元素，动画有些少差异，但不显示时，无法隐藏border-top与box-shadow*/
    box-shadow: 0 2px 2px 0 #dddddd; /* 底部阴影效果 x轴移位0，y轴下移2px,模糊度为2px,阴影扩展半径为0*/
  }
  .container {
    left: 0;
    right: 0;
    margin: auto; /*水平居中*/
    width: $WIDTH;
    height: 230px;
  }
  .content {
    display: flex; /* 默认direction:row   justify-content:space-between*/
    width: $WIDTH;
    height: 220px;
    .item { /*组件与份隔条使用flex布局，宽度为1226/6 = 204.333 flex自动分配，浏览器显示的是207*/
      display: flex; /* 默认direction:row   justify-content:space-between*/
      /*border: 1px solid red;*/
    }
  }
  .separate {
    display: inline-block;
    position: relative;
    width: 1px;
    height: 110px;
    top: 35px; /* 控制分隔条的位置*/
    background-color: #dddddd;
  }
</style>
