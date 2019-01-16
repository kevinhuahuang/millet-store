<template>
  <div class="container">
    <div class="content_brick">
      <div class="pagers_container">
        <div  class="pagers" ref="pagersRef" :style="{borderTopColor:titlePro.style}">
          <brick-content-item v-for="(key, index) in dataArrayProp" v-bind:key="index" :commodity="key" :titlePro="titlePro.title"></brick-content-item>
          <brick-content-more :moreProp="titlePro"></brick-content-more>
        </div>
      </div>
      <div class="left_move" @click="leftMove"><span class="left_angle"></span></div>
      <div class="right_move" @click="rightMove"><span class="right_angle"></span></div>
      <div class="spot_container">
        <span v-for="n in indexMax" v-bind:key="n" class="spot"  @click="manageIndex(n)" :ref="spotArray"></span>
      </div>
    </div>
  </div>
</template>

<script>
import BrickContentItem from './BrickCotentItem'
import BrickContentMore from './BrickContentMore'
export default {
  name: 'BrickContent',
  components: {BrickContentMore, BrickContentItem},
  data () {
    return {
      indexBeSelect: 0,
      widthMax: 0,
      distance: 296,
      indexMax: 0,
      elementSpots: [],
      refArray: [],
      spotArray: 'spotArray',
      contentTitle: [],
      pagersRef: 'pagersRef',
      index: 1
    }
  },
  created () {
    this.indexMax = this.dataArrayProp.length + 1
    this.widthMax = this.distance * this.IndexMax
    for (let i = 1; i < this.indexMax; i++) {
      this.refArray.push('spot' + i)
    }
    // console.log(this.refArray)
    // console.log('indexMax: ' + this.indexMax)
  },
  mounted () {
    for (let i = 0; i < this.indexMax; i++) {
      this.elementSpots.push(this.$refs.spot2)
    }
    this.pagersRef = this.$refs.pagersRef
    this.pagersRef.style.width = this.widthMax // 设置宽度，根据子元素个数而定
    this.$refs.spotArray[0].style.border = '2px solid #ff521c'
    this.$refs.spotArray[0].style.backgroundColor = 'white'
    // console.log(this.$refs)
  },
  methods: {
    leftMove () {
      this.index -= 1
      this.index = this.index < 1 ? 1 : this.index
      this.index = this.index > this.indexMax ? this.indexMax : this.index
      this.manageIndex(this.index)
    },
    rightMove () {
      this.index += 1
      this.index = this.index < 1 ? 1 : this.index
      this.index = this.index > this.indexMax ? this.indexMax : this.index
      this.manageIndex(this.index)
    },
    manageIndex (index) {
      // console.log(index)
      this.index = index
      for (let i = 0; i < this.indexMax; i++) {
        this.$refs.spotArray[i].style.border = '2px solid #ffffff'
        this.$refs.spotArray[i].style.backgroundColor = '#a8a8a8'
      }
      this.$refs.spotArray[index - 1].style.border = '2px solid #ff521c' // 小圈圈被点击效果
      this.$refs.spotArray[index - 1].style.backgroundColor = 'white'

      this.$refs.pagersRef.style.marginLeft = -(index - 1) * this.distance + 'px' // 实现移动效果
      // console.log(-(index - 1) * this.distance)
    }
  },
  props: {
    dataArrayProp: {
      type: Array,
      default () {
        return [
          {
            area_id: '39',
            adv_id: '13919',
            space_id: '233',
            goods_id: '0',
            url: 'http://www.duokan.com/book/120800',
            title: '哈利·波特与被诅咒的孩子',
            mat_id: '2573',
            sale_price: '29.37元',
            origin_price: '',
            image: '//i1.mifile.cn/a4/5e5da924-84e3-4959-9e25-5891cdf30757',
            image_hd: '//i1.mifile.cn/a4/704c0f9a-4e85-431e-962d-b87dbb54e23f',
            desc: '“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！ ',
            sub_title: '',
            commodity_id: '0',
            new_window: '0',
            free_ship: '0',
            buy_give: '0',
            is_discount: '0',
            is_new: '0',
            sort: '1',
            comment: '',
            log_code: '31pchomecontent_book001006#t=normal&act=other&page=home&bid=3030358.1&adm=2573'
          },
          {
            area_id: '39',
            adv_id: '13920',
            space_id: '234',
            goods_id: '0',
            url: 'http://www.duokan.com/book/120867',
            title: '好吗好的',
            mat_id: '2572',
            sale_price: '17.99元',
            origin_price: '',
            image: '//i1.mifile.cn/a4/61e1385e-54de-48f3-8717-5e4f4b1cdd14',
            image_hd: '//i1.mifile.cn/a4/d5c049a6-eb3a-4b7e-8eb5-9e1a8229b68f',
            desc: '畅销作家大冰2016年新书！讲给你听，好吗好的！',
            sub_title: '',
            commodity_id: '0',
            new_window: '0',
            free_ship: '0',
            buy_give: '0',
            is_discount: '0',
            is_new: '0',
            sort: '2',
            comment: '',
            log_code: '31pchomecontent_book002006#t=normal&act=other&page=home&bid=3030358.2&adm=2572'
          }
        ]
      }
    },
    titlePro: {
      type: Object,
      default () {
        return {
          title: '图书',
          style: 'orange',
          image: 'https://s01.mifile.cn/i/index/more-duokan.jpg',
          url: 'http://www.duokan.com/list/1-1?from=xiaomi',
          desc: '海量好书，享受精品阅读时光 漂亮的中文排版，千万读者选择！',
          text: '多看阅读'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped type="text/scss">
  .container {
    position:relative;
    width: 296px;
    height: 420px;
    /*border: 1px solid grey;*/
  }
  .light {
    width: 296px;
    height: 1px;
  }
  .content_brick{
    position:absolute;
    width: 296px;
    height: 420px;
    text-align: center;
  }
  .left_move, .right_move{
    position: absolute;
    cursor: pointer;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 20px;
    height: 48px;
    background-color: #d0d0d0;
    opacity: 0; /* 不显示 */
    transition: background-color 0.4s linear, opacity 0.4s linear;
  }
  .left_move {
    left: 0;
  }
  .right_move {
    right: 0;
  }
  .content_brick:hover .left_move, .content_brick:hover .right_move{
    opacity: 1;
  }
  .left_move:hover, .right_move:hover { /* 无法改变.content:hover .left_move内的内容 无法通过改变opacity来加深背景，只能改背景颜色*/
    background-color: #686868;
  }
  .left_angle, .right_angle {
    position: absolute;
    top: 0;
    bottom: 0;
    content: '';
    width: 8px;
    height: 8px;
  }
  .left_angle {
    margin: auto -2px;
    border-top: 2px solid white;
    border-left: 2px solid white;
    transform: rotate(-45deg);
  }
  .right_angle {
    margin: auto -5px;
    border-top: 2px solid white;
    border-right: 2px solid white;
    transform: rotate(45deg);
  }
  .spot_container{
    position: absolute;
    bottom: 0;
    width: 296px;
    height: 30px;
  }
  .spot {
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin: auto 10px;
    width: 6px;
    height: 6px;
    border-radius: 7px;
    background-color: #a8a8a8;
    border: 2px solid white; /* 占位 */
  }
  .spot:after { /* 扩大点击区域*/
    display: inline-block;
    content: '';
    position: absolute;
    top: -5px;
    bottom: -15px;
    left: -5px;
    right: -5px;
    /*border: 1px solid red;*/
  }
  .spot:hover {
    background-color: #ff521c;
  }
  .pagers_container {
    width: 296px;
    height: 420px;
    overflow: hidden;
  }
  .pagers{
    display: flex;
    border-top: 1px solid red;
    justify-content: space-between;
    height: 420px;
    margin-left: 0;
    transition: margin-left 0.5s ease;
  }
</style>
