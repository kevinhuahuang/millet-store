<template>
  <div class="container">
    <div class="content">
      <component :is="componentType" :commodity="commodityData"></component>
    </div>
  </div>
</template>

<script>
import ImgBgImgTextOverview from './ImgBgImgTextOverview'
import ImgImgTextOverview from './ImgImgTextOverview'
import ImgTextOverview from './ImgTextOverview'
import ImgVideoOverview from './ImgVideoOverview'
export default {
  name: 'OverviewSegment',
  components: {
    imgVideo: ImgVideoOverview,
    imgText: ImgTextOverview,
    imgImgText: ImgImgTextOverview,
    imgBgImgText: ImgBgImgTextOverview
  },
  data () {
    return {
      componentType: '',
      commodityData: null
    }
  },
  created () {
    this.fixData(this.dataProp)
  },
  mounted () {},
  methods: {
    fixData (data) {
      this.commodityData = data
      this.componentType = data['type']
    }
  },
  props: {
    dataProp: null
  },
  watch: {
    dataProp: function (curV) {
      this.fixData(curV)
    }
  }
}
</script>

<style scoped>

</style>
