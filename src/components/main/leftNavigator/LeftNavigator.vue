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
        <div class="commodity_list" ref="commoditys"  @mouseenter="listHover" @mouseleave="listOut" @click="blockMainClick">
          <left-navigator-table :tableData="tableData"></left-navigator-table>
        </div> <!--导航表格-->
        <div class="left_shift" @click="leftShift"></div> <!--左移方向键-->
        <div class="right_shift" @click="rightShift"></div> <!--右移方向键-->
        <div class="slides_show" @click="blockMainClick"> <!--滑动图片选择的小圈圈 name=main_slides相同的name是一个组，一个组只有一个radio被选中-->
          <input type="radio" id="main_slides_first" name="main_slides" style="display: none" v-model="srcOption" value='0'>
          <label for="main_slides_first" class="slide_option" @click="blockMainClick"></label>
          <input type="radio" id="main_slides_second" name="main_slides" style="display: none" v-model="srcOption" value='1'>
          <label for="main_slides_second" class="slide_option" @click="blockMainClick"></label>
          <input type="radio" id="main_slides_third" name="main_slides" style="display: none" v-model="srcOption" value='2'>
          <label for="main_slides_third" class="slide_option" @click="blockMainClick"></label>
          <input type="radio" id="main_slides_fourth" name="main_slides" style="display: none" v-model="srcOption" value='3'>
          <label for="main_slides_fourth" class="slide_option" @click="blockMainClick"></label>
          <input type="radio" id="main_slides_fifth" name="main_slides" style="display: none" v-model="srcOption" value='4'>
          <label for="main_slides_fifth" class="slide_option" @click="blockMainClick"></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigatorTable from './LeftNavigatorTable'
import tableData from '@assets/json/main/navLeft.json'
import sliderData from '@assets/json/main/slider.json'
export default {
  name: 'LeftNavigator',
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
      srcOption: 0,
      imgArray: [],
      commodityData: 0,
      commodityType: 0,
      keyArray: [],
      tableArray: [],
      tableData: [],
      dataArray: [],
      sliderArray: [],
      backgroundArray: [],
      sliderCanvas: null
    }
  },
  created: function () {
    Object.keys(tableData).forEach(key => {
      this.tableArray.push(tableData[key])
      this.keyArray.push([this.tableArray[this.tableArray.length - 1]['data']['title'], this.tableArray[this.tableArray.length - 1]['data']['url']])
      this.dataArray.push(this.tableArray[this.tableArray.length - 1]['right'])
    })
    this.tableData = this.dataArray[0] // 默认的初始值

    Object.keys(sliderData).forEach(key => {
      this.sliderArray.push(sliderData[key])
    })
    // console.log(this.keyArray)
  },
  mounted: function () {
    this.navigatorContent = this.$refs.navigator_content
    this.leftNavigator = this.$refs.left_navigator
    this.srcOption = 0
    this.sliderCanvas = document.getElementById('slider_background_canvas')
    this.renewBackgroundImage(this.srcOption)
  },
  methods: {
    leftShift (e) {
      this.shiftSrc(e, true)
    },
    rightShift (e) {
      this.shiftSrc(e, false)
    },
    shiftSrc (e, isLeft) {
      e.stopPropagation() // 阻止父元素的单击响应
      let n = this.srcOption
      if (isLeft) {
        n--
      } else {
        n++
      }
      this.srcOption = String(n > 4 ? 0 : (n < 0 ? 4 : n))
    },
    renewBackgroundImage (option) {
      this.navigatorContent.style.backgroundImage = 'url(' + this.sliderArray[option]['img'] + ')'
      this.mainHref = this.sliderArray[option]['url']
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
    },
    blockMainClick: function (e) {
      e.stopPropagation() // 阻止父元素的单击响应 , 但并不阻止祖父元素的单击响应
    }
  },
  props: {
  },
  watch: {
    srcOption (curV) {
      this.renewBackgroundImage(curV)
    },
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
    background: #dddddd;
  }
  .navigator_content { /* 包括左边的导航和右边的图片*/
    cursor: pointer;
    width: $WIDTH;
    height: $height;
    background-size: cover /* 图片缩放或扩大来适应容器 */
  }
  .left_navigator {
    display: inline-block; /* 行内块状元素 */
    position: relative;
    width: 234px;
    height: $height;
    background: rgba(37, 45, 56, 0.5) /* rgba可设置透明度，注意多了个a, 透明度的值为小数, 不要使用opacity，它的子元素会跟着透明 */
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
    width: 992px;
    height: 462px;
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
  .left_shift { /* 左移方向键 */
    position: absolute;
    margin-top: auto;
    margin-bottom: auto;
    top: 0;
    bottom: 0;
    width: 40px;
    height: 70px;
    background: transparent;
  }
  .left_shift:hover {
    background: grey;
  }
  .left_shift:before {
    position: absolute;
    content: '';
    margin: auto; /* 居中 */
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 20px;
    height: 20px;
    border: 2px solid #ff985c;
    border-top: hidden;
    border-right: hidden; /* 隐藏上边框与右边框 */
    transform: rotate(45deg); /* 顺时针旋转45度 */
  }
  .left_shift:hover:before { /* 注：hover在before前面*/
    border-color: white;
  }
  .right_shift { /* 右移方向键 */
    position: absolute;
    margin-top: auto;
    margin-bottom: auto;
    top: 0;
    bottom: 0;
    right: 0;
    width: 40px;
    height: 70px;
    background: transparent;
  }
  .right_shift:hover {
    background: grey;
  }
  .right_shift:before {
    position: absolute;
    content: '';
    margin: auto; /* 居中 */
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width:20px;
    height: 20px;
    border: 2px solid #ff985c;
    border-bottom: hidden;
    border-left: hidden; /* 隐藏左边框与右边框 */
    transform: rotate(45deg); /* 顺时针旋转45度*/
  }
  .right_shift:hover:before {
    border-color: white;
  }
  .slides_show { /* 小圈圈的长方形容器 */
    position: absolute;
    right: 15px;
    bottom: 10px;
    width: 400px;
    height: 18px;
  }
  .slide_option { /* 小圈圈 */
    position: absolute;
    width: 10px;
    height: 10px;
    background: #787878;
    border: 2px solid #a0a0a0;
    border-radius: 10px; /* 将正方形变成圆形*/
  }
  .slide_option:hover {
    cursor: pointer;
    background: transparent;
  }
  .slide_option:before { /* extent response area 扩大响应区域*/
    content: ''; /* 内容为空 */
    position: absolute;
    left: -10px;
    top: -10px;
    right: -10px;
    bottom: -10px; /*左右 上下都平移了10px, 将10*10的正方形扩大为30*30的响应区域，中心点不变 */
  }
  input:checked+.slide_option { /* input:checked 选择状态下的input  + 紧接着在下一个的兄弟选择器*/
    background: transparent; /* 当input被选中时，小圈圈背景不显示，形成被选中的效果*/
  }
  .slide_option:nth-of-type(5) { /* 设置小圈圈的位置 */
    right: 10px;
  }
  .slide_option:nth-of-type(4) {
    right: 40px;
  }
  .slide_option:nth-of-type(3) {
    right: 70px;
  }
  .slide_option:nth-of-type(2) {
    right: 100px;
  }
  .slide_option:nth-of-type(1) {
    right: 130px;
  }
</style>
