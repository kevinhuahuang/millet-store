<template>
  <div class="container">
    <a class="content" :href="commodity.url">
      <img :src="commodity.image">
    </a>
  </div>
</template>

<script>
export default {
  name: 'LeftBrick234x614',
  data: function () {
    return {}
  },
  props: {
    commodity: {
      type: Object,
      default: function () {
        return {
          area_id: '57',
          adv_id: '21046',
          space_id: '331',
          goods_id: '2184200002',
          url: 'https://www.mi.com/mix3/',
          title: '小米MIX 3 全网通版 6GB内存',
          mat_id: '5647',
          sale_price: '3299',
          origin_price: '',
          image: '//i1.mifile.cn/a4/xmad_15407792204208_jtrJc.jpg',
          image_hd: '//i1.mifile.cn/a4/xmad_15407792230672_OYZTw.jpg',
          desc: '',
          sub_title: '',
          commodity_id: '1184200013',
          new_window: '0',
          free_ship: '0',
          buy_give: '0',
          is_discount: '0',
          is_new: '0',
          sort: '1',
          comment: {
            content: '完美',
            comment_id: '157828294',
            user_name: '',
            user_avatar: '',
            add_time: '1543039081'
          },
          log_code: '31pchomephone_left001018#t=normal&act=other&page=home&bid=3185160.1&pid=2184200002&adm=5647'
        }
      }
    }
  }
}
</script>

<style scoped>
  .container {
    width: 234px;
    height: 614px;
  }
  .content {
    width: inherit;
    height: inherit;
  }
  img {
    width: 234px;
    height: 614px;
  }
</style>
