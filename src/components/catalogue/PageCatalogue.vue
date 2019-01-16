<template>
  <div class="container">
    <Header></Header>
    <!--<header-navigator  style="z-index: 1"></header-navigator>-->
    <header-navigator-with-left style="z-index: 3"></header-navigator-with-left>
    <div class="content">
     <catalogue-segment v-for="(key, index) in dataAry" v-bind:key="index" :data-prop="key" ></catalogue-segment>
    </div>
    <segment-footer></segment-footer>
    <brick-footer></brick-footer>
  </div>
</template>

<script>
// import dataJSON from '@assets/json/kind/cellphone.json'
// import dataJSON from '@assets/json/kind/children.json'
// import dataJSON from '@assets/json/kind/dress.json'
// import dataJSON from '@assets/json/kind/household.json'
// import dataJSON from '@assets/json/kind/life.json'
import dataJSON from '@assets/json/kind/notepad.json'
// import dataJSON from '@assets/json/kind/power.json'
// import dataJSON from '@assets/json/kind/router.json'
// import dataJSON from '@assets/json/kind/speaker.json'
// import dataJSON from '@assets/json/kind/television.json'
import CatalogueSegment from './CatalogueSegment'
import HeaderNavigator from '../main/headerNavigator/HeaderNavigator'
import BrickFooter from '../main/brick/BrickFooter'
import SegmentFooter from '../main/segment/SegmentFooter'
import HeaderNavigatorWithLeft from '../main/headerNavigator/HeaderNavigatorWithLeft'
export default {
  name: 'PageCatalogue',
  components: {HeaderNavigatorWithLeft, SegmentFooter, BrickFooter, HeaderNavigator, CatalogueSegment},
  data () {
    return {
      dataAry: []
    }
  },
  created () {
    for (let key in dataJSON['sections']) {
      this.dataAry.push(dataJSON['sections'][key])
    }
    // console.log('create:' + this.dataAry[0])
  },
  mounted  () {
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
