<template>
  <div class="container">
    <div class="content" ref="contentRef">
      <div class="title_header">
        <div class="extend">
          <span v-if="statusExtend" class="down" @click="extendShrink('shrink')"></span>
          <span v-if="!statusExtend" class="up"  @click="extendShrink('extend')"></span>
        </div>
        <span class="title">{{titlePro}}</span>
      </div>
      <div class="table_container"  ref="tableRef" >
        <table frame=above class="table" border="1" cellpadding="0" cellspacing="0"><!--cellpadding边距 cellspacing间距-->
          <tr v-for="n in Math.ceil(listPro.length / 5)" v-bind:key="n">
            <td v-for="(key, index) in listPro.slice((n-1) * 5,(n-1) * 5 + 5)" v-bind:key="index">
              <brick246x161 :commodity="key"></brick246x161>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Brick246x161 from './Brick246x161'
import {PLACEHOLDER_IMAGE} from '@/public/CONSTANT.js'
export default {
  name: 'ListTable',
  components: {Brick246x161},
  data () {
    return {
      contentRef: 'contentRef',
      tableRef: 'tableRef',
      statusExtend: true,
      shrinkHeight: 55,
      extendHeight: 0
    }
  },
  mounted () {
    this.tableRef = this.$refs.tableRef
    this.contentRef = this.$refs.contentRef
    this.extendHeight = Math.ceil(this.listPro.length / 5) * 161 + this.shrinkHeight // 计算出list的高度，由子元素的个数决定
    this.contentRef.style.height = this.extendHeight + 'px'
  },
  methods: {
    extendShrink (commend) {
      if (commend === 'extend') { // 展开
        this.statusExtend = true
        this.tableRef.style.display = 'block'
        this.contentRef.style.height = this.extendHeight + 'px'
      } else if (commend === 'shrink') { // 收缩
        this.statusExtend = false
        this.tableRef.style.display = 'none'
        this.contentRef.style.height = this.shrinkHeight + 'px'
      }
    }
  },
  props: {
    listPro: {
      type: Array,
      default () {
        return [
          {
            url: 'https://www.mi.com/mix3/',
            img: PLACEHOLDER_IMAGE,
            product_name: '小米MIX 3',
            srcset: PLACEHOLDER_IMAGE
          },
          {
            url: 'https://www.mi.com/mi8youth/',
            img: PLACEHOLDER_IMAGE,
            product_name: '小米8 青春版',
            srcset: PLACEHOLDER_IMAGE
          },
          {
            url: 'https://www.mi.com/mi8ud/',
            img: PLACEHOLDER_IMAGE,
            product_name: '小米8 屏幕指纹版',
            srcset: PLACEHOLDER_IMAGE
          },
          {
            url: 'https://www.mi.com/mi8/',
            img: PLACEHOLDER_IMAGE,
            product_name: '小米8',
            srcset: PLACEHOLDER_IMAGE
          },
          {
            url: 'https://www.mi.com/mi8i/',
            img: PLACEHOLDER_IMAGE,
            product_name: '小米8 SE',
            srcset: PLACEHOLDER_IMAGE
          },
          {
            url: 'https://www.mi.com/mix2s/',
            img: PLACEHOLDER_IMAGE,
            product_name: '小米MIX 2S',
            srcset: PLACEHOLDER_IMAGE
          },
          {
            url: 'https://www.mi.com/max3/',
            img: PLACEHOLDER_IMAGE,
            product_name: '小米Max 3',
            srcset: PLACEHOLDER_IMAGE
          },
          {
            url: 'https://www.mi.com/mi6x/',
            img: PLACEHOLDER_IMAGE,
            product_name: '小米6X',
            srcset: PLACEHOLDER_IMAGE
          },
          {
            url: 'https://www.mi.com/blackshark2/',
            img: PLACEHOLDER_IMAGE,
            product_name: '黑鲨游戏手机 Helo',
            srcset: PLACEHOLDER_IMAGE
          },
          {
            url: 'https://www.mi.com/blackshark/',
            img: PLACEHOLDER_IMAGE,
            product_name: '黑鲨游戏手机',
            srcset: PLACEHOLDER_IMAGE
          },
          {
            url: '//www.mi.com/redmi6pro/',
            img: PLACEHOLDER_IMAGE,
            product_name: '红米6 Pro',
            srcset: PLACEHOLDER_IMAGE
          },
          {
            url: '//www.mi.com/redmi6/',
            img: PLACEHOLDER_IMAGE,
            product_name: '红米6',
            srcset: PLACEHOLDER_IMAGE
          },
          {
            url: '//www.mi.com/redmi6a/',
            img: PLACEHOLDER_IMAGE,
            product_name: '红米6A',
            srcset: PLACEHOLDER_IMAGE
          },
          {
            url: 'https://www.mi.com/redminote5/',
            img: PLACEHOLDER_IMAGE,
            product_name: '红米Note 5',
            srcset: PLACEHOLDER_IMAGE
          },
          {
            url: '//www.mi.com/p/5592.html',
            img: PLACEHOLDER_IMAGE,
            product_name: '移动4G+专区',
            srcset: PLACEHOLDER_IMAGE
          },
          {
            url: '//www.mi.com/compare/',
            img: PLACEHOLDER_IMAGE,
            product_name: '对比手机',
            srcset: PLACEHOLDER_IMAGE
          },
          {
            url: 'https://www.mi.com/micard',
            img: PLACEHOLDER_IMAGE,
            product_name: '米粉卡 日租卡',
            srcset: PLACEHOLDER_IMAGE
          },
          {
            url: PLACEHOLDER_IMAGE,
            img: '//c1.mifile.cn/f/i/15/goods/list/mimobile!70x70.jpg',
            product_name: '小米移动 电话卡',
            srcset: PLACEHOLDER_IMAGE
          },
          {
            url: 'https://item.mi.com/product/7532.html',
            img: PLACEHOLDER_IMAGE,
            product_name: '手机上门维修',
            srcset: PLACEHOLDER_IMAGE
          }
        ]
      }
    },
    titlePro: {
      type: String,
      default: '处理器'
    }
  }
}
</script>

<style lang="scss" scoped="scoped" type="text/scss">
  @import '@scss/base.scss'; //; is needed
  .container {
    position: relative;
    width: $WIDTH;
  }
  .content {
    width: $WIDTH;
    margin-top: 20px;
  }
  .title_header {
    position: absolute;
    height: 75px;
  }
  .title {
    margin-left: 45px;
    font-size: 1.1rem;
    color: #ff6d10;
  }
  .down, .up {
    position: absolute;
    margin-top: 2px;
    width: 20px;
    height: 20px;
    border-radius: 22px;
  }
  .down {
    border: 1px solid grey;
  }
  .up {
    border: 1px solid #ff6700;
  }
  .down:before {
    position: absolute;
    content: '';
    top: 5px;
    left: 6px;
    width: 5px;
    height: 5px;
    border-left: 3px solid grey;
    border-bottom: 3px solid grey;
    transform: rotate(-45deg)
  }
  .up:before {
    position: absolute;
    content: '';
    top: 8px;
    left: 6px;
    width: 5px;
    height: 5px;
    border-left: 3px solid #ff6700;
    border-top: 3px solid #ff6700;
    transform: rotate(45deg)
  }
  .list {
    width: $WIDTH;
    display: flex;
    justify-content: start;
  }
  .table {
    position: absolute;
    width: $WIDTH;
    top: 45px;
    border-color: #d4d4d4; /* 边框颜色 */
    border-collapse: collapse; /* 表格的边框合并为一个单一的边框 */
  }
</style>
