<template>
  <div class="container">
    <div class="content">
      <Brick606x482 :commodity="itemsProp[0]" class="focuseable"></Brick606x482>
      <Brick606x482 :commodity="itemsProp[1]" class="focuseable"></Brick606x482>
    </div>
  </div>
</template>

<script>
import {PLACEHOLDER_IMAGE} from '@/public/CONSTANT.js'
import Brick606x482 from './Brick606x482'
export default {
  name: 'ListTwoType1226x482',
  components: {Brick606x482},
  data () {
    return {}
  },
  mounted () {},
  props: {
    itemsProp: {
      type: Array,
      default () {
        return [
          {
            'img_url': PLACEHOLDER_IMAGE,
            'img_url_webp': PLACEHOLDER_IMAGE,
            'img_url_color': '#AC7152',
            'product_id': '7128',
            'product_rebate': {
              '1': '约返4.98元',
              '2': '约返4.98元',
              '3': '约返4.98元'
            },
            'is_stand_img': false,
            'btn_txt': '立即购买',
            'product_name': '米家床头灯',
            'product_brief': '如梦如幻，多彩光世界',
            'product_price': 249,
            'product_org_price': 249,
            'show_price_qi': false,
            'action': {
              'type': 'product',
              'path': '7128',
              'login': false,
              'log_code': '313507pcchannellist_two_type4001017#t=product&act=other&page=channel&page_id=3507&bid=3140542.1&pid=7128'
            },
            'pc_url': '//item.mi.com/1174200030.html',
            'btntxt': '立即购买'
          },
          {
            'img_url': PLACEHOLDER_IMAGE,
            'img_url_webp': PLACEHOLDER_IMAGE,
            'img_url_color': '#F0ECE7',
            'product_id': '6105',
            'product_rebate': {
              '1': '约返0.98元',
              '2': '约返0.98元',
              '3': '约返0.98元'
            },
            'is_stand_img': false,
            'btn_txt': '立即购买',
            'product_name': '米家感应夜灯',
            'product_brief': '举步之间，光明立现',
            'product_price': 49,
            'product_org_price': 49,
            'show_price_qi': false,
            'action': {
              'type': 'product',
              'path': '6105',
              'login': false,
              'log_code': '313507pcchannellist_two_type4002017#t=product&act=other&page=channel&page_id=3507&bid=3140542.2&pid=6105'
            },
            'pc_url': '//item.mi.com/1172500008.html',
            'btntxt': '立即购买'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped="" type="text/scss">
  @import '@scss/base.scss'; //; is needed
  .content {
    display: flex;
    justify-content: space-between;
    width: $WIDTH;
    height: 492px; /* 子组件高度为482*/
  }
  .focuseable {
    transition: margin-top 0.2s linear, box-shadow 0.2s linear; /* 多个属性用逗号隔开 */
  }
  .focuseable:hover { /* 上移2px*/
    margin-top: -3px;
    box-shadow: 0 4px 6px 6px #e5e5e5;
  }
</style>
