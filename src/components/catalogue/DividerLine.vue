<template>
    <div class="container">
      <div class="content" :style="{height: curHeight, backgroundColor: backgroundColor}"></div>
    </div>
</template>

<script>
export default {
  name: 'DividerLine',
  data () {
    return {
      itemData: null,
      curHeight: '152px',
      backgroundColor: 'red'
    }
  },
  created () { /* 不要放在mounted里赋值 */
    // this.curHeight = this.itemsProp.line_height + 'px'
    this.curHeight = '10px'
    this.backgroundColor = this.itemsProp.line_color
  },
  mounted () {},
  props: {
    itemsProp: {
      type: Object,
      default () {
        return {
          'line_color': 'black',
          'line_height': '28'
        }
      }
    }
  }
}
</script>

<style scoped="scoped" lang="scss" type="text/scss">
  @import '@scss/base.scss'; //; is needed
  .content {
    position: relative;
    width: $WIDTH;
    background-color: red;
  }
</style>
