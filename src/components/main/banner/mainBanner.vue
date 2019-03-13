<template>
  <div class="container">
    <a class="content" :href="commodity.url">
      <img :src="commodity.image">
    </a>
  </div>
</template>

<script>
import {PLACEHOLDER_IMAGE} from '@/public/CONSTANT.js'
export default {
  name: 'mainBanner',
  data: function () {
    return {
    }
  },
  props: {
    commodity: {
      type: Object,
      default: function () {
        return {
          area_id: '59',
          adv_id: '21039',
          space_id: '342',
          goods_id: '0',
          url: 'https://item.mi.com/product/10000122.html',
          title: '黑鲨开售',
          mat_id: '5642',
          sale_price: '',
          origin_price: '',
          image: PLACEHOLDER_IMAGE,
          image_hd: PLACEHOLDER_IMAGE,
          desc: '',
          sub_title: '',
          commodity_id: '0',
          new_window: '0',
          free_ship: '0',
          buy_give: '0',
          is_discount: '0',
          is_new: '0',
          sort: '1',
          comment: '',
          log_code: '31pchomebanner_1001011#t=normal&act=other&page=home&bid=3186790.1&adm=5642'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped="" type="text/scss">
  @import '@scss/base.scss'; // ; is needed
  .container {
  }
  .content {
    margin: auto 30px auto 30px;
    left: 0;
    right: 0;
    width: $WIDTH;
    height:120px;
  }
  img {
    width: $WIDTH;
    height:120px;
  }
</style>
