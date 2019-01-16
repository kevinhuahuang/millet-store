<template>
  <div class="container">
    <div class="content focuseable">
      <a class="img" :href="commodity.pc_url"><img :src="commodity.img_url"></a><div class="des"> <!--两个inline-block在写在一行 它们才没有间隙-->
        <a class="name leftGap" :href="commodity.pc_url">{{commodity.product_name}}</a>
        <p class="brief leftGap">{{commodity.product_brief}}</p>
        <p class="price leftGap">
          <strong class="sale">{{commodity.product_price}}</strong>元起
          <del  v-if="isDiscount" class="original">{{commodity.product_org_price}}</del>
        </p>
        <a class="know_more leftGap" :href="commodity.pc_url">了解产品 ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImgText1226x434',
  data () {
    return {
      commodity: null,
      isDiscount: false
    }
  },
  created () {
    this.commodity = this.itemsProp[0]
    this.isDiscount = !!this.commodity.product_org_price
    if (this.commodity.product_org_price) {
      this.isDiscount = !(this.commodity.product_price === this.commodity.product_org_price)
    }
  },
  props: {
    itemsProp: {
      type: Array,
      default () {
        return [
          {
            img_url: 'https://i8.mifile.cn/b2c-mimall-media/b8133772061204a88bc334001cd69b57.jpg?w=1708&h=868',
            img_url_webp: '//i8.mifile.cn/v1/a1/fe3eefbb-8c66-917d-6dec-fb6372983885.webp?w=1708&h=868',
            img_url_color: '#C4BFD0',
            product_id: '10000117',
            product_rebate: [],
            is_stand_img: false,
            btn_txt: '立即购买',
            product_name: '小米8 青春版',
            product_brief: '潮流镜面渐变色，2400万自拍旗舰',
            product_price: 1399,
            product_org_price: 1399,
            show_price_qi: true,
            action: {
              type: 'product',
              path: '10000117',
              login: false,
              log_code: '311915pcchannellist_img_text001003#t=product&act=other&page=channel&page_id=1915&bid=3005440.1&pid=10000117'
            },
            pc_url: '//item.mi.com/product/10000117.html',
            btntxt: '立即购买'
          }
        ]
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
    height: 440px; /* 比content高一些，content在container中上移，而不影响外部组件的流位置*/
  }
  .content {
    position: absolute; /* 消除对流的影响*/
    width: $WIDTH;
    height: 434px;
  }
  .img {
    display: inline-block;
    width: 854px;
    height: 434px;
    /*border: 1px solid red;*/
    vertical-align: top; /* 左边的图片与右边的描述顶部对齐*/
  }
  img {
    width: 854px;
    height: 434px;
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
  .focuseable {
    transition: margin-top 0.2s linear, box-shadow 0.2s linear; /* 多个属性用逗号隔开 */
  }
  .focuseable:hover { /* 上移2px*/
    margin-top: -3px;
    box-shadow: 0 4px 6px 6px #e5e5e5;
  }
</style>
