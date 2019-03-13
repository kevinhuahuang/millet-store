<template>
  <div class="container">
    <div class="content_brick">
      <div class="notice" ref="flagRef">{{flag}}</div>
      <a class="img_area" :href="commodity.url">
        <img :src="commodity.image">
      </a>
      <div class="description">
        <a  :href="commodity.url"><h5  class="des_title">{{commodity.title}}</h5></a>
        <div class="des_desc">{{commodity.desc}}</div>
        <div class="des_price">{{commodity.sale_price}}元</div><del v-if="commodity.origin_price.length > 0" class="price_del">{{commodity.origin_price}}元</del>
      </div>
      <div v-if="isComment && commodity.comment" class="popup">
        <p class="comment">{{commodity.comment.content}}</p>
        <p class="writer">来自于 {{commodity.comment.user_name}} 评价</p>
      </div>
    </div>
  </div>
</template>

<script>
import {PLACEHOLDER_IMAGE} from '@/public/CONSTANT.js'
export default {
  name: 'RightBrick234x300',
  data: function () {
    return {
      flag: '',
      flagRef: null,
      flagColor: 'red'
    }
  },
  mounted: function () {
    this.flagRef = this.$refs.flagRef
    this.getFlag()
  },
  methods: {
    getFlag: function () {
      let priceSpread
      if (this.commodity.origin_price && this.commodity.sale_price) {
        priceSpread = this.commodity.origin_price - this.commodity.sale_price
        if (priceSpread > 0) {
          this.flag = '减' + priceSpread + '元'
          this.flagColor = '#e53935'
        }
      } else if (this.commodity.is_new === '1') {
        this.flag = '新品'
        this.flagColor = '#83c44e'
      } else {
        this.flag = ''
        this.flagColor = '#ffffff' // 与背景颜色一致，达到隐藏的目的
      }
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
            content: '很惊艳，特别渐变色很好看，还能当镜子使用，哈哈哈，外...', // 编辑好的文本，刚好两行
            comment_id: '157891240',
            user_name: '指玄',
            user_avatar: '',
            add_time: '1543597886'
          },
          log_code: '31pchomephone_right_0001019#t=normal&act=other&page=home&bid=3185161.1&pid=2183600007&adm=5580'
        }
      }
    },
    isComment: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    commodity: function (cur) {
      this.getFlag()
    },
    flagColor: function (cur) {
      this.flagRef.style.backgroundColor = cur
    }
  }
}
</script>

<style lang="scss" scoped="scoped" type="text/scss">
  a {
    text-decoration: none;
    color: black;
  }
  .container {
    width: 234px;
    height: 300px;
    background: #ffffff;
  }
  .content_brick { /* 与父组件的content类区分开，防止css效果出错*/
    position: relative;
    width: 234px;
    height: 300px;
    background: #fefefe;
    /*border: 1px solid red;*/
    overflow: hidden; /* 隐藏弹出内容*/
    text-align: center; /* 对元素内的文本和是行内元素的子元素有效*/
  }
  img {
    cursor: pointer;
    width: 160px;
    height: 160px;
  }
  .notice {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 64px;
    height: 20px;
    font-size: 0.8em;
    background: red;
    color: white;
    text-align: center;
  }
  .img_area {
    display: block;
    margin-left: auto;
    margin-right: auto; /* 水平居中 */
    left: 0;
    right: 0;
    width: 160px;
    height: 160px;
  }
  .description{
    text-align: center;
  }
  .des_title{
    cursor: pointer;
    margin-left: 20px;
    margin-right: 20px; /* margin-left与margin-right后剩下的就是最长宽度*/
    height: 21px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .des_desc {
    margin-top:-15px;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 0.8em;
    height: 18px; /* important 当无内容时，也能占据高度，防上下面的内容跑上来*/
    color:grey;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .des_price {
    margin-top:10px;
    display:inline-block;
    color:red
  }
  .price_del {
    display:inline-block;
    margin-left: 5px;
    color:grey
  }
  .popup {
    position: absolute;
    bottom: -85px; /* 隐藏弹出框 */
    width: 234px;
    height: 85px;
    background-color: #ff840c;
    transition: bottom 0.3s linear;
  }
  .content_brick:hover .popup {
    bottom: 0;
  }
  .comment {  /* 两行文本，多余的用省略号表示 */
    display: -webkit-box; /* 指定行数的文本*/
    /*height: 35px;*/
    width: 194px; /* 234-20-20=194*/
    margin-left: 20px;
    margin-right: 20px;
    font-size:0.8em;
    color: white;
    /*white-space: nowrap; !* 不换行*!*/
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .writer {
    display: block;
    margin-top: -5px;
    height: 20px;
    width: 194px; /* 234-20-20=194 */
    /*margin-left: 20px; !* margin-left与margin-right后剩下的就是最长宽度，与设置固定的width一样的效果*!*/
    /*margin-right: 20px;*/
    white-space: pre;
    font-size:0.8em;
    color: #cdcdcd;
  }
</style>
