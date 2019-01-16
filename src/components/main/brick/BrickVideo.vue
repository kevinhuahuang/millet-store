<template>
  <div class="container">
    <div class="content">
      <div class="img" @click="showVideo">
        <img :src="videoPro.image">
        <div class="video_play"></div>
      </div>
      <a class="title">{{videoPro.title}}</a>
      <p class="des">{{videoPro.desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrickVideo',
  data () {
    return {
    }
  },
  created () {},
  mounted () {
  },
  methods: {
    showVideo () {
      this.$emit('show-video', true, this.indexPro) // emit 名称不能用pascal格式，要用-隔开
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
          image: '//i1.mifile.cn/a4/xmad_15318974928021_cthgC.jpg',
          image_hd: '//i1.mifile.cn/a4/xmad_15318974954364_lXasR.jpg',
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
            image_url: 'https://i8.mifile.cn/b2c-mimall-media/e0a27677f28572b6fa8dfcf5677d6499.jpeg',
            sd_url: 'https://v.mifile.cn/b2c-mimall-media/c2cb94c9485243e1767d43268fb90820.mp4',
            hd_url: 'https://v.mifile.cn/b2c-mimall-media/c2cb94c9485243e1767d43268fb90820.mp4'
          },
          log_code: '31pchomevideo001010#t=normal&act=other&page=home&bid=3030362.1&adm=5419'
        }
      }
    },
    indexPro: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  a {
    cursor: pointer;
    text-decoration: none;
  }
  .container {
    width: 296px;
    height: 285px; /* 需设置container的高度，当margin-top动态修改时，下方不会出现白色间隙*/
  }
  .content {
    text-align: center;
    width: 296px;
    height: 285px;
    background-color: white;
    /*border: 1px solid grey;*/
  }
  .img {
    position: relative;
    width: 296px;
    height: 180px;
  }
  img {
    cursor: pointer;
    width: 296px;
    height: 180px;
  }
  .video_play {
    position: absolute;
    cursor: pointer;
    left: 10px;
    bottom: 10px;
    width: 30px;
    height: 20px;
    background-color: rgba(110, 102, 107, 0.5);
    border: 2px solid white;
    border-radius: 30px;
  }
  .img:hover .video_play {
    background-color: #ff6410;
    border: 2px solid #ff6410;
  }
  .video_play:before {
    position: absolute;
    top: 4px;
    left: 13px;
    content: '';
    border: 6px solid transparent;
    border-left: 6px solid white;  /* 三角形*/
  }
  .title {
    display: block;
    margin-top: 25px;
    color: black;
    font-size: 0.8rem;
  }
  .des { /*title为block ,接下来只有des，可以不设置为block*/
    color: #959595;
    font-size: 0.75rem;
  }
</style>
