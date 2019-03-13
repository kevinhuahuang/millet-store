<template>
  <div class="navigator"><!---->
    <div class="navigator_content" ref="navigator_content">
      <div class="left_navigator" ref="left_navigator"> <!--左侧导航条-->
        <div class="navigator_container"><!--左侧导航条 子项容器-->
          <div v-for="(key, index) in keyArray" v-bind:key="index" class="navigator_item"
               @mouseenter="hoverOperate(index)" @mouseleave="mouseOutOperate" @click="leftHrefResponse(index)">
            <span class="left_words">{{key[0]}}</span>
            <span class="right_extent">></span> <!--右方向扩展箭头-->
          </div> <!--左侧导航条子项-->
        </div>
      </div>
      <div class="right_show" @click="mainHrefResponse"> <!--右侧容器 产品导航表格和左移右移按键-->
        <div class="commodity_list" ref="commoditys"  @mouseenter="listHover" @mouseleave="listOut">
          <left-navigator-table :tableData="tableData"></left-navigator-table>
        </div> <!--导航表格-->
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigatorTable from './LeftNavigatorTable'
// import tableJson from '@static/json/main/navLeft.json'
// import {PLACEHOLDER_IMAGE} from '@/public/CONSTANT.js'
export default {
  name: 'LeftNavigatorPopup',
  components: {LeftNavigatorTable},
  data () {
    return {
      listWidth: '',
      isListHover: false,
      isListOut: true,
      isNavigatorHover: false,
      isNavigatorOut: true,
      navigatorContent: null,
      leftNavigator: null,
      mainHref: null,
      commodityType: 0,
      keyArray: [],
      tableArray: [],
      tableData: [],
      dataArray: []
    }
  },
  created: function () {
    // 2019_03_09 数据由服务器提供
    // this.tableData = tableJson
    // Object.keys(this.tableData).forEach(key => {
    //   this.tableArray.push(this.tableData[key])
    //   this.keyArray.push([this.tableArray[this.tableArray.length - 1]['data']['title'], this.tableArray[this.tableArray.length - 1]['data']['url']])
    //   this.dataArray.push(this.tableArray[this.tableArray.length - 1]['right'])
    // })
    // this.tableData = this.dataArray[0] // 默认的初始值
  },
  mounted: function () {
    this.navigatorContent = this.$refs.navigator_content
    this.leftNavigator = this.$refs.left_navigator
    this.getData(this)
  },
  methods: {
    getData: function (host) {
      this.axios.get('/navLeftData').then(function (res) {
        host.tableData = res.data
        Object.keys(host.tableData).forEach(key => {
          host.tableArray.push(host.tableData[key])
          host.keyArray.push([host.tableArray[host.tableArray.length - 1]['data']['title'], host.tableArray[host.tableArray.length - 1]['data']['url']])
          host.dataArray.push(host.tableArray[host.tableArray.length - 1]['right'])
        })
        host.tableData = host.dataArray[0] // 默认的初始值
      })
    },
    renewListWidth: function (len) {
      this.listWidth = Math.ceil(len / 6) * 248 + 'px' // 根据项目数量来设置弹出框的宽度
      this.$refs.commoditys.style.width = this.listWidth
      this.$refs.commoditys.style.border = '1px solid grey'
      this.$refs.commoditys.style.borderLeft = '0' // 无左边框
    },
    hoverOperate: function (type) {
      this.commodityType = type
      this.tableData = this.dataArray[type] // 改变table数据，并进行显示更新
      this.renewListWidth(this.tableData.length)
      this.isNavigatorHover = true
      this.isNavigatorOut = false
      this.isListOut = true
    },
    mouseOutOperate: function () { // 鼠标离开左侧导航项， 等待100ms再关闭
      this.isNavigatorHover = false
      this.isNavigatorOut = true
      setTimeout(this.hideList, 100) // keep list display
    },
    leftHrefResponse: function (index) { // 左侧导航单击响应
      window.location.href = this.keyArray[index][1]
    },
    listHover: function () {
      this.isListHover = true
      this.isListOut = false
    },
    listOut: function () { // 鼠标离开导航表格， 等待100ms再关闭
      this.isListHover = false
      this.isListOut = true
      setTimeout(this.hideList, 100)
    },
    hideList: function () {
      if (this.isListOut && this.isNavigatorOut) {
        this.$refs.commoditys.style.width = '0' // 宽度为零
        this.$refs.commoditys.style.border = '0' // 无边框
      }
    },
    mainHrefResponse: function () { // 用单击响应来替代标签<a>的网页跳转
      // console.log('href: ' + this.mainHref)
      window.open(this.mainHref) // 在新窗口中打开
      // window.location.href = this.mainHref // 网页跳转
    }
  },
  props: {
  },
  watch: {
    commodityType (curV) {
      this.tableData = this.dataArray[curV]
      this.renewListWidth(this.tableData.length)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@scss/base.scss";
  $height: 462px;
  .navigator {
    margin: auto;
    left: 0;
    right: 0;
    width: $WIDTH;
    height: $height;
  }
  .navigator_content { /* 包括左边的导航和右边的图片*/
    cursor: pointer;
    width: $WIDTH;
    height: $height;
  }
  .left_navigator {
    display: inline-block; /* 行内块状元素 */
    position: relative;
    width: 234px;
    height: $height;
    background: white;
    color: black;
    border: 1px solid red;
  }
  .navigator_container { /* 左侧导航条指引 */
    position: absolute;
    width: 234px;
    height: 420px; /* 共10项，每项42px*/
    top: 0;
    bottom: 0;
    margin: auto; /* 垂直居中 */
  }
  .navigator_item {  /* 左侧导航条每项的容器 包括左边的文本与右边的扩展指示*/
    line-height: 42px; /* 文本在容器中居中 */
    height: 42px;
  }
  .navigator_item:hover {
    background: #ff6700;
  }
  .left_words { /* 导航条子项左侧的指示文本 */
    float: left;
    margin-left: 30px;
    font-size: 0.9em;
    font-weight: bolder;
    color: black;
  }
  .navigator_item:hover .left_words {
    color: white;
  }
  .right_extent { /* 导航条子项右侧的扩展箭头*/
    float: right;
    margin-right: 30px;
    font-size: 1em;
    font-weight: bolder;
    color: #c9c9c9;
  }
  .right_show { /* 右侧容器：产品导航表格，左移右移按键，小圈圈 */
    position: absolute;
    display: inline-block;
    /*width: 992px; 必须去掉*/
    /*height: 462px; 必须去掉*/
  }
  .commodity_list { /* 在右侧弹出的导航表格 */
    position: absolute; /* 脱离正常的流 */
    transition: width 0s; /* 弹出动画 */
    top: 0; /* 多余 position:absolute时top,left默认为0 */
    left: 0; /* 多余 position:absolute时top,left默认为0 */
    width: 0;
    height: 460px;
    overflow: hidden;
    z-index: 1; /* 不被背景图片盖住 可省略，按绘制顺序，它本来就在背景图片上面，z-index只在组件内有效*/
  }
</style>
