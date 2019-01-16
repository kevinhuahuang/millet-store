<template>
  <div id="app">
    <!--<HeaderNavigatorItem></HeaderNavigatorItem>-->
    <!--<header-navigator-item-list></header-navigator-item-list>-->
    <!--<HeaderNavigator style="z-index: 1"></HeaderNavigator> &lt;!&ndash;弹出的block需显示在兄弟元素的上面&ndash;&gt;-->
    <!--<Header></Header>-->
    <!--<left-navigator-item></left-navigator-item>-->
    <!--<left-navigator-table></left-navigator-table>-->
    <!--<left-navigator></left-navigator>-->
    <!--<flash-buy-item></flash-buy-item>-->
    <!--<flash-buy-time></flash-buy-time>-->
    <!--<flash-buy></flash-buy>-->
    <!--<main-banner></main-banner>-->
    <!--<brick234x143></brick234x143>-->
    <!--<RightBrick234x300></RightBrick234x300>-->
    <!--<brick234x300-group></brick234x300-group>-->
    <!--<left-brick234x614></left-brick234x614>-->
    <!--<brick-recommend></brick-recommend>-->
    <!--<brick-comment296x415></brick-comment296x415>-->
    <!--<brick-content-item></brick-content-item>-->
    <!--<brick-content-more></brick-content-more>-->
    <!--<brick-content></brick-content>-->
    <!--<brick-video></brick-video>-->
    <!--<brick246x161></brick246x161>-->
    <!--<list-table></list-table>-->
    <!--<list-page></list-page>-->
    <!--<video-play-window></video-play-window>-->
    <!--<home-channel-item></home-channel-item>-->
    <!--<home-channel-left></home-channel-left>-->
    <!--<home-channel></home-channel>-->
    <!--<segment-cellphone></segment-cellphone>-->
    <!--<segment-household></segment-household>-->
    <!--<segment-smart></segment-smart>-->
    <!--<segment-match></segment-match>-->
    <!--<segment-accessory></segment-accessory>-->
    <!--<segment-around></segment-around>-->
    <!--<SegmentRecommend></SegmentRecommend>-->
    <!--<segment-comment></segment-comment>-->
    <!--<segment-content></segment-content>-->
    <!--<segment-video></segment-video>-->
    <!--<brick-footer></brick-footer>-->
    <!--<segment-footer></segment-footer>-->
    <!--<brick606x482></brick606x482>-->
    <!--<list-two-type1226x482></list-two-type1226x482>-->
    <!--<brick400x376></brick400x376>-->
    <!--<list-three-type1226x376></list-three-type1226x376>-->
    <!--<cells-auto-fill></cells-auto-fill>-->
    <!--<list-label1226x68></list-label1226x68>-->
    <!--<divider-line></divider-line>-->
    <!--<gallery1226x621></gallery1226x621>-->
    <!--<brick606x492></brick606x492>-->
    <!--<production-list-two1226x492></production-list-two1226x492>-->
    <!--<head-screen></head-screen>-->
    <!--<production-list-one1226x434></production-list-one1226x434>-->
    <!--<page-catalogue></page-catalogue>-->
    <segment-all></segment-all>
    <!----分割线---->
    <!--<cellphone-black-shark></cellphone-black-shark>-->
    <!--<img-text-overview></img-text-overview>-->
    <!--<img-video-overview></img-video-overview>-->
    <!--<img-bg-img-text-overview></img-bg-img-text-overview>-->
    <!--<img-img-text-overview></img-img-text-overview>-->
    <!--<overview-page></overview-page>-->
  </div>
</template>

<script>
import HeaderNavigatorItem from '../../components/main/headerNavigator/HeaderNavigatorItem'
import HeaderNavigatorItemList from '../../components/main/headerNavigator/HeaderNavigatorItemList.vue'
import HeaderNavigator from '../../components/main/headerNavigator/HeaderNavigator'
import Header from '../../components/main/headerNavigator/Header'
import LeftNavigatorItem from '../../components/main/leftNavigator/LeftNavigatorItem'
import LeftNavigatorTable from '../../components/main/leftNavigator/LeftNavigatorTable'
import LeftNavigator from '../../components/main/leftNavigator/LeftNavigator'
import FlashBuyItem from '../../components/main/flashBuy/FlashBuyItem'
import MainBanner from '../../components/main/banner/mainBanner'
import Brick234x143 from '../../components/main/brick/Brick234x143'
import LeftBrick234x614 from '../../components/main/brick/LeftBrick234x614'
import RightBrick234x300 from '../../components/main/brick/RightBrick234x300'
import FlashBuyTime from '../../components/main/flashBuy/FlashBuyTime'
import FlashBuy from '../../components/main/flashBuy/FlashBuy'
import HomeChannelItem from '../../components/main/homeChannel/HomeChannelItem'
import HomeChannelLeft from '../../components/main/homeChannel/HomeChannelLeft'
import HomeChannel from '../../components/main/homeChannel/HomeChannel'
import SegmentCellphone from '../../components/main/segment/SegmentCellphone'
import SegmentHousehold from '../../components/main/segment/SegmentHousehold'
import Brick234x300Group from '../../components/main/brick/Brick234x300Group'
import SegmentSmart from '../../components/main/segment/SegmentSmart'
import SegmentMatch from '../../components/main/segment/SegmentMatch'
import SegmentAccessory from '../../components/main/segment/SegmentAccessory'
import SegmentAround from '../../components/main/segment/SegmentAround'
import BrickRecommend from '../../components/main/brick/BrickRcommend'
import SegmentRecommend from '../../components/main/segment/SegmentRecommend'
import BrickComment296x415 from '../../components/main/brick/BrickComment296x415'
import SegmentComment from '../../components/main/segment/SegmentComment'
import BrickContentItem from '../../components/main/brick/BrickCotentItem'
import BrickContentMore from '../../components/main/brick/BrickContentMore'
import BrickContent from '../../components/main/brick/BrickContent'
import SegmentContent from '../../components/main/segment/SegmentContent'
import BrickVideo from '../../components/main/brick/BrickVideo'
import SegmentVideo from '../../components/main/segment/SegmentVideo'
import BrickFooter from '../../components/main/brick/BrickFooter'
import SegmentFooter from '../../components/main/segment/SegmentFooter'
import VideoPlayWindow from '../../components/main/base/VideoPlayWindow'
import Brick246x161 from '../../components/List/Brick246x161'
import ListTable from '../../components/List/ListTable'
import ListPage from '../../components/List/ListPage'
import Brick606x482 from '../../components/catalogue/Brick606x482'
import PageCatalogue from '../../components/catalogue/PageCatalogue'
import ListTwoType1226x482 from '../../components/catalogue/ListTwoType1226x482'
import Brick400x376 from '../../components/catalogue/Brick400x376'
import ListThreeType1226x376 from '../../components/catalogue/ListThreeType1226x376'
import CellsAutoFill from '../../components/catalogue/CellsAutoFill'
import ListLabel1226x68 from '../../components/catalogue/ListLabel1226x68'
import DividerLine from '../../components/catalogue/DividerLine'
import Gallery1226x621 from '../../components/catalogue/Gallery1226x621'
import Brick606x492 from '../../components/catalogue/Brick606x492'
import ProductionListTwo1226x492 from '../../components/catalogue/ProductionListTwo1226x492'
import HeadScreen from '../../components/catalogue/HeadScreen'
import ProductionListOne1226x434 from '../../components/catalogue/ProductionListOne1226x434'
import SegmentAll from '../../components/main/segment/SegmentAll'
import CellphoneBlackShark from '../../components/overview/CellphoneBlackShark'
import ImgTextOverview from '../../components/overview/ImgTextOverview'
import ImgVideoOverview from '../../components/overview/ImgVideoOverview'
import ImgBgImgTextOverview from '../../components/overview/ImgBgImgTextOverview'
import ImgImgTextOverview from '../../components/overview/ImgImgTextOverview'
import OverviewPage from '../../components/overview/OverviewPage'
export default {
  name: 'App',
  components: {
    OverviewPage,
    ImgImgTextOverview,
    ImgBgImgTextOverview,
    ImgVideoOverview,
    ImgTextOverview,
    CellphoneBlackShark,
    SegmentAll,
    ProductionListOne1226x434,
    HeadScreen,
    ProductionListTwo1226x492,
    Brick606x492,
    Gallery1226x621,
    DividerLine,
    ListLabel1226x68,
    CellsAutoFill,
    ListThreeType1226x376,
    Brick400x376,
    ListTwoType1226x482,
    PageCatalogue,
    Brick606x482,
    ListPage,
    ListTable,
    Brick246x161,
    VideoPlayWindow,
    SegmentFooter,
    BrickFooter,
    SegmentVideo,
    BrickVideo,
    SegmentContent,
    BrickContent,
    BrickContentMore,
    BrickContentItem,
    SegmentComment,
    BrickComment296x415,
    SegmentRecommend,
    BrickRecommend,
    SegmentAround,
    SegmentAccessory,
    SegmentMatch,
    SegmentSmart,
    Brick234x300Group,
    SegmentHousehold,
    SegmentCellphone,
    HomeChannel,
    HomeChannelLeft,
    HomeChannelItem,
    FlashBuy,
    FlashBuyTime,
    RightBrick234x300,
    LeftBrick234x614,
    Brick234x143,
    MainBanner,
    FlashBuyItem,
    LeftNavigator,
    LeftNavigatorTable,
    LeftNavigatorItem,
    Header,
    HeaderNavigator,
    HeaderNavigatorItemList,
    HeaderNavigatorItem}
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
