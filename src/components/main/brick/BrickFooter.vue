<template>
  <div class="container">
    <div class="content">
      <div class="transverse_line"></div>
      <div class="content_area">
        <div class="left_area">
          <div class="up_area">
            <a class="up_item">帮助中心</a><a class="up_item">服务支持</a><a class="up_item">线下门店</a><a class="up_item">关于小米</a><a class="up_item">关注我们</a><a class="up_item">特色服务</a>
          </div>
          <div class="down_area">
            <div class="down_line">
              <a class="down_item">账户管理</a><a class="down_item">售后政策</a><a class="down_item">小米之家</a><a class="down_item">了解小米</a><a class="down_item">新浪微博</a><a class="down_item">F 码通道</a>
            </div>
            <div class="down_line">
              <a class="down_item">购物指南</a><a class="down_item">自助服务</a><a class="down_item">服务网点</a><a class="down_item">加入小米</a><a class="down_item">官方微信</a><a class="down_item">礼物码</a>
            </div>
            <div class="down_line">
              <a class="down_item">订单操作</a><a class="down_item">相关下载</a><a class="down_item">授权体验店</a><a class="down_item">投资者关系</a><a class="down_item">联系我们</a><a class="down_item">防伪查询</a>
            </div>
          </div>
        </div>
        <div class="vertical_line"></div>
        <div class="right_area">
          <div style="font-size:1.4em; color: #ff6700; margin-bottom: 15px;">400-100-5678</div>
          <div style="font-size:0.7em;"> 周一至周日 8:00-18:00</div>
          <div style="font-size:0.7em;">（仅收市话费）</div>
          <div class="call_us">联系客服</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrickFooter'
}
</script>

<style lang="scss" scoped="" type="text/scss">
  @import '@scss/base.scss'; //; is needed
  * {
    user-select: none;
  }
  .container{
  }
  .content {
    margin-top: 200px;
    position: absolute;
    /*background: white;*/
    margin-left: auto;
    margin-right: auto; /* 水平居中 */
    left: 0;
    right: 0;
    width: $WIDTH;
    height: 192px;
  }
  .transverse_line { /* 横线 */
    width: $WIDTH;
    height: 1px;
    background: #dddddd;
  }
  .content_area {
    margin-top: auto;
    margin-bottom: auto;/* 垂直居中 */
    top: 0;
    bottom: 0;
    width: $WIDTH;
    height: 96px;
  }
  .left_area {
    display: inline-block;
    width: 960px; /* 160*6 = 960 */
    height: inherit;
  }
  .vertical_line {
    display: inline-block;
    margin-top: 49px;
    height:96px;
    width: 1px;
    background: #dddddd;
  }
  .right_area {
    display: inline-block;
    text-align: center;
    width: 251px;
  }
  .up_area {
    width: inherit;
    margin-top: 35px;
  }
  .down_area {
    margin-top: 20px;
    width: inherit;
    height: inherit;
  }
  .up_item {
    cursor: pointer;
    display: inline-block;
    width: 160px;
    height: 17px;
    font-size: 1em;
    color: #464646;
  }
  .up_item:hover {
    color: #ff6700;
  }
  .down_item {
    cursor: pointer;
    display: inline-block;
    margin-top: 10px;
    width: 160px;
    height: 17px;
    font-size: 0.7em;
    color: gray;
  }
  .down_item:hover {
    color: #ff6700;
  }
  .call_us {
    cursor: pointer;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 120px;
    height: 30px;
    border: 1px solid #ff6700;
    text-align: center;
    color: #ff6700;
    line-height: 2em;
  }
  .call_us:hover {
    background: #ff6700;
    color: white;
  }
</style>
