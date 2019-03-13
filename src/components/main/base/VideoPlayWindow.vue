<template>
  <div class="container">
    <div class="video_container" ref="videoContainer">
      <!--<div class="cover" ref="coverRef"></div>--> <!--放到最外层才能获取整个页面的宽度与高度-->
      <div class="name">
        <div class="name_title">{{videoPro.title}}</div>
        <div class="close" @click="hideVideo">X</div>
      </div>
      <video class="video" :src="videoPro.mivideo.sd_url" :poster="videoPro.mivideo.image_url" ref="videoItem" preload="none"></video>
      <div class="play_button" @click="playPause" ref="playButton">
        <div class="circle_button"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {PLACEHOLDER_IMAGE} from '@/public/CONSTANT.js'
export default {
  name: 'VideoPlayWindow',
  data () {
    return {
      videoItem: 'videoItem',
      playButton: 'playButton',
      videoContainer: 'videoContainer'
    }
  },
  created () {},
  mounted () {
    this.videoItem = this.$refs.videoItem
    this.playButton = this.$refs.playButton
    this.videoContainer = this.$refs.videoContainer
    this.playButton.style.opacity = 1
  },
  methods: {
    playPause () {
      if (this.videoItem.paused) {
        this.videoItem.play()
        this.playButton.style.opacity = 0
      } else {
        this.videoItem.pause()
        this.playButton.style.opacity = 1
      }
    },
    hideVideo () {
      this.$emit('show-video', false, 0)
    }
  },
  props: {
    videoPro: {
      type: Object,
      default () {
        return {
          area_id: '43',
          adv_id: '20704',
          space_id: '245',
          goods_id: '0',
          url: 'http://',
          title: '一团火',
          mat_id: '5419',
          sale_price: '',
          origin_price: '',
          image: PLACEHOLDER_IMAGE,
          image_hd: PLACEHOLDER_IMAGE,
          desc: '小米创业8年内部纪录片（手机篇）',
          sub_title: '',
          commodity_id: '0',
          new_window: '0',
          free_ship: '0',
          buy_give: '0',
          is_discount: '0',
          is_new: '0',
          sort: '1',
          comment: '',
          mivideo_id: '287',
          mivideo: {
            name: 'u4e00u56e2u706b',
            desc: 'u5c0fu7c73u521bu4e1a8u5e74u5185u90e8u7eaau5f55u7247uff08u624bu673au7bc7uff09',
            image_url: PLACEHOLDER_IMAGE,
            sd_url: 'https://v.mifile.cn/b2c-mimall-media/c2cb94c9485243e1767d43268fb90820.mp4',
            hd_url: 'https://v.mifile.cn/b2c-mimall-media/c2cb94c9485243e1767d43268fb90820.mp4'
          },
          log_code: '31pchomevideo001010#t=normal&act=other&page=home&bid=3030362.1&adm=5419'
        }
      }
    }
  }
}
</script>

<style scoped>
  .video_container {
    position: fixed; /* 相对于根元素，水平，垂直居中 */
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 853px;
    height: 540px;
    background: white;
    /*border: 1px solid yellow;*/
    z-index: 1;
  }
  .video {
    width: 853px;
    height: 480px;
    /*border: 1px solid grey;*/
  }
  .play_button { /* 覆盖整个播放的屏幕，响应点击事件*/
    position: absolute;
    top: 60px; /* 标题的高度 */
    width: 853px;
    height: 480px;
    opacity: 0.4;
    /*border: 1px solid red;*/
  }
  .circle_button {
    position: absolute;
    cursor: pointer;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto; /* 水平垂直居中 */
    width: 80px;
    height: 80px;
    border-radius: 80px;
    background-color: rgba(204, 204, 204, 0.3); /* 透明背景 */
  }
  .circle_button:after {
    position: absolute;
    top: 10px;
    left: 32px;
    content: '';
    border: 30px solid transparent;
    border-left: 30px solid white;
  }
  .name {
    position: relative;
    text-align: left;
    height: 60px;
    width: 853px;
    /*border: 1px solid black;*/
  }
  .name_title {
    position: absolute;
    margin-top: 18px;
    margin-left: 15px;
    font-size: 1.2rem;
    color: #5c5c5c;
  }
  .close {
    position: absolute;
    cursor: pointer;
    text-align: center;
    top: 15px;
    bottom: 0;
    right: 10px;
    width: 20px;
    height: 20px;
    font-size: 1.4rem;
    font-weight: bold;
    color: #5c5c5c;
    /*border: 1px solid red;*/
  }
</style>
