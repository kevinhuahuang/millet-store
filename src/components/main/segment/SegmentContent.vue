<template>
  <div class="container">
    <div class="content">
      <div class="title">
        <h2>内容</h2>
      </div>
      <div class="content_inside">
        <brick-content v-for="(key, index) in dataArray" v-bind:key="index" :titlePro="key[1]" :dataArrayProp="key[0]"
                       class="focuseable"></brick-content>
      </div>
    </div>
  </div>
</template>

<script>
import BrickContent from '../brick/BrickContent'
import titleJSON from '@assets/json/main/content.json'
import dataJSON from '@assets/json/main/mi.json'
export default {
  name: 'SegmentContent',
  components: {BrickContent},
  data () {
    return {
      contentData: [],
      titleArray: [],
      dataArray: []
    }
  },
  created () {
    for (let key in dataJSON['content']) {
      this.contentData.push(dataJSON['content'][key])
    }
    for (let key in titleJSON) {
      this.titleArray.push(titleJSON[key])
    }
    for (let i = 0; i < this.contentData.length; i++) {
      this.dataArray.push([this.contentData[i], this.titleArray[i]])
    }
    // console.log(this.dataArray)
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped type="text/scss">
  @import '@scss/base.scss';
  .content {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: $WIDTH;
    height: 500px;
    background-color: #f5f5f5
  }
  .title {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: $WIDTH;
    height: 65px;
  }
  .content_inside {
    display: flex;
    justify-content: space-between;
  }
  .focuseable {
    transition: margin-top 0.2s linear, box-shadow 0.2s linear; /* 多个属性用逗号隔开 */
  }
  .focuseable:hover { /* 上移2px*/
    margin-top: -3px;
    box-shadow: 0 4px 6px 6px #e5e5e5;
  }
</style>
