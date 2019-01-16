<template>
  <div class="container">
    <div class="content">
      <div style="display: inline-block"> <!--necessary-->
        <div class="list_first" v-for="item in firstListData" v-bind:key="item.title" >
          <left-navigator-item :commodity="item"></left-navigator-item>
        </div>
        <div v-for="item in firstEmptyList" v-bind:key="item">
          <div class="empty_commodity"></div>
        </div>
      </div>
      <div style="display: inline-block"> <!--necessary-->
        <div class="list_second" v-for="item in secondListData" v-bind:key="item.title">
            <left-navigator-item :commodity="item"></left-navigator-item>
        </div>
        <div v-for="item in secondEmptyList" v-bind:key="item">
          <div class="empty_commodity"></div>
        </div>
      </div>
      <div style="display: inline-block"> <!--necessary-->
        <div class="list_third" v-for="item in thirdListData" v-bind:key="item.title">
          <left-navigator-item :commodity="item"></left-navigator-item>
        </div>
        <div v-for="item in thirdEmptyList" v-bind:key="item">
          <div class="empty_commodity"></div>
        </div>
      </div>
      <div style="display: inline-block"> <!--necessary-->
        <div class="list_fourth" v-for="item in fourthListData" v-bind:key="item.title">
            <left-navigator-item :commodity="item"></left-navigator-item>
        </div>
        <div v-for="item in fourthEmptyList" v-bind:key="item">
          <div class="empty_commodity"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigatorItem from './LeftNavigatorItem'
export default {
  name: 'LeftNavigatorTable',
  components: {LeftNavigatorItem},
  data () {
    return {
      firstListData: [],
      secondListData: [],
      thirdListData: [],
      fourthListData: [],
      firstEmptyList: [],
      secondEmptyList: [],
      thirdEmptyList: [],
      fourthEmptyList: []
    }
  },
  mounted: function () {
    this.dispatchListData(this.tableData)
  },
  props: {
    tableData: {
      type: Array,
      default: function () {
        return [
          {
            title: '小米MIX 3',
            url: 'https://www.mi.com/mix3/',
            img: '//i1.mifile.cn/f/i/g/2015/cn-index/mix3-80.png',
            img_hd: '//i1.mifile.cn/f/i/g/2015/cn-index/mix3-140.png',
            is_buy: 0,
            buy_url: '',
            list_image: '',
            list_image_hd: ''
          },
          {
            title: '小米8 青春版',
            url: 'https://www.mi.com/mi8youth/',
            img: '//i1.mifile.cn/f/i/g/2015/cn-index/qingchun-80.png',
            img_hd: '//i1.mifile.cn/f/i/g/2015/cn-index/qingchun-140.png',
            is_buy: 0,
            buy_url: '',
            list_image: '',
            list_image_hd: ''
          },
          {
            title: '小米8 屏幕指纹版',
            url: 'https://www.mi.com/mi8ud/',
            img: '//i1.mifile.cn/f/i/g/2015/cn-index/pingmu-80.png',
            img_hd: '//i1.mifile.cn/f/i/g/2015/cn-index/pingmu-140.png',
            is_buy: 0,
            buy_url: '',
            list_image: '',
            list_image_hd: ''
          },
          {
            title: '小米8',
            url: 'https://www.mi.com/mi8/',
            img: '//i1.mifile.cn/f/i/g/2015/cn-index/m8-80.png',
            img_hd: '//i1.mifile.cn/f/i/g/2015/cn-index/m8-140.png',
            is_buy: 0,
            buy_url: '',
            list_image: '',
            list_image_hd: ''
          },
          {
            title: '小米8 SE',
            url: 'https://www.mi.com/mi8i/',
            img: '//i1.mifile.cn/f/i/g/2015/cn-index/m8se-80.png',
            img_hd: '//i1.mifile.cn/f/i/g/2015/cn-index/m8se-140.png',
            is_buy: 0,
            buy_url: '',
            list_image: '',
            list_image_hd: ''
          },
          {
            title: '小米MIX 2S',
            url: 'https://www.mi.com/mix2s/',
            img: '//i1.mifile.cn/f/i/g/2015/cn-index/mix2s80-80white.png',
            img_hd: '//i1.mifile.cn/f/i/g/2015/cn-index/mix2140-140white.png',
            is_buy: 0,
            buy_url: '',
            list_image: '',
            list_image_hd: ''
          },
          {
            title: '小米Max 3',
            url: 'https://www.mi.com/max3/',
            img: '//i1.mifile.cn/f/i/g/2015/cn-index/max3-80-80.png',
            img_hd: '//i1.mifile.cn/f/i/g/2015/cn-index/max3-140-140.png',
            is_buy: 0,
            buy_url: '',
            list_image: '',
            list_image_hd: ''
          },
          {
            title: '小米6X',
            url: 'https://www.mi.com/mi6x/',
            img: '//i1.mifile.cn/f/i/g/2015/cn-index/80808080808080.jpg',
            img_hd: '//i1.mifile.cn/f/i/g/2015/cn-index/80808080808080.jpg',
            is_buy: 0,
            buy_url: '',
            list_image: '',
            list_image_hd: ''
          },
          {
            title: '黑鲨游戏手机 Helo',
            url: 'https://www.mi.com/blackshark2/',
            img: '//i1.mifile.cn/f/i/g/2015/cn-index/heishahelo-80.png',
            img_hd: '//i1.mifile.cn/f/i/g/2015/cn-index/heishahelo-140.png',
            is_buy: 0,
            buy_url: '',
            list_image: '',
            list_image_hd: ''
          },
          {
            title: '黑鲨游戏手机',
            url: 'https://www.mi.com/blackshark/',
            img: '//i1.mifile.cn/f/i/g/2015/cn-index/heisha-80.png',
            img_hd: '//i1.mifile.cn/f/i/g/2015/cn-index/heisha-140.png',
            is_buy: 0,
            buy_url: '',
            list_image: '',
            list_image_hd: ''
          },
          {
            title: '小米MIX 2',
            url: 'https://www.mi.com/mix2/',
            img: '//i1.mifile.cn/f/i/g/2015/cn-index/mix2-80.png',
            img_hd: '//i1.mifile.cn/f/i/g/2015/cn-index/mix2-140.png',
            is_buy: 0,
            buy_url: 'https://item.mi.com/product/10000070.html',
            list_image: '',
            list_image_hd: ''
          },
          {
            title: '小米Max 2',
            url: '//www.mi.com/max2/',
            img: '//i1.mifile.cn/f/i/g/2015/cn-index/max2_80.jpg',
            img_hd: '//i1.mifile.cn/f/i/g/2015/cn-index/max2_140.jpg',
            is_buy: 0,
            buy_url: '//item.mi.com/product/10000057.html',
            list_image: '',
            list_image_hd: ''
          },
          {
            title: '红米6 Pro',
            url: '//www.mi.com/redmi6pro/',
            img: '//i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png',
            img_hd: '//i1.mifile.cn/f/i/g/2015/cn-index/6pro140-140.png',
            is_buy: 0,
            buy_url: '',
            list_image: '',
            list_image_hd: ''
          },
          {
            title: '红米6',
            url: '//www.mi.com/redmi6/',
            img: '//i1.mifile.cn/f/i/g/2015/cn-index/666666.png',
            img_hd: '//i1.mifile.cn/f/i/g/2015/cn-index/666666.png',
            is_buy: 0,
            buy_url: '',
            list_image: '',
            list_image_hd: ''
          },
          {
            title: '红米6A',
            url: '//www.mi.com/redmi6a/',
            img: '//i1.mifile.cn/f/i/g/2015/cn-index/6AAAA.png',
            img_hd: '//i1.mifile.cn/f/i/g/2015/cn-index/6AAAA.png',
            is_buy: 0,
            buy_url: '',
            list_image: '',
            list_image_hd: ''
          },
          {
            title: '红米Note 5',
            url: 'https://www.mi.com/redminote5/',
            img: '//i1.mifile.cn/f/i/g/2015/cn-index/note5-80-80.png',
            img_hd: '//i1.mifile.cn/f/i/g/2015/cn-index/note5-140-140.png',
            is_buy: 0,
            buy_url: '',
            list_image: '',
            list_image_hd: ''
          },
          {
            title: '红米S2',
            url: 'https://www.mi.com/redmis2/',
            img: '//i1.mifile.cn/f/i/g/2015/cn-index/s2-80-80.png',
            img_hd: '//i1.mifile.cn/f/i/g/2015/cn-index/s2-140-140.png',
            is_buy: 0,
            buy_url: '',
            list_image: '',
            list_image_hd: ''
          },
          {
            title: '移动4G+专区',
            url: '//www.mi.com/p/5592.html',
            img: '//i1.mifile.cn/f/i/g/2015/cn-index/80.jpg',
            img_hd: '//i1.mifile.cn/f/i/g/2015/cn-index/4G140.jpg',
            is_buy: 0,
            buy_url: '',
            list_image: '',
            list_image_hd: ''
          },
          {
            title: '对比手机',
            url: '//www.mi.com/compare/',
            img: '//i1.mifile.cn/f/i/15/goods/sidebar/compare.jpg',
            img_hd: '//i1.mifile.cn/f/i/15/goods/list/compare.jpg',
            is_buy: 0,
            buy_url: '//www.mi.com/compare/',
            list_image: '',
            list_image_hd: ''
          },
          {
            title: '米粉卡 日租卡',
            url: 'https://www.mi.com/micard',
            img: '//i1.mifile.cn/f/i/g/2015/cn-index/mifenka-1.jpg',
            img_hd: '//i1.mifile.cn/f/i/g/2015/cn-index/mifenka-1.jpg',
            is_buy: 0,
            buy_url: '',
            list_image: '',
            list_image_hd: ''
          },
          {
            title: '小米移动 电话卡',
            url: '//www.mi.com/mimobile/',
            img: '//i1.mifile.cn/f/i/15/goods/sidebar/mimobile.jpg',
            img_hd: '//i1.mifile.cn/f/i/15/goods/list/mimobile.jpg',
            is_buy: 0,
            buy_url: '',
            list_image: '',
            list_image_hd: ''
          },
          {
            title: '手机上门维修',
            url: 'https://item.mi.com/product/7532.html',
            img: '//i1.mifile.cn/f/i/g/2015/cn-index/weixiu80-80.png',
            img_hd: '//i1.mifile.cn/f/i/g/2015/cn-index/weixiu140-140.png',
            is_buy: 0,
            buy_url: '',
            list_image: '',
            list_image_hd: ''
          },
          {
            title: '云服务空间月卡',
            url: 'https://item.mi.com/product/8262.html',
            img: 'https://i1.mifile.cn/f/i/g/2015/yunfuwu.jpg',
            img_hd: 'https://i1.mifile.cn/f/i/g/2015/yunfuwu.jpg',
            is_buy: 0,
            buy_url: '',
            list_image: '',
            list_image_hd: ''
          }
        ]
      }
    }
  },
  methods: {
    dispatchListData (data) {
      let len = data.length
      len = len > 24 ? 24 : len
      let ary = [1, 2, 3, 4, 5, 6]
      this.firstListData = len > 0 ? data.slice(0, len > 6 ? 6 : len) : []
      this.secondListData = len > 6 ? data.slice(6, len > 12 ? 12 : len) : []
      this.thirdListData = len > 12 ? data.slice(12, len > 18 ? 18 : len) : []
      this.fourthListData = len > 18 ? data.slice(18, len > 24 ? 24 : len) : []
      this.firstEmptyList = ary.slice(0, len > 6 ? 0 : 6 - len)
      this.secondEmptyList = ary.slice(0, len > 12 ? 0 : 12 - len)
      this.thirdEmptyList = ary.slice(0, len > 18 ? 0 : 18 - len)
      this.fourthEmptyList = ary.slice(0, len > 24 ? 0 : 24 - len)
    }
  },
  watch: {
    tableData (curV, oldV) {
      this.dispatchListData(curV)
    }
  }
}
</script>

<style scoped>
  .container {
    background: white;
  }
  .content {
    width: 992px;
  }
  .list_first, .list_second, .list_third, .list_fourth {
    width: 240px;
    background: red;
    margin: 0; /* 四个block无间隙*/
    padding: 0; /* 四个block无间隙*/
  }
 .empty_commodity {
   width: 24px;
   height: 77px;
 }
</style>
