<template>
  <div class="container">
    <div class="content">
      <div class="content_inside">
        <home-channel-left style="display: inline-block"></home-channel-left>
        <a class="img_div" :href="rightData[0]['href']">
          <img :src="rightData[0]['img']">
        </a>
        <a class="img_div" :href="rightData[1]['href']">
          <img :src="rightData[1]['img']">
        </a>
        <a class="img_div" :href="rightData[2]['href']">
          <img :src="rightData[2]['img']">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import HomeChannelLeft from './HomeChannelLeft'
import homeData from '@assets/json/main/homeChannel.json'
export default {
  name: 'HomeChannel',
  components: {HomeChannelLeft},
  data: function () {
    return {
      rightData: null
    }
  },
  created: function () {
    this.rightData = homeData['rightList']
  },
  mounted: function () {
  }
}
</script>

<style lang="scss" scoped="" type="text/scss">
  @import '@scss/base.scss';
  .container {
    position: relative;
    height: 185px;
  }
  .content {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    width: $WIDTH;
  }
  .content_inside {
    display: flex;
    justify-content: space-between;
    width: $WIDTH;
    height: 170px;
  }
  .img_div {
    display: inline-block;
    padding: 0;
    margin: 0;
    width: 316px;
    height: 170px;
  }
  img {
    width: 316px;
    height: 170px;
  }
</style>
