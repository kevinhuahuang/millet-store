<template>
  <div class="container">
    <div class="content">
      <!--<div class="light" :style="{backgroundColor:moreProp.style}"></div>-->
      <h2 class="type">{{titlePro}}</h2>
      <a class="title" :href="commodity.url">{{commodity.title}}</a>
      <a class="desc" :href="commodity.url">{{commodity.desc}}</a>
      <a class="price" :href="commodity.url">{{commodity.sale_price}}</a>
      <a class="img" :href="commodity.url"><img :src="commodity.image"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrickContentItem',
  data () {
    return {
    }
  },
  props: {
    commodity: {
      type: Object,
      default () {
        return {
          area_id: '39',
          adv_id: '13919',
          space_id: '233',
          goods_id: '0',
          url: 'http://www.duokan.com/book/120800',
          title: '哈利·波特与被诅咒的孩子',
          mat_id: '2573',
          sale_price: '29.37元',
          origin_price: '',
          image: '//i1.mifile.cn/a4/5e5da924-84e3-4959-9e25-5891cdf30757',
          image_hd: '//i1.mifile.cn/a4/704c0f9a-4e85-431e-962d-b87dbb54e23f',
          desc: '“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！ ',
          sub_title: '',
          commodity_id: '0',
          new_window: '0',
          free_ship: '0',
          buy_give: '0',
          is_discount: '0',
          is_new: '0',
          sort: '1',
          comment: '',
          log_code: '31pchomecontent_book001006#t=normal&act=other&page=home&bid=3030358.1&adm=2573'
        }
      }
    },
    titlePro: {
      type: String,
      default: '图书'
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
  .light {
    width: 296px;
    height: 1px;
  }
  .container {
    width: 296px;
    height: 420px;
    background-color: #ffffff;
  }
  .content{
    position:relative;
    width: 296px;
    height: 420px;
    text-align: center;
    /*border: 1px solid grey;*/
  }
  .type{
    width: 276px;
    height: 24px;
    font-size: 1rem;
    color: #ffb43b;
    margin-top: 50px;
  }
  .title {
    /*position: relative;*/
    /*margin-left: auto;*/
    /*margin-right: auto;*/
    /*left: 0;*/
    /*right: 0;*/
    display: block;
    margin-left: 30px;
    margin-right: 30px;
    /*width: 256px;*/
    height: 25px;
    font-size: 1.1rem;
    color: black;
  }
  .desc{
    display: block;
    /*position: relative;*/
    /*margin-left: auto;*/
    /*margin-right: auto;*/
    /*left: 0;*/
    /*right: 0;*/
    margin-top: 5px;
    margin-left: 40px;
    margin-right: 40px; /* 通过设置margin-left与margin-right来设置宽度，文本在容器内居中*/
    /* 直接设置宽度，文本在框内居中，但框靠左，文本相对整个外框不居中*/
    /*width: 202px;*/
    height: 34px;
    text-align: center;
    font-size: 0.75rem;
    color: #c3c3c3;
  }
  .price{
    /*position: relative;*/
    /*margin-left: auto;*/
    /*margin-right: auto;*/
    /*left: 0;*/
    /*right: 0;*/
    margin-top: 15px;
    display: block;
    /*width: 50px; 不设置宽度，默认宽度为父元素的宽度*/
    height: 16px;
    font-size: 0.8rem;
    color: black;
  }
  .img{
    display: block;
    /*position: relative;*/
    /*margin-left: auto;*/
    /*margin-right: auto;*/
    /*left: 0;*/
    /*right: 0;*/
    margin-top: 25px;
    /*width: 216px;*/
    height: 154px;
  }
</style>
