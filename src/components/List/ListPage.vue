<template>
  <div class="container">
    <Header></Header> <!---注意是大写的H-->
    <header-navigator style="z-index: 1"></header-navigator>
    <div class="header"></div>
    <div class="content">
      <list-table v-for="(key, index) in titleArray" v-bind:key="index" :list-pro="dataArray[index]" :title-pro="key"></list-table>
    </div>
    <segment-footer></segment-footer>
    <brick-footer></brick-footer>
  </div>
</template>

<script>
import ListTable from './ListTable'
import dataJSON from '@assets/json/list/list.json'
import SegmentFooter from '../main/segment/SegmentFooter'
import BrickFooter from '../main/brick/BrickFooter'
import HeaderNavigator from '../main/headerNavigator/HeaderNavigator'
import Header from '../main/headerNavigator/Header'
export default {
  name: 'ListPage',
  components: {Header, HeaderNavigator, BrickFooter, SegmentFooter, ListTable},
  data () {
    return {
      titleArray: [],
      dataArray: []
    }
  },
  created () {
    for (let key in dataJSON) {
      this.titleArray.push(key)
      this.dataArray.push(dataJSON[key])
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" type="text/scss" scoped="">
  @import '@scss/base.scss';
  .content {
    position: relative;
    width: $WIDTH;
    left: 0;
    right: 0;
    margin: auto;
  }
</style>
