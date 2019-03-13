<template>
  <div class="container">
    <div style="position:absolute; height:inherit">
      <a class="content" :href="commodity.url">
        <img :src="commodity.img"><span class="description">{{commodity.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
import {PLACEHOLDER_IMAGE} from '@/public/CONSTANT.js'
export default {
  name: 'LeftNavigatorItem',
  props: {
    commodity: {
      type: Object,
      default () {
        return {
          title: '米家激光投影电视',
          url: 'https://www.mi.com/laser-projection/',
          img: PLACEHOLDER_IMAGE,
          img_hd: PLACEHOLDER_IMAGE,
          is_buy: 0,
          buy_url: '',
          list_image: '',
          list_image_hd: ''
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
  $content_height: 40px;
  * {
    user-select: none;
  }
  a {
    text-decoration: none;
  }
  .container {
    width: 248px;
    height: 76px;
    background-color: white;
    /*border: 1px solid grey;*/
  }
  .content { /* 元素居中*/
    position: absolute;
    background-color: white;
    height: $content_height;
    width: 200px;
    margin: auto; /**/
    top: 0;
    bottom: 0;
    /*border: 1px solid grey;*/
  }
  img { /* img 为行内元素*/
    margin-left: 1.5rem;
    width: 40px;
    height: $content_height;
    vertical-align: bottom; /* 消除因为基线对齐则导致后面的文本不居中，位置会有所下移的问题
    疑问：此处设置font-size:0与line-height:0都不能消除基线对齐的问题 */
    /*border: 1px solid grey;*/
  }
  .description {
    position: absolute; /* 脱离流，不受前面的img影响，在父元素中居中，或者设置img的vertical-align:bottom或middle
    absolute会让行内无素加上block的作用，成为inline-block */
    display: inline-block;
    margin-left: 0.8rem;
    line-height: $content_height; /* 相对于父元素 垂直居中 在不设置height的情况，height值为设置的line-height值*/
    font-size: 0.8em;
    color: black;
    overflow: hidden;
    white-space: nowrap; /* 只在一行显示文本*/
    /*border: 1px solid grey;*/
  }
  .description:hover {
    color: #ff8a09;
  }
</style>
