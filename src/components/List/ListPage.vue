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
// import jsonData from '@static/json/list/list.json'
import SegmentFooter from '../main/segment/SegmentFooter'
import BrickFooter from '../main/brick/BrickFooter'
import HeaderNavigator from '../main/headerNavigator/HeaderNavigator'
import Header from '../main/headerNavigator/Header'
// import {PLACEHOLDER_IMAGE} from '@/public/CONSTANT.js'
export default {
  name: 'ListPage',
  components: {Header, HeaderNavigator, BrickFooter, SegmentFooter, ListTable},
  data () {
    return {
      titleArray: [],
      dataArray: [],
      dataJson: null
    }
  },
  created () {
    // for (let key in jsonData) {
    //   this.titleArray.push(key)
    //   this.dataArray.push(jsonData[key])
    // }
  },
  mounted: function () {
    this.getData(this)
  },
  methods: {
    getData: function (host) {
      this.axios.get('/listPageData').then(function (res) {
        host.dataJson = res.data
        host.titleArray = []
        for (let key in host.dataJson) {
          host.titleArray.push(key)
          host.dataArray.push(host.dataJson[key])
        }
      })
    }
  },
  props: {
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
