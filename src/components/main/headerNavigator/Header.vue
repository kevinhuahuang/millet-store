<template>
  <div class="header">
    <div class="header_content" >
        <div class="header_left">
          <a href="//www.mi.com/index.html">小米商城</a>
          <span class="sep">|</span>
          <a href="https://www.miui.com/" target="_blank">MIUI</a>
          <span class="sep">|</span>
          <a href="https://iot.mi.com/index.html" >IoT</a>
          <span class="sep">|</span>
          <a href="https://i.mi.com/" target="_blank">云服务</a>
          <span class="sep">|</span>
          <a href="https://jr.mi.com?from=micom" target="_blank">金融</a>
          <span class="sep">|</span>
          <a href="https://youpin.mi.com/" target="_blank">有品</a>
          <span class="sep">|</span>
          <a href="https://shuidi.mi.com/" target="_blank">小爱开放平台</a>
          <span class="sep">|</span>
          <a href="https://b.mi.com/?client_id=180100031058&masid=17409.0358" target="_blank">政企服务</a>
          <span class="sep">|</span>
          <a href="#J_modal-globalSites" data-toggle="modal">Select Region</a> <!--此处href作用 不解-->
        </div>
        <div class="header_right">
          <a  href="//order.mi.com/site/login" data-needlogin="true">登录</a>
          <span class="sep">|</span>
          <a  href="https://account.xiaomi.com/pass/register" >注册</a>
          <span class="sep">|</span>
          <a  href="https://account.xiaomi.com/pass/register" >消息通知</a>
          <div class="header_shopping_cart">
            <i class="iconfont icon-gouwuche"  style="margin-left:10px;"></i>
            <a  href="//order.mi.com/site/login" style="margin-left:10px;">购物车(0)</a>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped="" type="text/scss">
  @import '@scss/base.scss';
  $header_height:2.6rem;
  a {
    text-decoration: none;
  }
  a, span{
    font-size: .8rem; /*default 16px  1em = 16px*/
    color: #b0b0b0;
  }
  span {
    color: #4e4e4e;
  }
  a:hover {
    color: white;
  }
  .sep {
  }
  .header {
    width: 100%;
    height: $header_height;
    background-color: #333333;
  }
  .header_content {
    position: relative;
    background-color: #333333;
    width: $WIDTH; /* set width is fixation*/
    left: 0;
    right:  0;
    margin: auto; /* 水平居中*/
    height: inherit;
  }
  .header_left {/* 正常流的左边*/
    display:  inline-block;
    line-height: $header_height;
    /* 子元素将继承，line-height会撑大元素边框，当line-height与父元素的高度一致，本元素内容框也将被撑大到高度与父元素一致，
    因此无需设置其高度，注意，它并没有继承父元素的高度*/
    /*border: 1px solid red;*/
  }
  .header_right { /* 绝对布局，靠右*/
    display: inline-block;
    position: absolute;
    right: 1px;
    line-height: $header_height; /* vertical center*/
  }
  .header_shopping_cart {
    display:  inline-block;
    width: 120px;
    line-height: $header_height; /* vertical center*/
    background-color: #424242;
  }
  .header_shopping_cart:hover {
    color: #ff390d;
    background-color: white;
    a {
      color: #ff390d;
    }
  }
</style>
