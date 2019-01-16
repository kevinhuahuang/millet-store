<template>
  <div class="container" :style="{width:curWidth, height:curHeight}">
    <div class="content" ref="contentRef" :style="{width:curWidth, height:curHeight, marginLeft:curMarginLeft}"></div>
  </div>
</template>

<script>
export default {
  name: 'CellsAutoFill',
  data () {
    return {
      contentRef: 'contentRef',
      curWidth: 0,
      curHeight: 0,
      curMarginLeft: 0
    }
  },
  created () {
    this.curWidth = Math.ceil(this.itemsProp.w / 2) + 'px'
    this.curHeight = Math.ceil(this.itemsProp.h / 2) + 'px'
    if (Math.ceil(this.itemsProp.w / 2) > 1226) {
      this.curMarginLeft = '-' + Math.ceil((this.itemsProp.w / 2) / 4) + 'px'
    } else {
      this.curMarginLeft = 0
    }
  },
  mounted () {
    this.contentRef = this.$refs.contentRef
    // this.contentRef.style.backgroundColor = this.itemsProp.bg_color
    this.contentRef.style.backgroundImage = 'url(' + this.itemsProp.items[0].img_url + ')'
  },
  props: {
    itemsProp: {
      type: Object,
      default () {
        return {
          'w': 2452,
          'h': 110,
          'bg_color': '#ffffff',
          'recommend_flag': '0',
          'items': [
            {
              'path_type': 'image',
              'x': 0,
              'y': 0,
              'w': 2452,
              'h': 110,
              'action': {
                'type': 'none',
                'login': false,
                'path': '',
                'log_code': '313468pcchannelcells_auto_fill001023#t=normal&act=other&page=channel&page_id=3468&bid=3142382.1'
              },
              'img_url': '//i8.mifile.cn/b2c-mimall-media/d0275829328e2bc388cabdd34357bf67.png',
              'img_url_webp': '//i8.mifile.cn/v1/a1/09ad4458-510b-9f52-0741-bd638ad0def2.webp',
              'img_url_color': '',
              'pc_url': ''
            }
          ]
        }
      }
    }
  }
}
</script>

<style scoped>
  .container {
    position: relative;
  }
  .content {
    position: relative;
    background-size: 100% 100%; /* 图片自适应宽度与高度*/
    background-color: #f5f5f5;
  }
</style>
