<template>
  <div class="container">
    <div class="content">
      <div class="title">{{itemsProp[0].label_title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListLabel1226x68',
  data () {
    return {}
  },
  props: {
    itemsProp: {
      type: Array,
      default () {
        return [
          {
            'label_title': '明星产品',
            'label_content': ''
          }
        ]
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
    height: 68px;
    /*border: 1px solid red;*/
  }
  .title {
    height: 68px;
    line-height: 68px;
    font-size: 1.5rem;
    color: #303030;
  }
</style>
