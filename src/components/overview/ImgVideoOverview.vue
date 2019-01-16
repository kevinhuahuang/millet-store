<template>
  <div class="container">
    <div class="content">
      <div class="img_div">
        <img v-if="commodity.img" :src="commodity.img.data_src">
        <div class="video_div">
          <div v-if="isDesc" :class="classObj">
            <h2 v-for="key in h2Ary" v-bind:key="key">{{key}}</h2>
            <p v-for="key in pAry" v-bind:key="key">{{key}}</p>
          </div>
          <video :autoplay="commodity.video.autoplay" :loop="commodity.video.loop" :preload="commodity.video.preload" :src="commodity.video.src" :type="commodity.video.type"></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImgVideoOverview',
  data () {
    return {
      isDesc: false,
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
    }
  },
  props: {
    commodity: {
      type: Object,
      default () {
        return {
          'position': 'center_top',
          'h2_0': '游戏 DOCK 只为游戏',
          'p_0': '游戏中向下滑指纹键唤出 Dock，十余种优化功能为游戏保驾护航。',
          'video': {
            'autoplay': 'autoplay',
            'preload': 'none',
            'src': '//i1.mifile.cn/f/i/18/blackshark/index/dock.mp4',
            'type': 'video/mp4'
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
    top: 15%;
    left: 15%;
  }
  .desc_left_middle {
    position: absolute;
    width: 100%;
    top: 45%;
    left: 15%;
  }
  .desc_left_bottom {
    position: absolute;
    width: 100%;
    top: 55%;
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
    top: 45%;
    text-align: center;
  }
  .desc_center_bottom {
    position: absolute;
    width: 100%;
    top: 55%;
    text-align: center;
  }
  .desc_right_top {
    position: absolute;
    width: 100%;
    text-align: right;
    top: 35%;
    right: 25%;
  }
  .desc_right_middle {
    position: absolute;
    width: 100%;
    text-align: right;
    top: 45%;
    right: 25%;
  }
  .desc_right_bottom {
    position: absolute;
    width: 100%;
    text-align: right;
    top: 55%;
    right: 25%;
  }
  .img_div {
    position: relative;
    min-width: 1226px;
  }
  img {
    width: 100%; /* 与父元素一致 */
    height: auto; /* 根据宽度自动适应 */
    vertical-align: middle; /* 消除下方空白间隙*/
  }
  .video_div {
    position: relative;
  }
  video {
    width: 100%; /* 与父元素一致 */
    height: auto; /* 根据宽度自动适应 */
    vertical-align: middle; /* 消除下方空白间隙*/
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
