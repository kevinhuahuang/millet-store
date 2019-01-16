<template>
  <div class="container">
    <div class="content">
      <a class="img_area" :href="'https://item.mi.com/' + commodity.commodityid + '.html'">
        <img :src="commodity.image">
      </a>
      <div class="description">
        <a  :href="commodity.url"><div class="des_title">{{commodity.name}}</div></a>
        <p class="des_price">{{commodity.market_price}}元</p>
        <p class="des_comment"><span v-show="Number(commodity.comments) > 0" >{{commodity.comments}}人好评</span></p> <!--div用来保持高度-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrickRecommend',
  data: function () {
    return {
    }
  },
  mounted: function () {
  },
  methods: {
  },
  props: {
    commodity: {
      type: Object,
      default: function () {
        return {
          productid: '9062',
          commodityid: '1184500014',
          goodsid: '2184500012',
          name: '小米USB-C数据线 编织线版  （30cm）',
          price: '18.9',
          market_price: '18.9',
          image: '//i1.mifile.cn/a1/pms_1541579531.40162942.jpg',
          comments: '25',
          traceid: 'BlankRec-jR9+VBHvY/be6fJg1XQPsg==',
          logcode: 'reccom_Guesslike_0_0#eid=184:12:0:0:0:0:0:0:0:0&traceId=BlankRec-jR9+VBHvY/be6fJg1XQPsg==&pid=9062&bid=3038464.0&page=home',
          eid: '184:12:0:0:0:0:0:0:0:0',
          algorithm: 13,
          ext: null,
          discount: '',
          isnew: false,
          postfree_num: '0',
          hasgift: false,
          commentcontent: '很好  值得够买  推荐这个数据线',
          commentuser: '1417099465'
        }
      }
    }
  },
  watch: {
  }
}
</script>

<style lang="scss" scoped type="text/scss">
  a {
    text-decoration: none;
    color: black;
  }
  .container {
    width: 234px;
    height: 300px;
    background: #ffffff;
    /*border: 1px solid red;*/
  }
  .content {
    position: relative;
    width: inherit;
    height: inherit;
    background: #fefefe;
    text-align: center; /* 让子元素img居中*/
  }
  img {
    cursor: pointer;
    width: 140px;
    height: 140px;
    /*border: 1px solid red*/
  }
  .img_area {
    margin-top: 35px;
    display: block;
    height: 140px;
  }
  .description{
    text-align: center;
  }
  .des_title{
    font-size: 0.8rem;
    cursor: pointer;
    margin-top: 25px;
    margin-left: 25px;
    margin-right: 25px;
    height: 21px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .des_price {
    margin-top: 10px;
    height: 18px;
    color: #ff5a37;
    font-size: 0.8rem;
  }
  .des_comment {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 50px;
    height: 20px;
    color: grey;
    font-size: 0.8rem;
    /*border: 1px solid black;*/
  }
</style>
