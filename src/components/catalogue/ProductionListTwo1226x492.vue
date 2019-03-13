<template>
  <div class="container">
    <div class="content">
      <brick606x492 :commodity="itemsProp['items'][0]"></brick606x492>
      <brick606x492 :commodity="itemsProp['items'][1]"></brick606x492>
    </div>
  </div>
</template>

<script>
import Brick606x482 from './Brick606x482'
import Brick606x492 from './Brick606x492'
import {PLACEHOLDER_IMAGE} from '@/public/CONSTANT.js'
export default {
  name: 'ProductionListTwo1226x492',
  components: {Brick606x492, Brick606x482},
  data () {
    return {}
  },
  mounted () {},
  props: {
    itemsProp: {
      type: Object,
      default () {
        return {
          'top': 15,
          'bottom': '15',
          'bg_color': '#90231d',
          'btn_txt_color': '#ffffff',
          'btn_color': '#ea625b',
          'items': [
            {
              'img_url': PLACEHOLDER_IMAGE,
              'img_url_webp': PLACEHOLDER_IMAGE,
              'img_url_color': '#A997A3',
              'product_id': '8909',
              'product_rebate': {
                '1': '约返35.97元',
                '2': '约返35.97元',
                '3': '约返35.97元',
                '4': '约返35.97元'
              },
              'is_stand_img': false,
              'btn_txt': '立即购买',
              'product_name': '小米电视4C 40英寸',
              'product_brief': 'FHD全高清屏，钢琴烤漆',
              'product_price': 1199,
              'product_org_price': 1599,
              'show_price_qi': false,
              'action': {
                'type': 'product',
                'path': '8909',
                'login': false,
                'log_code': '317839pcactivityproduction_list_two001006#t=product&act=other&page=activity&page_id=7839&bid=3378270.1&pid=8909'
              },
              'pc_url': '//item.mi.com/product/8909.html',
              'btntxt': '立即购买'
            },
            {
              'img_url': PLACEHOLDER_IMAGE,
              'img_url_webp': PLACEHOLDER_IMAGE,
              'img_url_color': '#787878',
              'product_id': '5353',
              'product_rebate': {
                '1': '约返110.97元',
                '2': '约返110.97元',
                '3': '约返55.49元',
                '4': '约返55.49元'
              },
              'is_stand_img': false,
              'btn_txt': '立即购买',
              'product_name': '小米电视4A 65英寸',
              'product_brief': '4K HDR，人工智能语音系统',
              'product_price': 3699,
              'product_org_price': 3999,
              'show_price_qi': false,
              'action': {
                'type': 'product',
                'path': '5353',
                'login': false,
                'log_code': '317839pcactivityproduction_list_two002006#t=product&act=other&page=activity&page_id=7839&bid=3378270.2&pid=5353'
              },
              'pc_url': '//item.mi.com/product/5353.html',
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
  .container {
    position: relative;
    height: 510px;
    background: #c5302c;
  }
  .content {
    display: flex;
    justify-content: space-between;
    width: $WIDTH;
    height: 492px;
  }
</style>
