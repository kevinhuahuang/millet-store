<template>
  <div class="container">
    <div class="content">
      <brick400x376 :itemProp="itemsProp[0]" class="focuseable"></brick400x376><brick400x376 :itemProp="itemsProp[1]" class="focuseable"></brick400x376><brick400x376 :itemProp="itemsProp[2]" class="focuseable"></brick400x376>
    </div>
  </div>
</template>

<script>
import Brick400x376 from './Brick400x376'
export default {
  name: 'ListThreeType1226x376',
  components: {Brick400x376},
  data () {
    return {
    }
  },
  mounted () {},
  props: {
    itemsProp: {
      type: Array,
      default () {
        return [
          {
            'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/10b5f3b4c06874fa919a27661d1e7394.jpg?w=1080&h=720',
            'img_url_webp': '//i8.mifile.cn/v1/a1/7c649660-1c0b-1ba1-17cb-a4f7c70b0de4.webp?w=1080&h=720',
            'img_url_color': '#EADCDA',
            'product_id': '3980',
            'product_rebate': [
            ],
            'is_stand_img': false,
            'product_name': '小米无人机保护架',
            'product_brief': '一组四片，有效保护螺旋桨',
            'product_price': 39,
            'product_org_price': 39,
            'show_price_qi': false,
            'action': {
              'type': 'product',
              'path': '3980',
              'login': false,
              'log_code': '313468pcchannellist_three_type001033#t=product&act=other&page=channel&page_id=3468&bid=3143004.1&pid=3980'
            },
            'pc_url': '//item.mi.com/1162600048.html'
          },
          {
            'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5782470ae075a6e48c44150830f3ca23.jpg?w=1080&h=720',
            'img_url_webp': '//i8.mifile.cn/v1/a1/bb5edf64-ff1f-6f48-ba02-9680f7343b86.webp?w=1080&h=720',
            'img_url_color': '#EBEBEA',
            'product_id': '3886',
            'product_rebate': [
            ],
            'is_stand_img': false,
            'product_name': '小米无人机螺旋桨',
            'product_brief': '尺寸大，惯量低，效率高',
            'product_price': 49,
            'product_org_price': 49,
            'show_price_qi': false,
            'action': {
              'type': 'product',
              'path': '3886',
              'login': false,
              'log_code': '313468pcchannellist_three_type002033#t=product&act=other&page=channel&page_id=3468&bid=3143004.2&pid=3886'
            },
            'pc_url': '//item.mi.com/1162400011.html'
          },
          {
            'img_url': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d43c053f591e1281b8bdeddcaf4e26c1.jpg?w=1080&h=720',
            'img_url_webp': '//i8.mifile.cn/v1/a1/eab67d0c-40fe-fd7b-9a9c-163153fa5e3e.webp?w=1080&h=720',
            'img_url_color': '#E5E6E7',
            'product_id': '4662',
            'product_rebate': [
            ],
            'is_stand_img': false,
            'product_name': '无人机电池 零售版',
            'product_brief': '超大电量，抽屉式电池仓',
            'product_price': 499,
            'product_org_price': 499,
            'show_price_qi': false,
            'action': {
              'type': 'product',
              'path': '4662',
              'login': false,
              'log_code': '313468pcchannellist_three_type003033#t=product&act=other&page=channel&page_id=3468&bid=3143004.3&pid=4662'
            },
            'pc_url': '//item.mi.com/1163900105.html'
          }
        ]
      }
    }
  }
}
</script>

<style scoped="scoped" lang="scss" type="text/scss">
  @import '@scss/base.scss'; //; is needed
  .content {
    display: flex;
    justify-content: space-between;
    width: $WIDTH;
    height: 376px;
    /*border: 1px solid red;*/
  }
  .focuseable {
    transition: margin-top 0.2s linear, box-shadow 0.2s linear; /* 多个属性用逗号隔开 */
  }
  .focuseable:hover { /* 上移2px*/
    margin-top: -3px;
    box-shadow: 0 4px 6px 6px #e5e5e5;
  }
</style>
