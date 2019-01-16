<template>
  <div class="commodity">
    <div class="placeholder"> <!--占位 防止该元素内容为空时，下面的元素位置变动-->
      <span  class="commodity_type"> <!--如果是div元素，width默认为父的width,无包裹特性-->
        <span v-if="commodity.flag" class="flag">
          <span class="empty"></span> <!--左空隙 可用margin-left替代-->
          {{commodity.flag}}
          <span class="empty"></span> <!--右空隙 可用margin-right替代-->
        </span> <!--外边框将根据内容而进行宽度width变化,margin撑大的是父元素的边框-->
      </span>
    </div>
    <a :href="commodity.url"><img :href="commodity.url" :src='commodity.img' class="commodity_img"/></a>
    <div class="commodity_model"> <!--用div占据高度，内容用span来显示，如果该元素内容为空，高度也不受内容的影响-->
      <a :href="commodity.url">{{commodity.title}}</a>
    </div>
    <span class="commodity_price">
      <span>{{commodity.price}}</span>
    </span>
  </div>
</template>

<script>
import {PLACEHOLDER_IMAGE} from '@/public/CONSTANT.js'
export default {
  name: 'HeaderNavigatorItem',
  data () {
    return {
    }
  },
  props: {
    commodity: {
      type: Object,
      default () {
        return {
          url: 'https://www.mi.com/mix3/',
          title: '小米MIX 3',
          img: PLACEHOLDER_IMAGE,
          flag: '处理器',
          price: '3299元起'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $font_size: 0.8rem;
  $mark_height: 1.2rem;
  $name_height: 1.0rem;
  a {
    text-decoration: none;
    color: black;
  }
  .commodity {
    width: 207px;
    height: 201px;
    text-align: center; /* 文本内容或元素居中 会被子元素继承*/
    /*background-color: beige;*/
    /*border: 1px solid black;*/
  }
  .placeholder {
    /* line-height: 1.2rem;  影响元素的top位置，值越大，位置就越下，*/
    /*小于或等于它的高度，与父元素顶部对齐，大于它的高度，位置下移。*/
    /*默认值猜测与font-size有关，顶部与父元素并不对齐，所以需要设置此值，可以有文字的子元素设置此值*/
    line-height: $mark_height;
  }
  .empty {
    display: inline-block; /* span无内容的情况下要设置为inline-block width和height才会有效 */
    width: 1rem;
  }
  .commodity_type {
    display: inline-block;
    /* span无内容的情况下要设置为inline-block width和height才会有效
    设置为block, width默认为父元素的width,height默认随内容变化（与font-size和line-height有关）,也可以设置为固定值
    设置为inline-block, width，height随内容而变化,无内容时默认都为0, 也可以设置为固定值 */
    position: relative; /* 设置relative或absolute(位置不正确) top才有效 */
    /*top: -1px;  1px的边框，上移1px, 上边框与父元素上边框重叠(假设父元素边框宽度为1px)，而不是位于父元素的边框下面, 但此处父元素无边框*/
  }
  .flag {
    display: inline-block;
    font-size: $font_size;
    /*margin-left: 1rem; !* 文字左边的空隙*!*/
    /*margin-right: 1rem; !* 文字右边的空隙*!*/
    line-height: $mark_height;
    border: 1px solid red;
    color: #ff6700;
    /*
    line-height值与元素高度height值相同，实现垂直居中
    line-height参考位置为本元素内容边框的顶部位置计算，非父元素
    当display:inline-block时，父元素为inline-block或block, line-height的值会影响父元素的高度height值，
    但当display:block时，则不会影响父元素的高度，但margin-top依旧会影响父元素的高度值
    */
    /*大大的疑问
    line-height不会改变本元素的设置的固定高度，
    父元素display:inline-block,本元素display: block情况下
    当此值小于或等于父元素高度时会影响它在父元素的位置，同时影响父元素在祖先元素中的位置，些越小，位置越往下，父元素也跟着下移，但文字位置不变
    当此值大于父元素高度时，会影响元素内部文字的高度位置，但不影响元素的高度位置，文字会脱离元素的内容框
    line-height小时，文字不动，内容框下移。
    line-height大时，文字下移，内容框不动
    而这个中间的参考值又是多少？？？？？
    父元素display:block,本元素display: block情况下
    line-height小时，文字上移，内容框不动。
    line-height大时，文字下移，内容框不动
    而这个中间的参考值又是多少？
    结论：inline-block高度位置会受子元素line-height，font-size，而block就不会
    内容框为什么会移动，为什么又不移动？？？？？？
    内容框的位置受文字的基线影响，这个基线的位置与font-size与line-height有关，
    font-size较大时，超出内容框的大小时，框不动，文字动
    font-size较大时，位置跑出内容，框不动，文字动
    font-size较小时，在内容框内，文字不动，框动
    line-height较小时，位置在内容框内，文字不动，框动。
    */
    /*
    没有设置line-height值，内容框位置不会动，设置font-size多大也不会.
    为了垂直居中，line-height设置与元素高度一致，但内容框会轻微下移，Line-height实现要设大1px或2px
    有一种方法可修补这个影响: font-size 改大。修改height值变小，并不会改变其位置。
    总的来说，高度位置是受font-size与line-height的共同影响
    */
    /*border: 1px solid black;*/
  }
  .commodity_img {
    cursor: pointer;
    margin-top: 12px;
    height: 110px;
    width: 160px; /* height auto be set for ration 320-220 */
    /*border: 1px solid blue;*/
  }
  .commodity_model {
    cursor: pointer;
    height: $name_height;
    margin-top: 12px;
    font-size: $font_size;
    /*border: 1px solid green;*/
  }
  .commodity_price {
    height: $name_height;
    margin-top: 5px;
    font-size: $font_size;
    color: red;
    /*border: 1px solid green;*/
  }
</style>
