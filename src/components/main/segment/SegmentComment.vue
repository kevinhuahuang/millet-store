<template>
  <div class="container"> <!---->
    <div class="content">
      <div class="content_area">
        <div style="position:relative">
          <h3 style="display:inline-block; font-size: 1.2em;">热评产品</h3>
        </div>
        <div class="content_container">
          <brick-comment296x415 v-for="(key, index) in commentData.slice(0,4)" v-bind:key="index"
                           class="focuseable" :commodity="key" ></brick-comment296x415>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import miJson from '@static/json/main/mi.json'
import BrickComment296x415 from '../brick/BrickComment296x415'
export default {
  name: 'SegmentComment',
  components: {BrickComment296x415},
  data: function () {
    return {
      commentData: null,
      miData: null
    }
  },
  created: function () { /* 不要在beforeCreate时调用 */
    // this.miData = miJson
    // this.commentData = this.miData['comment']
  },
  mounted: function () {
    this.getData(this)
  },
  methods: {
    getData: function (host) {
      this.axios.get('/miData').then(function (res) {
        host.miData = res.data
        host.commentData = host.miData['comment']
      })
    }
  },
  watch: {
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
    height: 490px;
    background-color: #f5f5f5
  }
  .content_area {
    position: absolute;
    width: inherit;
    height: 340px;
  }
  .content_container {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: $WIDTH;
  }
  .focuseable {
    transition: margin-top 0.2s linear, box-shadow 0.2s linear; /* 多个属性用逗号隔开 */
  }
  .focuseable:hover { /* 左移2px 上移2px*/
    margin-top: -3px;
    box-shadow: 0 4px 6px 6px #e5e5e5;
  }
</style>
