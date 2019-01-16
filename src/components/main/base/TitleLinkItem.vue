<template>
  <div class="container">
    <div class="content">
      <div class="link_area" :style="[isActivated ? activeStyle : silentStyle]" @mouseenter="beActive"> <!--style的数组语法绑定用中括号-->
        <a class="a_link">{{linkName}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleLinkItem',
  data: function () {
    return {
      isActivated: false,
      activeStyle: { // 是style对象，不是class对象
        borderBottom: '2px solid red',
        color: 'orange'
      },
      silentStyle: { // 是style对象，不是class对象
        borderBottom: '0',
        color: 'black'
      }
    }
  },
  mounted () {
    this.isActivated = this.activatedCom /* 初始化值 props第一值并不会触发watch */
  },
  methods: {
    beActive: function () {
      this.isActivated = true
      this.$emit('be-activated', this.linkIndex)
    }
  },
  props: {
    linkName: {
      type: String,
      default: '查看全部'
    },
    linkIndex: {
      type: Number
    },
    activatedCom: {
      type: Boolean
    }
  },
  watch: {
    activatedCom (curV) {
      this.isActivated = curV
      console.log('index: ' + this.linkIndex + '  activated: ' + curV)
    }
  }
}
</script>

<style lang="scss" scoped="" type="text/scss">
  * {
    user-select:  none;
  }
  .container {
  }
  .content {
    line-height: 1.8em;
  }
  .link_area:hover {
    cursor: pointer;
    border-bottom: 2px solid red;
    .a_link {
      color: orange;
    }
  }
  .a_link {
    text-decoration: none;
    /*color: black; !* 需取消，在js里设置，否则，js设置的color值无效*!*/
  }
</style>
