<template>
  <div class="container">
    <div class="content">
      <div class="content_area">
        <a class="item">预约维修服务</a><span class="spe">|</span>
        <a class="item">7天无理由退货</a><span class="spe">|</span>
        <a class="item">15天免费换货</a><span class="spe">|</span>
        <a class="item">满150元包邮</a><span class="spe">|</span>
        <a class="item">520余家售后网点</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SegmentFooter'
}
</script>

<style lang="scss" scoped="" type="text/scss">
  @import '@scss/base.scss'; //; is needed
  .container {
  }
  * {
    user-select: none;
  }
  .content {
    margin-top: 80px;
    /*background: white;*/
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: $WIDTH;
    height: 80px;
  }
  .content_area {
    position: absolute;
    margin: auto; /* 垂直居中 */
    top: 0;
    bottom: 0;
    width: inherit;
    height: 25px;
    /*border: 1px solid red;*/
  }
  .item {
    cursor: pointer;
    display: inline-block;
    text-align: center;
    width: 236px; /* 1226/5 = 245*/
    height: inherit;
    font-size: 1em;
    font-weight: bold;
    color: #7e7b79;
  }
  .item:hover {
      color: #ff6700;
  }
  .spe {
    font-size: 1.2em;
    color: #cdcac8;
  }
</style>
