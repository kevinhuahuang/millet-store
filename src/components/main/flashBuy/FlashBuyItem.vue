<template>
  <div class="container">
    <div class="content" :style="{borderColor:borderTopColor}"> <!--绑定上边框的颜色-->
      <div>
        <div class="label_text_container"> <!--占据高度位置，子内容显示与不显示其兄弟元素位置都不改变-->
          <div v-if="commodity.label_text.length > 0" class="label_text">{{commodity.label_text}}</div>
        </div>
        <a class="img">
          <img :src="commodity.pc_img">
        </a>
        <div class="description">
          <h1 class="desc_name">{{commodity.goods_name}}</h1>
          <p class="desc_pro" >{{commodity.desc}}</p>
          <!--父元素text-align:center，下面两个行内元素自动水平居中-->
          <p class="desc_price" >{{commodity.seckill_Price}}元</p><del class="desc_price_good">{{commodity.goods_price}}元</del> <!--使用<del>加中划线-->
        </div>
      </div>
      <a class="flash_href background"> <!--跳转到flashBuy页面--><!--用一个透明度为0.02的黑色背景覆盖整个内容，让图片背景（白色）与整个内容背景融为一体-->
      </a>
    </div>
  </div>
</template>

<script>
import {PLACEHOLDER_IMAGE} from '@/public/CONSTANT.js'
export default {
  name: 'FlashBuyItem',
  props: {
    commodity: {
      type: Object,
      default: function () {
        return {
          goods_id: '2180500004',
          product_id: '7695',
          goods_name: 'MADV Mini 全景相机 黑色',
          desc: '360°全景拍摄，全景直播',
          seckill_type: 'seckill',
          goods_price: '599',
          seckill_Price: '299.5',
          discount_img: PLACEHOLDER_IMAGE,
          img: PLACEHOLDER_IMAGE,
          pc_img: PLACEHOLDER_IMAGE,
          label_text: '5折秒杀',
          is_test: '0',
          action: {
            log_code: '31activity_homeseckill#goodsid=2180500004&start_time=1544148000&end_time=1544155020'
          }
        }
      }
    },
    borderTopColor: {
      type: String,
      default: 'blue'
    }
  }
}
</script>

<style scoped>
  .container {
    width: 234px;
    height: 340px;
    background: #fff;
    z-index: 2;
    /*border: 1px solid black;*/
  }
  .content {
    position: absolute;
    width: 234px;
    height: 339px;
    border-top: 1px solid black; /* 颜色由父组件改变 */
    text-align: center;
  }
  .flash_href {
    position: absolute;
    top: 0;
    cursor: pointer;
  }
  .background {
    display: block;
    width: 234px;
    height: 340px;
    background-color: rgba(0, 0, 0, 0.02); /* import 用一个透明度为0.02的黑色背景覆盖整个内容，让图片背景(白色)与整个内容背景融为一体*/
    /*border: 1px solid red;*/
  }
  .img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    /* 水平居中,相对于父元素 因为本元素没设置absolute,而父元素设置了absolute*/
    /* 父元素text-align:center并不能让其居中*/
    left: 0;
    right: 0;
    width: 160px; /* 并未设置高度，高度由子元素决定 */
    color: #757575;
    /*border: 1px solid red;*/
  }
  img {
    margin-top: 30px;
    width: 160px;
    height: 160px;
  }
  .label_text_container { /* 占据高度*/
    height: 20px;
  }
  .label_text {
    left: 0;
    right: 0;
    margin: auto; /* 水平居中 */
    width: 64px; /* 固定的宽度 */
    height: 20px;
    font-size: 0.75rem;
    background-color: red;
    color: white;
    line-height: 20px;
  }
  .description {
    margin-top: 10px;
    text-align: center;
  }
  .desc_name {
    height: 20px; /* 固定的高度，不换行*/
    text-overflow: ellipsis; /* 未显示的文本以省略号显示*/
    overflow: hidden;
    font-size: 0.9rem; /* 12px */
  }
  .desc_pro {
    height: 18px;
    margin: 0 20px 12px 20px;
    font-size: 0.75rem; /* 12px */
    color: #b0b0b0;
    white-space: nowrap; /* 不换行 */
    text-overflow: ellipsis; /* 未显示的文本以省略号显示*/
    overflow: hidden; /* 未显示的文本隐藏*/
  }
  .desc_price {
    display: inline;
    color: #fa6509;
    font-size: 0.8rem; /* 12px */
  }
  .desc_price_good {
    /*display:inline; 多余，本身就是行内元素*/
    color: grey;
    font-size: 0.8rem; /* 12px */
    margin-left:10px;
  }
</style>
