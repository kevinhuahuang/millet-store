<template>
  <div class="container_item">
    <div class="content">
      <a  class="img" :href="commodity.url"><img :src="commodity.img"></a>
      <a class="title"  :href="commodity.url">{{commodity.product_name}}</a>
    </div>
  </div>
</template>

<script>
import {PLACEHOLDER_IMAGE} from '@/public/CONSTANT.js'
export default {
  name: 'Brick246x161',
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
          img: PLACEHOLDER_IMAGE,
          product_name: '小米MIX 3',
          srcset: PLACEHOLDER_IMAGE
        }
      }
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
    cursor: pointer;
  }
  .container_item {
    width: 244px;  /* 设置小于表格的宽度 (1226-4)/5*/
    height: 161px;
  }
  .content {
    position: absolute;
    width: 240px;
    height: 161px;
    /*background: gray;*/
    text-align: center;
    /*border: 1px solid grey;*/
  }
  .img {
    display: block;
    margin-top: 30px;
  }
  img {
    width: 70px;
    height: 70px;
  }
  .title {
    display: block; /* 行内元素margin-top无效 */
    margin-top: 20px;
    font-size: 0.8rem;
    color: #8b8b8b;
  }
</style>
