<template>
  <div class="container">
    <div class="content">
      <div class="left_area"> <!--left与right各占50%的宽度，display:inline-block-->
        <div class="text_area">
          <a class="title" :href="commodity.url">{{commodity.title}}</a>
          <p class="price">{{commodity.sale_price}}元</p>
        </div>
      </div>
      <div class="right_area">
      <a class="img_area" :href="commodity.url">
        <img :src="commodity.image">
      </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Brick234x143',
  data: function () {
    return {
    }
  },
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
          image: '//i1.mifile.cn/a1/pms_1537323963.1278763!220x220.jpg',
          image_hd: '//i1.mifile.cn/a1/pms_1537323963.1278763!440x440.jpg',
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
    }
  }
}
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  .container {
    width: 234px;
    height: 143px;
    background: white;
  }
  .content {
    position: relative;
    width: inherit;
    height: inherit;
  }
  .left_area {
    position: relative;
    display: inline-block;
    width: 50%;
    height: inherit;
    /*border: 1px solid royalblue;*/
  }
  .text_area {
    position: absolute;
    height: 50%;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 20px;
  }
  .right_area {
    position: absolute;
    display: inline-block;
    width: 50%;
    height: inherit;
    /*border: 1px solid #e13aa1;*/
  }
  .img_area {
    cursor: pointer;
    position: absolute; /* 设置display: block时，只能水平居中，垂直不居中，与设置display:relative一样，但此并不是display的默认值*/
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 80px;
    height: 80px;
    /*border: 1px solid black;*/
  }
  img {
    width: 80px;
    height: 80px;
  }
  .title, .price {
    display: block; /* a,p是行内元素，行内元素设置width无效*/
    width: 94px;
    height: 21px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: black;
    font-size: 0.8rem;
  }
  .title {
    cursor: pointer;
    color: black;
  }
  .price {
    color: #ff751f;
  }
</style>
