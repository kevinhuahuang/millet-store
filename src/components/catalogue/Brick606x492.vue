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
        <a class="button" :href="commodity.pc_url">{{commodity.btntxt}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Brick606x492',
  data () {
    return {}
  },
  mounted () {},
  props: {
    commodity: {
      type: Object,
      default () {
        return {
          'img_url': '//i8.mifile.cn/b2c-mimall-media/5f7afe654efeca5b8b1b6323371586ba.jpg?w=1212&h=716',
          'img_url_webp': '//i8.mifile.cn/v1/a1/9c0c6861-66e1-ccbe-f7e9-400ef206cdb5.webp?w=1212&h=716',
          'img_url_color': '#D2AE9A',
          'product_id': '6222',
          'product_rebate': {
            '1': '约返11.99元',
            '2': '约返11.99元',
            '3': '约返11.99元',
            '4': '约返11.99元'
          },
          'is_stand_img': false,
          'btn_txt': '立即购买',
          'product_name': '小米电视4A 32英寸',
          'product_brief': '人工智能系统，高清液晶屏',
          'product_price': 799,
          'product_org_price': 999,
          'show_price_qi': false,
          'action': {
            'type': 'product',
            'path': '6222',
            'login': false,
            'log_code': '317487pcactivityproduction_list_two002003#t=product&act=other&page=activity&page_id=7487&bid=3345242.2&pid=6222'
          },
          'pc_url': '//item.mi.com/product/6222.html',
          'btntxt': '立即购买'
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
    height: 492px;
    background-color: white;
    /*border: 1px solid grey;*/
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  .img {
    display: block; /* 使行内元素的宽度与高度有效果 */
    width: 606px;
    height: 358px;
    overflow: hidden; /* 超出部分不显示 */
  }
  img {
    width: 606px;
    height: 358px;
    transition: all 0.5s linear;
  }
  img:hover {
    transform: scale(1.05, 1.05); /* 放大图片 */
  }
  .des {
    width: 606px;
    height: 142px;
  }
  .title {
    display: block;
    margin-left: 50px;
    margin-top: 25px;
    font-size: 1.4rem;
    color: #2a2a2a;
  }
  .brief {
    display: inline-block;
    margin-left: 50px;
    font-size: 0.9rem;
    line-height: 1.6rem;
    color: #898989;
  }
  .price {
    position: absolute;
    right: 50px;
    bottom: 70px;
    display: inline-block;
    font-size: 0.75rem;  /* "元起" 字体大小*/
  }
  .sale {
    font-size: 1.6rem;
    font-weight: normal;
    color: #ff6700;
    line-height: 0.9rem;
  }
  .original {
    font-size: 0.75rem;
    color: grey;
  }
  .button {
    position:  absolute;
    right: 50px;
    bottom: 30px;
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
