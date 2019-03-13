<template>
  <div class="container">
    <div class="content">
      <overview-segment v-for="(key, value, index) in dataAry"  v-bind:key="index" :dataProp="key"></overview-segment>
    </div>
  </div>
</template>

<script>
// import dataJson from '@static/json/overview/cellphone/blackshark.json'
// import dataJson from '@static/json/overview/cellphone/blackshark2.json'
// import dataJson from '@static/json/overview/cellphone/max3.json'
// import dataJson from '@static/json/overview/cellphone/mi6x.json'
// import dataJson from '@static/json/overview/cellphone/mi8.json'
// import dataJson from '@static/json/overview/cellphone/mi8i.json'
// import dataJson from '@static/json/overview/cellphone/mi8ud.json'
// import dataJson from '@static/json/overview/cellphone/mi8youth.json'
// import dataJson from '@static/json/overview/cellphone/mix2s.json'
// import dataJson from '@static/json/overview/cellphone/mix3s.json'
// import dataJson from '@static/json/overview/cellphone/redmi6.json'
// import dataJson from '@static/json/overview/cellphone/redmi6a.json'
// import dataJson from '@static/json/overview/cellphone/redmi6pro.json'
// import dataJson from '@static/json/overview/cellphone/redminote5.json'

import OverviewSegment from './OverviewSegment'
export default {
  name: 'OverviewPage',
  components: {OverviewSegment},
  data () {
    return {
      dataAry: []
    }
  },
  created () {
    // for (let key in dataJson) {
    //   if (dataJson[key]['type']) {
    //     this.dataAry.push(dataJson[key])
    //   }
    // }
  },
  mounted () {},
  methods: {},
  props: {}
}
</script>

<style scoped>

</style>
