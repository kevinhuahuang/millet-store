<template>
  <div class="container">
    <div class="content">
      <a :href="itemProp.pc_url"><img :src="itemProp.img_url_webp"></a>
      <p class="name">{{itemProp.product_name}}</p>
      <p class="brief">{{itemProp.product_brief}}</p>
      <p class="price"><span class="strong">{{itemProp.product_price}}</span> 元</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Brick400x376',
  data () {
    return {}
  },
  mounted () {},
  props: {
    itemProp: {
      type: Object,
      default () {
        return {
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
        }
      }
    }
  }
}
</script>

<style scoped>
  .container { /* 必要，无外层container，在父元素flex的布局下，文字与图片会错乱*/
  }
  .content {
    position: relative; /* absolute会影响外层父元素 flex无法正常布局*/
    width:400px;
    height: 376px;
    text-align: center;
    /*border: 1px solid black;*/
  }
  img {
    width: 400px;
    height: 266px;
  }
  .name {
    display: block;
    margin-top: 10px;
    font-size: 1.2rem;
    color: #3b3b3b;
  }
  .brief {
    margin-top: -15px;
    font-size: 0.85rem;
    color: grey;
  }
  .price {
    margin-top: -10px;
    font-size: 0.75rem;
    color: orangered;
  }
  .strong {
    font-size: 1.3rem;
  }
</style>
