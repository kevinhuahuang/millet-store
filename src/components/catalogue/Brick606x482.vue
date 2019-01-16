<template>
  <div class="container">
    <div class="content">
      <a class="img" :href="commodity.pc_url"><img :src="commodity.img_url"></a>
      <div class="des">
        <a class="title"  :href="commodity.pc_url">{{commodity.product_name}}</a>
        <span class="brief">{{commodity.product_brief}}</span>
        <p class="price">
          <strong class="sale">{{commodity.product_price}}</strong>
          元起
          <del v-if="commodity.product_org_price" class="original">{{commodity.product_org_price}}元</del>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Brick606x482',
  data () {
    return {}
  },
  mounted () {},
  props: {
    commodity: {
      type: Object,
      default () {
        return {
          img_url: 'https://i8.mifile.cn/b2c-mimall-media/6d0aab16e4264a97f615ba3041d71b6c.jpg',
          img_url_webp: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6d0aab16e4264a97f615ba3041d71b6c.jpg',
          img_url_color: '#FFFFFF',
          product_id: '10000103',
          product_rebate: [],
          is_stand_img: false,
          btn_txt: '立即购买',
          product_name: '红米6',
          product_brief: '小屏高性能的双摄手机',
          product_price: 729,
          product_org_price: 799,
          show_price_qi: true,
          action: {
            type: 'product',
            path: '10000103',
            login: false,
            log_code: '311915pcchannellist_two_type4001019#t=product&act=other&page=channel&page_id=1915&bid=3248785.1&pid=10000103'
          },
          pc_url: '//item.mi.com/product/10000103.html',
          btntxt: '立即购买'
        }
      }
    }
  }
}
</script>

<style scoped>
  .container {
    width: 606px;
    height: 482px;
  }
  .content {
    position: relative;
    width: 606px;
    height: 482px;
    background-color: white;
    /*border: 1px solid grey;*/
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  .img {
    width: 606px;
    height: 358px;
  }
  img {
    width: 606px;
    height: 358px;
  }
  .des {
    width: 606px;
    height: 132px;
  }
  .title {
    display: block;
    margin-left: 50px;
    margin-top: 25px;
    font-size: 1.4rem;
    color: #545454;
  }
  .brief {
    display: inline-block;
    margin-left: 50px;
    font-size: 0.9rem;
    line-height: 1.6rem;
    color: #898989;
  }
  .price {
    display: inline-block;
    position: absolute;
    bottom: 30px; /* top难估算，靠近底部，设置bottom值*/
    right: 50px;
    /*margin-top: 0; !* 有意义 消除默认的margin-top，默认值未知*!*/
    font-size: 0.75rem;  /* "元起" 字体大小*/
  }
  .sale {
    font-size: 1.6rem;
    font-weight: normal;
    color: #ff6700;
    /*line-height: 0.9rem; !* 价格位置上移 *!*/
  }
  .original {
    font-size: 0.75rem;
    color: grey;
  }
</style>
