<template>
  <div class="container">
    <div class="content">
      <home-channel-item  v-for="(key, index) in channelData" v-bind:key="index"
                          :channel=key :icon-type=iconArray[index]></home-channel-item>
    </div>
  </div>
</template>

<script>
import HomeChannelItem from './HomeChannelItem'
// import homeJson from '@static/json/main/homeChannel.json'
export default {
  name: 'HomeChannelLeft',
  components: {HomeChannelItem},
  data: function () {
    return {
      channelData: null,
      iconArray: ['icon-shouji', 'icon-zhuyetuangou', 'icon-facebook', 'icon-cucunqia', 'icon-ai49', 'icon-chongzhi'],
      homeData: null
    }
  },
  created: function () {
    // this.homeData = homeJson
    // this.channelData = this.homeData['leftList']
  },
  mounted: function () {
    this.getData(this)
  },
  methods: {
    getData: function (host) {
      this.axios.get('/homeData').then(function (res) {
        host.homeData = res.data
        host.channelData = host.homeData['leftList']
      })
    }
  }
}
</script>

<style scoped>
  .container {
  }
  .content {
    display: flex;
    flex-wrap: wrap; /* 6个组件按顺序排列，超出换行*/
    width: 234px;
    height: 170px;
    background: #5f5750;
  }
</style>
