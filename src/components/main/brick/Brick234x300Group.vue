<template>
  <div class="container">
    <div class="content">
      <brick234x143 :commodity="commodity" class="focuseable"></brick234x143>
      <div style="position:absolute; top:50%; margin-top:7px"> <!--绝对定位，阻止上面组件位置变化时对它的影响-->
        <brick234x143-more class="focuseable" :href="href"></brick234x143-more>
      </div>
    </div>
  </div>
</template>

<script>
import Brick234x143More from './Brick234x143More'
import Brick234x143 from './Brick234x143'
import {PLACEHOLDER_IMAGE} from '@/public/CONSTANT.js'
export default {
  name: 'Brick234x300Group',
  components: {Brick234x143, Brick234x143More},
  props: {
    commodity: {
      type: Object,
      default: function () {
        return {
          area_id: '58',
          adv_id: '20957',
          space_id: '333',
          goods_id: '2183600007',
          url: 'https://item.mi.com/product/10000117.html',
          title: '小米8 青春版 4GB+64GB',
          mat_id: '5580',
          sale_price: '1399',
          origin_price: '',
          image: PLACEHOLDER_IMAGE,
          image_hd: PLACEHOLDER_IMAGE,
          desc: '潮流镜面渐变色，2400万自拍旗舰',
          sub_title: '',
          commodity_id: '1183600009',
          new_window: '0',
          free_ship: '0',
          buy_give: '0',
          is_discount: '0',
          is_new: '1',
          sort: '1',
          comment: {
            content: '很惊艳，特别渐变色很好看，还能当镜子使用，哈哈哈，外...',
            comment_id: '157891240',
            user_name: '指玄',
            user_avatar: '',
            add_time: '1543597886'
          },
          log_code: '31pchomephone_right_0001019#t=normal&act=other&page=home&bid=3185161.1&pid=2183600007&adm=5580'
        }
      }
    },
    href: {
      type: String,
      default: 'http://www.mi.com/a/h/7879.html'
    }
  }
}
</script>

<style scoped>
  .container {
    width: 234px;
    height: 300px;
  }
  .content {
    position: absolute;
    width: inherit;
    height: inherit;
  }
  .focuseable {
    transition: margin-top 0.2s linear, box-shadow 0.2s linear; /* 多个属性用逗号隔开 */
  }
  .focuseable:hover { /* 上移2px*/
    margin-top: -3px;
    box-shadow: 0 4px 6px 6px #e5e5e5;
  }
</style>
