<template>
  <div class="container"> <!--按钮用绝对布局都置于图片上，按钮与图片是兄弟关系，也不要把按钮都放置在一个矩形内，矩形会盖住图片-->
    <div class="content">
      <div  v-for="(key, index) in itemsProp" v-bind:key="index" class="cover" :style="{backgroundColor:key.img_url_color}" ref="coverAry">
        <a class="img" :href="key.pc_url"><img :src="key.img_url_webp"></a>
      </div>
      <div v-if="isSingle" class="left_move" @click="leftMove"><span class="left_angle"></span></div>
      <div v-if="isSingle" class="right_move" @click="rightMove"><span class="right_angle"></span></div>
      <div v-if="isSingle" class="spot_container">
        <span v-for="n in indexMax" v-bind:key="n" class="spot"  @click="manageIndex(n)" :ref="spotArray"></span>
      </div>
    </div>
  </div>
</template>

<script>
import {PLACEHOLDER_IMAGE} from '@/public/CONSTANT.js'
export default {
  name: 'Gallery1226x621',
  data () {
    return {
      imgAreaRef: 'imgAreaRef',
      indexMax: 2,
      spotArray: 'spotArray',
      coverAry: 'coverAry',
      index: 1,
      commodity: null,
      isSingle: false
    }
  },
  created () {
    this.commodity = this.itemsProp[0]
    this.index = 1
    this.indexMax = this.itemsProp.length
    this.isSingle = this.indexMax > 1 // 不需要加?:判断语句结果就是true和false
  },
  mounted () {
    if (this.isSingle) {
      this.manageIndex(this.index) /* 初始化显示值 */
    }
  },
  methods: {
    leftMove () {
      this.index -= 1
      this.index = this.index < 1 ? this.indexMax : this.index
      this.index = this.index > this.indexMax ? 1 : this.index
      this.manageIndex(this.index)
    },
    rightMove () {
      this.index += 1
      this.index = this.index < 1 ? this.indexMax : this.index
      this.index = this.index > this.indexMax ? 1 : this.index
      this.manageIndex(this.index)
    },
    manageIndex (index) {
      // console.log(index)
      this.index = index
      for (let i = 0; i < this.indexMax; i++) {
        if (i === (index - 1)) {
          this.$refs.spotArray[i].style.backgroundColor = 'rgba(228,228,228,1)'
          this.$refs.coverAry[i].style.opacity = '1'
          // this.$refs.coverAry[i].style.zIndex = '1'
        } else {
          this.$refs.spotArray[i].style.backgroundColor = 'rgba(255,255,255,0)'
          this.$refs.coverAry[i].style.opacity = '0'
          // this.$refs.coverAry[i].style.zIndex = '0'
        }
      }
      this.commodity = this.itemsProp[index - 1]
    }
  },
  props: {
    itemsProp: {
      type: Array,
      default () {
        return [
          {
            material_id: 9607,
            ad_position_id: 1089,
            w: 5120,
            h: 1240,
            img_url: PLACEHOLDER_IMAGE,
            img_url_webp: PLACEHOLDER_IMAGE,
            img_url_color: '#0C1324',
            category_key: '',
            action: {
              type: 'product',
              login: false,
              path: '10000123',
              log_code: '311915pcchannelgallery001001#t=ad&act=product&page=channel&pid=10000123&page_id=1915&bid=3007496.1&adp=1089&adm=9607'
            },
            auto_last: false,
            pc_url: '//item.mi.com/product/10000123.html'
          },
          {
            material_id: 7248,
            ad_position_id: 1091,
            w: 5120,
            h: 1240,
            img_url: PLACEHOLDER_IMAGE,
            img_url_webp: PLACEHOLDER_IMAGE,
            img_url_color: '#FFFFFF',
            category_key: '',
            action: {
              type: 'product',
              login: false,
              path: '10000085',
              log_code: '311915pcchannelgallery002001#t=ad&act=product&page=channel&pid=10000085&page_id=1915&bid=3007496.2&adp=1091&adm=7248'
            },
            auto_last: false,
            pc_url: '//item.mi.com/product/10000085.html'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped type="text/scss">
  @import '@scss/base.scss';
  .container {
    position: relative;
    height: 621px;
  }
  .content {
    position: absolute;
    width: $WIDTH;
    left: 0;
    right: 0;
    margin: auto;
    height: 621px;
    /*border: 1px solid grey;*/
  }
  .left_move, .right_move{
    position: absolute;
    cursor: pointer;
    top: 0;
    bottom: 0;
    margin: auto; /* 垂直居中 */
    width: 41px;
    height: 69px;
    z-index: 2;
  }
  .left_move {
    left: 0;
  }
  .right_move {
    right: 0;
  }
  .left_move:hover, .right_move:hover {
    background-color: #535353;
  }
  .left_angle, .right_angle {
    position: absolute;
    top: 0;
    bottom: 0;
    content: '';
    width: 20px;
    height: 20px;
    z-index: 2;
  }
  .left_angle {
    margin: auto 15px;
    border-top: 2px solid #a4a4a6;
    border-left: 2px solid #a4a4a6;
    transform: rotate(-45deg);
  }
  .left_move:hover .left_angle {
    border-top: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
  }
  .right_angle {
    margin: auto 5px;
    border-top: 2px solid #a4a4a6;
    border-right: 2px solid #a4a4a6;
    transform: rotate(45deg);
  }
  .right_move:hover .right_angle {
    border-top: 2px solid #ffffff;
    border-right: 2px solid #ffffff;
  }
  .spot_container{
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    height: 30px;
    width: $WIDTH;
    z-index: 2;
  }
  .spot {
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin: auto 10px;
    width: 6px;
    height: 6px;
    border-radius: 7px;
    border: 2px solid #818181; /* 占位 */
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
    background-color: #e4e4e4;
  }
  .img {
    display: block;
    position: absolute;
    top: 0;
    width: $WIDTH;
    height: 620px;
    left: 0;
    right: 0;
    margin: auto; /* 水平居中*/
  }
  img {
    margin-left: -667px; /* 宽度为2560的图片在1226的矩形中居中显示 (2560-1226)/2 = 667*/
    width: 2560px; /* 超长的宽度，形成无限背景效果*/
    height: 620px;
  }
  .cover {
    position: absolute;
    width: $WIDTH;
    height: 620px;
    transition: opacity 0.5s linear; /* 让图片的切换缓和*/
  }
</style>
