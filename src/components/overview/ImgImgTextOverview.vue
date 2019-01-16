<template>
  <div class="container">
    <div class="content">
      <img :src="commodity.img_0.data_src">
      <div class="img_div">
        <img :src="commodity.img_1.data_src">
        <div v-if="isDesc" :class="classObj">
          <h2 v-for="key in h2Ary" v-bind:key="key">{{key}}</h2>
          <p v-for="key in pAry" v-bind:key="key">{{key}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImgImgTextOverview',
  data () {
    return {
      isDesc: false,
      backgroundImg: null,
      h2Ary: [],
      pAry: [],
      classObj: {
        'desc_left_top': false,
        'desc_left_middle': false,
        'desc_left_bottom': false,
        'desc_center_top': false,
        'desc_center_middle': false,
        'desc_center_bottom': false,
        'desc_right_top': false,
        'desc_right_middle': false,
        'desc_right_bottom': false
      }
    }
  },
  created () {
    this.dispatchData(this.commodity)
  },
  mounted () {
  },
  methods: {
    dispatchData (data) {
      this.h2Ary = []
      this.pAry = []
      for (let key in data) {
        if (key.indexOf('h2_') > -1) {
          this.h2Ary.push(data[key])
        } else if (key.indexOf('p_') > -1) {
          this.pAry.push(data[key])
        }
      }
      this.isDesc = (this.h2Ary.length + this.pAry.length) > 1
      for (let key in this.classObj) {
        this.classObj[key] = false
      }
      switch (data.position) {
        case 'left_top':
          this.classObj.desc_left_top = true
          break
        case 'left_middle':
          this.classObj.desc_left_middle = true
          break
        case 'left_bottom':
          this.classObj.desc_left_bottom = true
          break
        case 'center_top':
          this.classObj.desc_center_top = true
          break
        case 'center_middle':
          this.classObj.desc_center_middle = true
          break
        case 'center_bottom':
          this.classObj.desc_center_bottom = true
          break
        case 'right_top':
          this.classObj.desc_right_top = true
          break
        case 'right_middle':
          this.classObj.desc_right_middle = true
          break
        case 'right_bottom':
          this.classObj.desc_right_bottom = true
          break
      }
      this.backgroundImg = 'url("' + (this.commodity.img_0.data_src) + '")'
      console.log(this.backgroundImg)
    }
  },
  props: {
    commodity: {
      type: Object,
      default () {
        return {
          'position': 'left_top',
          'h2_0': '专为手游设计的新物种',
          'p_0': '黒鲨专用游戏手柄，轻便小巧、方便连接、操控自如，移动 + 瞄准 + 射击同时操作。“大吉大利今晚吃鸡”。',
          'img_0': {
            'data_src': '//i1.mifile.cn/f/i/18/blackshark/index/index_handlerbg.png?'
          },
          'img_1': {
            'data_src': '//i1.mifile.cn/f/i/18/blackshark/index/gengxin.png?'
          }
        }
      }
    }
  },
  watch: {
    commodity (newV) {
      this.dispatchData(newV)
    }
  }
}
</script>

<style scoped>
  .content {
    position: relative
  }
  .desc_left_top {
    position: absolute;
    width: 100%;
    top: 5%;
    left: 15%;
  }
  .desc_left_middle {
    position: absolute;
    width: 100%;
    top: 40%;
    left: 15%;
  }
  .desc_left_bottom {
    position: absolute;
    width: 100%;
    top: 70%;
    left: 25%;
  }
  .desc_center_top {
    position: absolute;
    width: 100%;
    top: 5%;
    text-align: center;
  }
  .desc_center_middle {
    position: absolute;
    width: 100%;
    top: 40%;
    text-align: center;
  }
  .desc_center_bottom {
    position: absolute;
    width: 100%;
    top: 70%;
    text-align: center;
  }
  .desc_right_top {
    position: absolute;
    width: 100%;
    text-align: right;
    top: 5%;
    right: 25%;
  }
  .desc_right_middle {
    position: absolute;
    width: 100%;
    text-align: right;
    top: 40%;
    right: 25%;
  }
  .desc_right_bottom {
    position: absolute;
    width: 100%;
    text-align: right;
    top: 70%;
    right: 25%;
  }
  .img_div {
    position: relative;
    min-width: 1226px;
    /*border: 1px solid transparent;*/
  }
  img {
    width: 100%; /* 与父元素一致 */
    height: auto; /* 根据宽度自动适应 */
    vertical-align: middle;
  }
  h2 {
    color: white;
    font-size: calc( 1vw + 1rem); /* 未能解决当屏幕小于或等于1226px时，字体不在变小的问题*/
    min-font-size: 10rem;  /* 无效*/
  }
  p {
    color: white;
    font-size: calc( 1vw + 0.75rem); /* 未能解决当屏幕小于或等于1226px时，字体不在变小的问题*/
    min-font-size: 10rem;  /* 无效*/
  }
</style>
