<template>
  <div class="container">
    <div class="content">
      <component :is="type" :itemsProp="itemsData"></component>
    </div>
  </div>
</template>

<script>
import Gallery1226x621 from './Gallery1226x621'
import ImgText1226x434 from './ImgText1226x434'
import ListTwoType1226x482 from './ListTwoType1226x482'
import ListThreeType1226x376 from './ListThreeType1226x376'
import DividerLine from './DividerLine'
import ListLabel1226x68 from './ListLabel1226x68'
import CellsAutoFill from './CellsAutoFill'
import HeadScreen from './HeadScreen'
import ProductionListTwo1226x492 from './ProductionListTwo1226x492'
import ProductionListOne1226x434 from './ProductionListOne1226x434'
// import dataJSON from '@assets/json/kind/cellphone.json'
export default {
  name: 'CatalogueSegment',
  components: {
    gallery: Gallery1226x621,
    list_label: ListLabel1226x68,
    list_img_text: ImgText1226x434,
    list_two_type4: ListTwoType1226x482,
    list_three_type: ListThreeType1226x376,
    divider_line: DividerLine,
    cells_auto_fill: CellsAutoFill,
    head_screen: HeadScreen,
    production_list_two: ProductionListTwo1226x492,
    production_list_one: ProductionListOne1226x434
  },
  data () {
    return {
      type: '',
      itemsData: null
    }
  },
  created () {
    this.type = this.dataProp['view_type']
    switch (this.type) {
      case 'list_img_text':
      case 'gallery':
      case 'list_label':
      case 'list_two_type4':
      case 'list_three_type':
        this.itemsData = this.dataProp['body']['items']
        break
      case 'divider_line':
      case 'cells_auto_fill':
      case 'head_screen':
      case 'production_list_two':
      case 'production_list_one':
        this.itemsData = this.dataProp['body']
        break
    }
    // console.log(this.dataProp)
    // console.log(this.type)
    // console.log(this.itemsData)
  },
  mounted () {},
  methods: {
  },
  props: {
    dataProp: null
  }
}
</script>

<style scoped>

</style>
