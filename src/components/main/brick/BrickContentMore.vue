<template>
  <div class="container">
    <div class="content">
      <!--<div class="light" :style="{backgroundColor:moreProp.style}"></div>-->
      <h2 class="title">{{moreProp.title}}</h2>
      <p class="desc">{{moreProp.desc}}</p>
      <a class="more" :href="moreProp.url" target="_blank">前往{{moreProp.text}}</a>
      <a class="img" :href="moreProp.url" target="_blank"><img :src="moreProp.image"></a>
    </div>
  </div>
</template>

<script>
import {PLACEHOLDER_IMAGE} from '@/public/CONSTANT.js'
export default {
  name: 'BrickContentMore',
  data () {
    return {
    }
  },
  props: {
    moreProp: {
      type: Object,
      default () {
        return {
          title: '图书',
          style: 'orange',
          image: PLACEHOLDER_IMAGE,
          url: 'http://www.duokan.com/list/1-1?from=xiaomi',
          desc: '海量好书，享受精品阅读时光 漂亮的中文排版，千万读者选择！',
          text: '多看阅读'
        }
      }
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
  a:link {
    color: #ffb43b;
  }
  a:visited {
    color: #ffb43b;
  }
  a:active {
    color: #ffb43b;
  }
  .container {
    width: 296px;
    height: 420px;
    /*border: 1px solid grey;*/
  }
  .light {
    width: 296px;
    height: 1px;
  }
  .content{
    position:relative;
    width: 296px;
    height: 420px;
    text-align: center;
    background-color: #ffffff;
    border: 1px solid transparent; /* 不设置border，content会下移，可能与父组件使用了flex布局有关，*/
    /* 去掉<div class="light"></div> 之前不会有此现象*/
  }
  .title{
    width: 276px;
    height: 24px;
    font-size: 1rem;
    color: #ffb43b;
    margin-top: 50px;
  }
  .desc{
    /*position: relative;*/
    /*margin-left: auto;*/
    /*margin-right: auto;*/
    /*left: 0;*/
    /*right: 0;*/
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 5px;
    display: block;
    /*width: 202px;*/
    height: 34px;
    text-align: center;
    font-size: 0.75rem;
    color: #c3c3c3;
  }
  .more {
    display: block; /* 让height与width有效*/
    left: 0;
    right: 0;
    margin: 20px auto auto;
    width: 120px;
    height: 30px;
    border: 1px solid orange;
    font-size: 0.75rem;
    line-height: 30px;
  }
  .img{ /* img是行内元素，可通过text-align:center在block中居中*/
    /*position: relative;*/
    /*margin-left: auto;*/
    /*margin-right: auto;*/
    /*left: 0;*/
    /*right: 0;*/
    display: block;
    margin-top: 25px;
    /*width: 216px;*/
    height: 154px;
  }
</style>
