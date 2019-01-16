<template>
  <div class="container">
    <div class="content">
      <div class="left_area">
        <div class="text_area">
          <h4>浏览更多</h4>
          <h5>热门</h5>
        </div>
      </div>
      <div class="right_area">
        <span class="mark"></span>
      </div>
      <a :href="href"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Brick234x143More',
  data: function () {
    return {}
  },
  props: {
    href: {
      type: String,
      default: 'http://www.mi.com/a/h/7879.html'
    }
  }
}
</script>

<style scoped>
  .container {
    width: 234px;
    height: 143px;
    background: white;
  }
  .content {
    position: relative;
    width: inherit;
    height: inherit;
  }
  a {
    cursor: pointer;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 234px;
    height: 143px;
    text-decoration: none;
  }
  .left_area {
    display: inline-block;
    width: 50%;
    height: inherit;
  }
  .text_area {
    position: absolute;
    top: 25px;
    left: 20px;
  }
  .right_area {
    position: absolute;
    display: inline-block;
    width: 50%;
    height: inherit;
  }
  .mark {
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 48px;
    height: 48px;
    border: 3px solid orange;
    border-radius: 48px;
  }
  .mark:before {
    content: '';
    position: absolute;
    top: 22px;
    left: 10px;
    width: 25px;
    border-bottom: 4px solid orange;
  }
  .mark:after {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    width: 15px;
    height: 15px;
    border-top: 4px solid orange;
    border-right: 4px solid orange;
    transform: rotate(45deg);
  }

</style>
