<template>
  <div class="container">
    <div class="content">
      <div class="img" ><img :src="itemsProp.bg_img_webp"></div>
      <a :href="itemsProp.items[0].pc_url" class="return">{{itemsProp['items'][0].navi_txt}}</a>
    </div>
  </div>
</template>

<script>
import {PLACEHOLDER_IMAGE} from '@/public/CONSTANT.js'
export default {
  name: 'HeadScreen',
  data () {
    return {
    }
  },
  mounted () {
  },
  props: {
    itemsProp: {
      type: Object,
      default () {
        return {
          bg_img_color: '#FFFFFF',
          bg_img_webp: PLACEHOLDER_IMAGE,
          bg_img: PLACEHOLDER_IMAGE,
          logo_img_color: '#FFFFFF',
          logo_img_webp: PLACEHOLDER_IMAGE,
          logo_img: PLACEHOLDER_IMAGE,
          action: {
            type: 'url',
            login: false,
            path: 'https://www.mi.com/',
            log_code: '317839pcactivityhead_screen000000#t=normal&act=other&page=activity&page_id=7839&bid=3378959.2'
          },
          h: 1878,
          select_text_color: '#ffffff',
          items: [
            {
              navi_txt: '返回小米商城 >',
              action: {
                type: 'url',
                login: false,
                path: 'https://www.mi.com/',
                log_code: '317839pcactivityhead_screen001001#t=normal&act=webview&page=activity&page_id=7839&bid=3378959.1'
              },
              pc_url: 'https://www.mi.com/'
            }
          ]
        }
      }
    }
  }

}
</script>

<style lang="scss" scoped type="text/scss">
  @import '@scss/base.scss';
  .container {
    position: relative;
    width: 1226px;
    height: 939px;
  }
  .content {
    position: relative;
    width: 1226px;
    height: 939px;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  .img {
    display: block;
    top: 0;
    width: $WIDTH;
    height: 939px;
    left: 0;
    right: 0;
    margin: auto; /* 水平居中*/
  }
  img {
    margin-left: -667px; /* 宽度为2560的图片在1226的矩形中居中显示 (2560-1226)/2 = 667*/
    width: 2560px; /* 超长的宽度，形成无限背景效果*/
    height: 939px;
  }
  .return {
    position: absolute;
    top: 30px;
    right: 50px;
    font-size: 0.9rem;
    color: white;
  }
</style>
