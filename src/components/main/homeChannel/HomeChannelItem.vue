<template>
  <div class="container">
    <div class="content">
      <a class="square_content" :href="channel.href"> <!--相对父元素用margin居中-->
        <div class="iconfont icon"  :class="iconType"></div> <!--绑定字体图标-->
        <div class="description">{{channel.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeChannelItem',
  data: function () {
    return {
    }
  },
  props: {
    channel: {
      type: Object,
      default: function () {
        return {
          href: 'http://www.mi.com/compare/',
          dataStatAid: 'AA13424',
          dataLogCode: '31pchomesix_small_icon001003#t=normal&act=other&page=home&bid=3030363.1&adm=2227',
          title: '选购手机'
        }
      }
    },
    iconType: {
      type: String,
      default: 'icon-shouji'
    }
  }
}
</script>

<style lang="scss" scoped="" type="text/scss">
  @import '../../../../src/assets/css/font_icon.css';
  * {
    user-select: none;
  }
  a {
    text-decoration: none;
  }
  .container {
    cursor: pointer;
    width: 78px;
    height: 83px;
  }
  .content {
    position: absolute;
    width: inherit;
    height: inherit;
    background: #5f5750;
    text-align: center;
  }
  .square_content { /* 小矩形在大矩形中水平与垂直居中 */
    position: absolute;
    width: 70px;
    height: 54px;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /*border: 1px solid red;*/
  }
  .icon {
    font-size: 24px;
    color: #cdcac8;
  }
  .description {
    margin-top: 5px;
    font-size: .9em;
    color: #cdcac8;
  }
  .square_content:hover .icon, .square_content:hover .description{
    color: white;
  }
</style>
