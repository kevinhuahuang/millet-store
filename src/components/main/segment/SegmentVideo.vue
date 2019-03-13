<template>
  <div class="container">
    <div class="content">
      <div class="title">
        <h2>视频</h2>
      </div>
      <div class="content_inside">
        <brick-video v-for="(key, index) in videoArray" v-bind:key="index" :videoPro="key" class="focuseable" @show-video="controlVideo" :indexPro="index"></brick-video>
      </div>
      <div class="cover" ref="coverRef"></div>
      <video-play-window v-if="isVideoShow" @show-video="controlVideo" :video-pro="videoArray[curIndex]"></video-play-window>
    </div>
  </div>
</template>

<script>
import BrickVideo from '../brick/BrickVideo'
// import miJson from '@static/json/main/mi.json'
import VideoPlayWindow from '../base/VideoPlayWindow'
export default {
  name: 'SegmentVideo',
  components: {VideoPlayWindow, BrickVideo},
  data () {
    return {
      videoArray: null,
      isVideoShow: false,
      curIndex: 0,
      coverRef: 'coverRef',
      miData: null
    }
  },
  created () {
    // this.miData = miJson
    // this.videoArray = this.miData['video']
  },
  mounted: function () {
    this.coverRef = this.$refs.coverRef
    this.getData(this)
  },
  methods: {
    controlVideo (isShow, index) {
      if (isShow) {
        this.curIndex = index
        this.coverRef.style.width = document.body.scrollWidth + 'px'
        this.coverRef.style.height = document.body.scrollHeight + 'px'
      } else {
        this.coverRef.style.width = 0
        this.coverRef.style.height = 0
      }
      this.isVideoShow = isShow
    },
    getData: function (host) {
      this.axios.get('/miData').then(function (res) {
        host.miData = res.data
        host.videoArray = host.miData['video']
      })
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import '@scss/base.scss';
  .content {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: $WIDTH;
    height: 400px;
    background-color: #f5f5f5
  }
  .title {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: $WIDTH;
    height: 65px;
  }
  .content_inside {
    display: flex;
    justify-content: space-between;
  }
  .focuseable {
    transition: margin-top 0.2s linear, box-shadow 0.2s linear; /* 多个属性用逗号隔开 */
  }
  .focuseable:hover { /* 上移2px*/
    margin-top: -3px;
    box-shadow: 0 4px 6px 6px #e5e5e5;
  }
  .cover {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #6e6e6e;
    opacity: 0.5;
  }
</style>
