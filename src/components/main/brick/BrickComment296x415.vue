<template>
  <div class="container">
    <div class="content">
      <a class="img"><img :src="commodity.image"></a>
      <a class="comment">{{commodity.comment.content}}</a>
      <p class="writer">来自于{{commodity.comment.user_name}}的评价</p>
      <div class="desc">
        <a class="title">{{commodity.title}}</a>
        <span class="sepa">|</span>
        <span class="price">{{commodity.sale_price}}元</span>
      </div>
    </div>
  </div>
</template>

<script>
import {PLACEHOLDER_IMAGE} from '@/public/CONSTANT.js'
export default {
  name: 'BrickComment296x415',
  data () {
    return {
    }
  },
  props: {
    commodity: {
      type: Object,
      default () {
        return {
          area_id: '38',
          adv_id: '18731',
          space_id: '223',
          goods_id: '2173700036',
          url: 'http://www.mi.com/carair/',
          title: '米家车载空气净化器（USB车充版） 灰色',
          mat_id: '4361',
          sale_price: '449',
          origin_price: '',
          image: PLACEHOLDER_IMAGE,
          image_hd: PLACEHOLDER_IMAGE,
          desc: '',
          sub_title: '',
          commodity_id: '1173700028',
          new_window: '0',
          free_ship: '0',
          buy_give: '0',
          is_discount: '0',
          is_new: '0',
          sort: '1',
          comment: {
            content: '外形简洁大方，大爱小米！全家人都在用小米的产品，真心不错，最主要的是性价比高。附图，给客服妹子一个大...',
            comment_id: '141831535',
            user_name: '酸小妞～！',
            user_avatar: 'https://s1.mi-img.com/mfsv2/avatar/fdsc3/p01RkMEW4kZg/JZSIljO5dgzQab_90.jpg',
            add_time: '1488080684'
          },
          log_code: '31pchomecomment001005#t=normal&act=other&page=home&bid=3030357.1&pid=2173700036&adm=4361'
        }
      }
    }
  }
}
</script>

<style scoped>
  a {
    cursor: pointer;
  }
  .container {
    height: 415px; /* 与content高度一致，否则在外部margin-top：2px底部会有2px的空隙*/
  }
  .content {
    width:296px;
    height: 415px;
    background-color: #ffffff;
    /*border: 1px solid red;*/
  }
  .img {
    display: block;
  }
  img {
    width: 296px;
    height: 220px;
  }
  .comment {
    display: block;
    margin-top: 25px;
    margin-left: auto;
    margin-right: auto; /* 水平居中*/
    color: black;
    left: 0;
    right: 0;
    width: 240px;
    height: 72px;
    font-size: 0.9rem;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .writer {
    margin-top: 15px;
    font-size: 0.75rem;
    margin-left: 28px;
    width: 240px;
    height: 18px;
    color: #919191;
  }
  .desc {
    position: relative;
    font-size: 0.75rem;
    width: 236px;
    height: 22px;
  }
  .title {
    display: inline-block; /* 行内元素width无效，要设置为行内块元素，max-width才有效*/
    max-width: 155px; /* 最大宽度 */
    margin-left: 28px;
    font-size: 0.8rem;
    color: black;
    height: 18px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space:nowrap; /* 使text-overflow: ellipse有效*/
  }
  .sepa {
    display: inline-block; /* 为了与.title保持一致，实现与其对齐，如果只是行内元素，会比title低一点*/
    margin-left: 3px;
    margin-right: 2px;
    color: #a8a8a8;
    font-size: 0.8rem;
    overflow: hidden; /* 为了与.title保持一致，实现与其对齐，原因不明*/
  }
  .price {
    display: inline-block; /* 为了与.title保持一致，实现与其对齐*/
    max-width: 38px; /* 最大宽度 */
    height: 18px;
    font-size: 0.8rem;
    color: #ff5a37;
    overflow: hidden; /* 为了与.title保持一致，实现与其对齐，原因不明*/
  }
</style>
