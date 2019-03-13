<template>
  <div class="container">
    <Header></Header>
    <!--<header-navigator  style="z-index: 1"></header-navigator>-->
    <header-navigator-with-left style="z-index: 3"></header-navigator-with-left>
    <div class="content" v-if="dataAry.length > 0">
      <!--获取到json文件后再渲染组件-->
     <catalogue-segment v-for="(key, index) in dataAry" v-bind:key="index" :data-prop="key" ></catalogue-segment>
    </div>
    <segment-footer></segment-footer>
    <brick-footer></brick-footer>
  </div>
</template>

<script>
// 取消编译前调用json文件来构建网页的方式
// import dataJSON from '../../../dist/static/json/kind/cellphone.json'
// import dataJSON from '@static/json/kind/children.json'
// import dataJSON from '@static/json/kind/dress.json'
// import dataJSON from '@static/json/kind/household.json'
// import dataJSON from '@static/json/kind/life.json'
// import dataJSON from '@static/json/kind/notepad.json'
// import dataJSON from '@static/json/kind/power.json'
// import dataJSON from '@static/json/kind/router.json'
// import dataJSON from '@static/json/kind/speaker.json'
// import dataJSON from '@static/json/kind/television.json'
import CatalogueSegment from './CatalogueSegment'
import HeaderNavigator from '../main/headerNavigator/HeaderNavigator'
import BrickFooter from '../main/brick/BrickFooter'
import SegmentFooter from '../main/segment/SegmentFooter'
import HeaderNavigatorWithLeft from '../main/headerNavigator/HeaderNavigatorWithLeft'
import Header from '../main/headerNavigator/Header'
export default {
  name: 'PageCatalogue',
  components: {Header, HeaderNavigatorWithLeft, SegmentFooter, BrickFooter, HeaderNavigator, CatalogueSegment},
  data () {
    return {
      dataAry: []
      // cellphoneData: dataJSON
      // dataJson: dataJSON
    }
  },
  created () {
    // for (let key in dataJSON['sections']) { // json文件数据由服务器提供，而不是编译前准备好
    //   this.dataAry.push(dataJSON['sections'][key])
    // }
  },
  mounted  () {
  },
  props: {
    dataJson: {
    }
  },
  watch: {
    dataJson: function (curV) {
      this.dataAry = []
      for (let key in curV['sections']) {
        this.dataAry.push(curV['sections'][key])
      }
      // console.log(this.dataAry)
      // console.log('更新网页数据')
    }
  }
}
</script>

<style lang="scss" scoped type="text/scss">
  @import '@scss/base.scss';
  .container {
    background-color: #f5f5f5;
  }
 .content {
   width: $WIDTH;
   left: 0;
   right: 0;
   margin: auto;
 }
</style>
