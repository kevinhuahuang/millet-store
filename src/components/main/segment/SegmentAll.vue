<template>
    <div class="container">
      <Header></Header>
      <header-navigator style="z-index: 1"></header-navigator>
      <left-navigator></left-navigator>
      <home-channel></home-channel>
      <flash-buy></flash-buy>
      <segment-cellphone></segment-cellphone>
      <segment-household></segment-household>
      <segment-smart></segment-smart>
      <segment-match></segment-match>
      <segment-accessory></segment-accessory>
      <segment-around></segment-around>
      <segment-recommend></segment-recommend>
      <segment-comment></segment-comment>
      <segment-content></segment-content>
      <segment-video></segment-video>
      <segment-footer></segment-footer>
      <brick-footer></brick-footer>
    </div>
</template>

<script>
import SegmentCellphone from './SegmentCellphone'
import SegmentHousehold from './SegmentHousehold'
import SegmentSmart from './SegmentSmart'
import SegmentMatch from './SegmentMatch'
import SegmentAccessory from './SegmentAccessory'
import SegmentRecommend from './SegmentRecommend'
import SegmentComment from './SegmentComment'
import SegmentContent from './SegmentContent'
import SegmentVideo from './SegmentVideo'
import HeaderNavigator from '../headerNavigator/HeaderNavigator'
import LeftNavigator from '../leftNavigator/LeftNavigator'
import SegmentFooter from './SegmentFooter'
import Header from '../headerNavigator/Header'
import FlashBuy from '../flashBuy/FlashBuy'
import HomeChannel from '../homeChannel/HomeChannel'
import SegmentAround from './SegmentAround'
import BrickFooter from '../brick/BrickFooter'
export default {
  name: 'SegmentAll',
  components: {
    BrickFooter,
    SegmentAround,
    HomeChannel,
    FlashBuy,
    Header,
    SegmentFooter,
    LeftNavigator,
    HeaderNavigator,
    SegmentVideo,
    SegmentContent,
    SegmentComment,
    SegmentRecommend,
    SegmentAccessory,
    SegmentMatch,
    SegmentSmart,
    SegmentHousehold,
    SegmentCellphone}
}
</script>

<style scoped>
  .container {
    padding: 0;
    margin: 0;
    background: #f5f5f5;
  }
</style>
