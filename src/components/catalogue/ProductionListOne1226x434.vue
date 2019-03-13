<template>
  <div class="container">
    <div class="content">
      <a class="img" :href="commodity.pc_url"><img :src="commodity.img_url"></a><div class="des"> <!--两个inline-block在写在一行 它们才没有间隙-->
      <a class="name leftGap" :href="commodity.pc_url">{{commodity.product_name}}</a>
      <p class="brief leftGap">{{commodity.product_brief}}</p>
      <p class="price leftGap">
        <strong class="sale">￥{{commodity.product_price}}</strong>
        <del  v-if="isDiscount" class="original">￥{{commodity.product_org_price}}</del>
      </p>
      <a class="button leftGap" :href="commodity.pc_url">{{commodity.btntxt}}</a>
    </div>
    </div>
  </div>
</template>

<script>
import {PLACEHOLDER_IMAGE} from '@/public/CONSTANT.js'
export default {
  name: 'ProductionListOne1226x434',
  data () {
    return {
      commodity: null,
      isDiscount: false
    }
  },
  created () {
    this.commodity = this.itemsProp['items'][0]
    this.isDiscount = !!this.commodity.product_org_price
    if (this.commodity.product_org_price) {
      this.isDiscount = !(this.commodity.product_price === this.commodity.product_org_price)
    }
  },
  props: {
    itemsProp: {
      type: Object,
      default () {
        return {
          'top': 15,
          'bottom': 0,
          'bg_color': '#90231d',
          'btn_txt_color': '#ffffff',
          'btn_color': '#ea625b',
          'items': [
            {
              'img_url': PLACEHOLDER_IMAGE,
              'img_url_webp': PLACEHOLDER_IMAGE,
              'img_url_color': '#CDAAAE',
              'product_id': '8993',
              'product_rebate': [
              ],
              'is_stand_img': false,
              'btn_txt': '立即购买',
              'product_name': '小米电视4S 75英寸',
              'product_brief': '4K HDR，人工智能语音，金属机身',
              'product_tag_array': [
                'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6399b25a77c05060a675f5dfb2e6e156.png?w=167&h=167'
              ],
              'product_price': 7999,
              'product_org_price': 7999,
              'show_price_qi': false,
              'action': {
                'type': 'product',
                'path': '8993',
                'login': false,
                'log_code': '317487pcactivityproduction_list_one001008#t=product&act=other&page=activity&page_id=7487&bid=3375386.1&pid=8993'
              },
              'pc_url': '//item.mi.com/product/8993.html',
              'btntxt': '立即购买'
            }
          ]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped="" type="text/scss">
  @import '@scss/base.scss'; //; is needed
  a {
    text-decoration: none;
    cursor: pointer;
  }
  .container {
    position: relative;
    width: $WIDTH;
    height: 452px;
  }
  .content {
    position: absolute;
    width: $WIDTH;
    height: 434px;
  }
  .img {
    display: inline-block;
    width: 854px;
    height: 434px;
    /*border: 1px solid red;*/
    vertical-align: top; /* 左边的图片与右边的描述顶部对齐*/
    overflow: hidden;
  }
  img {
    width: 854px;
    height: 434px;
    transition: all 0.5s linear;
  }
  img:hover {
    transform: scale(1.05, 1.05);
  }
  .des {
    display: inline-block;
    width: 372px;
    height: 434px;
    background-color: white;
    /*border: 1px solid black;*/
  }
  .leftGap {
    margin-left: 30px;
  }
  .name {
    display: block;
    font-size: 2.1rem;
    color: #4c4c4c;
    margin-top: 85px;
  }
  .brief {
    display: block;
    font-size: 0.8rem;
    color: #898989;
    margin-top: 0;
  }
  .price {
    display: block;
    margin-top: 45px;
    font-size: 0.75rem;
    color: #ff6700;
  }
  .sale {
    font-size: 1.6rem;
    color: #ff6700;
  }
  .original {
    font-size: 0.75rem;
    color: #898989;
  }
  .know_more {
    display: block;
    margin-top: 130px;
    font-size: 0.9rem;
    color: #898989;
  }
  .button {
    position:  absolute;
    bottom: 100px;
    display: block;
    width: 160px;
    height: 44px;
    background: #ea625b;
    color: #ffffff;
    text-align: center;
    line-height: 44px;
    border-radius: 2px;
  }
</style>
