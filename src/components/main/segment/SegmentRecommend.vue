<template>
  <div class="container"> <!---->
    <div class="content">
      <div class="content_area">
        <div style="position:relative">
          <h3 style="display:inline-block; font-size: 1.2em;">为你推荐</h3>
          <div class="left_move" ref="leftMoveRef" @click="leftClick" @mouseenter="leftMoveHover" @mouseleave="leftMoveLeave"></div>
          <div class="right_move" ref="rightMoveRef" @click="rightClick" @mouseenter="rightMoveHover" @mouseleave="rightMoveLeave"></div>
        </div>
        <div class="content_container"> <!--固定长度的容器，容器内的内容长度大于此固定长度-->
          <!--一行5个组件，有“评论”元素和无“评论”元素的的组件不对齐，子组件是按正常的流布局，内容不同，子组件形成的流也不一致，所有不对齐？margin-top影响明显-->
          <!--按天然的方法是没办法让它们对齐， 可以用flex布局来让它们对齐-->
          <!--将子组件内不一致的元素设置absolute,让它脱离正常的流，也不被流影响，也不影响正确常的流，子组件流状态都是一致的就能对齐。-->
          <div class="content_commodity" ref="commodityListRef">
            <brick-recommend v-for="(key, index) in listDataArray" v-bind:key="index"
                             class="focuseable" :commodity="key" ></brick-recommend>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import miJson from '@static/json/main/recommend.json'
import BrickRecommend from '../brick/BrickRcommend'
export default {
  name: 'SegmentRecommend',
  components: {BrickRecommend},
  data: function () {
    return {
      listDataArray: [],
      itemLength: 0,
      commodityListRef: null,
      leftMoveRef: null,
      rightMoveRef: null,
      itemMaxWidth: 0,
      itemDistance: 248, // 14 + 234
      itemIndex: 0,
      isLeftEnd: true,
      isRightEnd: false,
      miData: null
    }
  },
  created: function () { /* 不要在beforeCreate时调用 */
    // this.miData = miJson
    // this.listDataArray = this.miData['data']
    // this.itemLength = this.listDataArray.length
  },
  mounted: function () {
    this.getData(this)
    // console.log(this.leftMoveRef.before)
  },
  methods: {
    leftClick: function () {
      this.itemIndex -= 5
      if (this.itemIndex <= 0) {
        this.itemIndex = 0
        this.isLeftEnd = true
      } else {
        this.isLeftEnd = false
      }
      this.isRightEnd = false
      this.commodityListRef.style.marginLeft = -(this.itemIndex * this.itemDistance) + 'px'
    },
    rightClick: function () {
      /*
        * 1.确定左边第一个项在数组中的index
        * 2.由这个index再确定magin-left
        * */
      this.itemIndex += 5
      this.itemIndex = this.itemIndex > (this.itemLength - 1) ? this.itemLength - 1 : this.itemIndex
      if (this.itemLength - this.itemIndex <= 5) { // 不足5个
        this.itemIndex = this.itemLength - 5 // 取最后面的5个
        this.isRightEnd = true
      } else {
        this.isRightEnd = false
      }
      this.isLeftEnd = false
      this.commodityListRef.style.marginLeft = -(this.itemIndex * this.itemDistance) + 'px'
    },
    leftMoveHover: function () {
      if (this.isLeftEnd) {
        this.leftMoveRef.style.cursor = 'default'
      } else {
        this.leftMoveRef.style.cursor = 'pointer'
      }
    },
    rightMoveHover: function () {
      if (this.isRightEnd) {
        this.rightMoveRef.style.cursor = 'default'
      } else {
        this.rightMoveRef.style.cursor = 'pointer'
      }
    },
    leftMoveLeave: function () {
      this.leftMoveRef.style.cursor = 'default'
    },
    rightMoveLeave: function () {
      this.rightMoveRef.style.cursor = 'default'
    },
    getData: function (host) {
      this.axios.get('/recommendData').then(function (res) {
        host.miData = res.data
        host.listDataArray = host.miData['data']
        host.itemLength = host.listDataArray.length

        host.commodityListRef = host.$refs.commodityListRef
        host.leftMoveRef = host.$refs.leftMoveRef
        host.leftMoveRef.style.opacity = '0.4'
        host.rightMoveRef = host.$refs.rightMoveRef
        host.maxWidth = (14 + 234) * host.itemLength - 14
        host.commodityListRef.style.width = host.maxWidth + 'px'
      })
    }
  },
  watch: {
    isLeftEnd: function (curV) {
      if (curV) {
        /* 通过改变透明度来呈现enable与disable的效果
          * 而不是通过切换两种颜色来呈现enable与disable的效果
          */
        this.leftMoveRef.style.opacity = '0.4'
        this.leftMoveRef.style.cursor = 'default'
      } else {
        this.leftMoveRef.style.opacity = '0.9'
      }
    },
    isRightEnd: function (curV) {
      if (curV) {
        this.rightMoveRef.style.opacity = '0.4'
        this.rightMoveRef.style.cursor = 'default'
      } else {
        this.rightMoveRef.style.opacity = '0.9'
      }
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
  @import '@scss/base.scss'; //; is needed
  .container {
  }
  .content {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: $WIDTH;
    height: 370px;
    background-color: #f5f5f5
  }
  .content_area {
    position: absolute;
    width: inherit;
    height: 340px;
  }
  .content_container {
    display: inline-block;
    position: absolute;
    height: 342px;
    width: $WIDTH;
    overflow: hidden;
  }
  .content_commodity {
    display: flex;
    justify-content: space-between;
    margin-left: 0;
    margin-top: 2px; /*上方空出2px 当子组件hover时上移2px有空间显示而不被切掉*/
    transition: margin-left 0.5s ease; /* 固定长度的容器内滚动*/
  }
  .inline {
    display: inline-block;
    margin-left: 14px;
  }
  .left_move {
    display: inline-block;
    position:  absolute;
    right: 36px; /* 右边矩形长度加它左右宽度*/
    bottom: 10px;
    width: 34px;
    height: 22px;
    border: 1px solid #b5b5b5;
    border-right: hidden; /* notice */
    color: #b5b5b5;
  }
  .left_move:before{
    content: attr(data-beforeData);
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto; /* 居中 */
    width: 8px;
    height: 8px;
    border: 2px solid #707070;
    border-right: hidden;
    border-bottom: hidden;
    transform: rotate(-45deg); /* remember*/
  }
  .right_move {
    display: inline-block;
    position: absolute;
    right: 0;
    bottom: 10px;
    width: 34px;
    height: 22px;
    border: 1px solid #b5b5b5;
    color: #b5b5b5;
  }
  .right_move:before{
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto; /* 居中 */
    content: '';
    width: 8px;
    height: 8px;
    border: 2px solid #707070;
    border-right: hidden;
    border-bottom: hidden;
    transform: rotate(135deg); /* remember*/
  }
  .focuseable {
    transition: margin-top 0.2s linear, box-shadow 0.2s linear; /* 多个属性用逗号隔开 */
  }
  .focuseable:hover { /* 左移2px 上移2px*/
    margin-top: -3px;
    box-shadow: 0 4px 6px 6px #e5e5e5;
  }
</style>
