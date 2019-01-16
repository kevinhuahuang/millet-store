<template>
  <div class="container">
    <div class="content">
      <h3 style="display:inline-block">{{comType}}</h3>
      <div class="link_area" v-for="(item, index) in linkDataArray" v-bind:key="item" @mouseenter="emitIndex(linkDataArray.length - index -1)">
        <title-link-item :link-name="item" :link-index="index" @be-activated="manageActivatedItem" :activated-com="activatedArray[index]"></title-link-item>
      </div>
    </div>
  </div>
</template>

<script>
import TitleLinkItem from './TitleLinkItem'
export default {
  name: 'SegmentTitle',
  components: {TitleLinkItem},
  data: function () {
    return {
      linkDataArray: [],
      activatedArray: []
    }
  },
  created: function () {
    this.linkDataArray = this.reverseArray(this.linkArray)
  },
  mounted: function () {
  },
  props: {
    comType: {
      type: String,
      default: '处理器'
    },
    linkArray: {
      type: Array,
      default: function () {
        return ['处理器']
      }
    }
  },
  methods: {
    emitIndex: function (index) {
      this.$emit('get-link-index', index)
    },
    reverseArray: function (ary) {
      let outAry = []
      let actAry = []
      for (let i = ary.length - 1; i >= 0; i--) {
        outAry.push(ary[i])
        if (i === 0) {
          actAry.push(true)
        } else {
          actAry.push(false)
        }
      }
      this.activatedArray = actAry
      // console.log('初始化：' + this.activatedArray)
      return outAry
    },
    manageActivatedItem: function (index) {
      let ary = new Array(this.activatedArray.length).fill(false) // 初始化数组
      ary[index] = true
      this.activatedArray = ary // 指向新的数组才能触发数组的动态响应
      // console.log('动态值: ' + this.activatedArray)
    }
  },
  watch: {
    linkArray: function (curV) {
      this.linkDataArray = []
      this.linkDataArray = this.reverseArray(curV)
    },
    activatedArray: {
      handler: function (newValue, oldValue) {
        // console.log('change_:' + newValue)
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped="scoped" type="text/scss">
  @import '@scss/base.scss'; //; is needed
  .container {
  }
  .content {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: $WIDTH;
    height: 58px;
  }
  a {
    text-decoration-line: none;
    line-height: 0.9em;
  }
  .link_area {
    display: inline-block;
    float: right;
    margin-top: 20px;
    margin-right: 30px;
  }

</style>
