<template>
  <div class="container">
    <div class="content">
      <div class="section_index">
        <div><img :src="indexData.img.data_src"></div>
        <div class="desc_left_div">
          <h2 class="title_white">{{indexData.h2}}</h2>
          <p class="property">{{indexData.p_property}}</p>
          <p class="cpu">{{indexData.p_cpu}}</p>
          <p class="memory">{{indexData.p_memory}}</p>
          <p class="price"><strong class="strong">{{indexData.p_price}}</strong>起<del class="original">{{indexData.p_original}}</del></p>
        </div>
      </div>
      <div class="section_video">
        <div class="img"><img :src="videoData.img.data_src"></div>
        <div class="center_div">
          <video autoplay="autoplay" :loop="videoData.video.loop" :preload="videoData.video.preload" :src="videoData.video.src" :type="videoData.video.type"></video>
        </div>
      </div>
      <div class="section_screen">
        <div class="img"><img :src="screenData.img.data_src"></div>
        <div class="desc_top_center_div">
          <h2 class="title">{{screenData.h2_animate_1}}</h2>
          <p class="property">{{screenData.p_last_0}}</p>
          <p class="cpu">{{screenData.p_last_1}}</p>
        </div>
      </div>
      <div class="section_special">
        <div class="desc_top_center_div">
          <h2 class="title">{{specialData.h2_animate_1}}</h2>
          <p class="property">{{specialData.p_last_0}}</p>
          <p class="cpu">{{specialData.p_last_1}}</p>
        </div>
        <div class="img"><img :src="specialData.img_1.data_src"></div>
      </div>
      <div class="section_camera">
        <div class="desc_top_center_div">
          <h2 class="title">{{cameraData.h2_animate_1}}</h2>
          <p class="property">{{cameraData.p_last}}</p>
        </div>
        <div class="img"><img :src="cameraData.img.data_src"></div>
      </div>
      <div class="section_cpu">
        <div class="img"><img :src="cpuData.img_0.data_src"></div>
        <div class="img"><img :src="cpuData.img_1.data_src"></div>
        <div class="desc_left_div">
          <h2 class="title">{{cpuData.h2_animate_1}}</h2>
          <p class="property">{{cpuData.p_last_0}}</p>
          <p class="cpu">{{cpuData.p_last_1}}</p>
        </div>
      </div>
      <div class="section_cooling">
        <div class="img"><img :src="coolingData.img_1.data_src"></div>
        <div class="desc_top_center_div">
          <p class="cpu">{{coolingData.p_last}}</p>
          <h2 class="title">{{coolingData.h2_animate_2}}</h2>
          <p class="property">{{coolingData.p_last_0}}</p>
          <p class="cpu">{{coolingData.p_last_1}}</p>
        </div>
      </div>
      <div class="section_process_img">
        <div class="img"><img :src="processImgData.img.data_src"></div>
        <div class="video_div">
          <video autoplay="autoplay" :loop="processImgData.video.loop" :preload="processImgData.video.preload" :src="processImgData.video.src" :type="processImgData.video.type"></video>
        </div>
        <div class="desc_top_center_div">
          <h2 class="title">{{processImgData.h2_animate_1}}</h2>
          <p class="property">{{processImgData.p_last_0}}</p>
          <p class="cpu">{{processImgData.p_last_1}}</p>
        </div>
      </div>
      <div class="section_protect_eyes">
        <div class="img"><img :src="protectEyeData.img.data_src"></div>
        <div class="desc_right_div">
          <h2 class="title">{{protectEyeData.h2_animate_1}}</h2>
          <p class="property">{{protectEyeData.p_last_0}}</p>
          <p class="cpu">{{protectEyeData.p_last_1}}</p>
          <p class="cpu">{{protectEyeData.p_last_2}}</p>
        </div>
      </div>
      <div class="section_micbiso">
        <div class="img"><img :src="micData.img.data_src"></div>
        <div class="desc_middle_center_div">
          <p class="property">{{micData.p_0_0}}</p>
          <p class="cpu">{{micData.p_0_1}}</p>
          <p class="cpu">{{micData.p_1_0}}</p>
          <p class="cpu">{{micData.p_1_1}}</p>
        </div>
      </div>
      <div class="section_antenna">
        <div class="img"><img :src="antennaData.img.data_src"></div>
        <div class="desc_left_div">
          <h2 class="title">{{antennaData.h2_animate_1}}</h2>
          <p class="property">{{antennaData.p_last}}</p>
        </div>
      </div>
      <div class="section_sharkmodel">
        <div class="img"><img :src="modeData.img_0.data_src"></div>
        <div class="center_div">
          <div class="desc_top_center_div">
            <h2 class="title">{{modeData.h2_animate_1}}</h2>
            <p class="property">{{modeData.p_last}}</p>
          </div>
          <video autoplay="autoplay" :loop="modeData.video.loop" :preload="modeData.video.preload" :src="modeData.video.src" :type="modeData.video.type"></video>
        </div>
      </div>
      <div class="section_dock">
        <div class="img"><img :src="dockData.img.data_src"></div>
        <div class="center_div">
          <div class="desc_top_center_div">
            <h2 class="title">{{dockData.h2_animate_1}}</h2>
            <p class="property">{{dockData.p_last}}</p>
          </div>
          <video autoplay="autoplay" :loop="dockData.video.loop" :preload="dockData.video.preload" :src="dockData.video.src" :type="dockData.video.type"></video>
        </div>
      </div>
      <div class="section_handler">
        <div class="img"><img :src="handlerData.img_0.data_src"></div>
        <div class="center_div">
          <div class="desc_top_center_div">
            <h2 class="title">{{handlerData.h2_animate_1}}</h2>
            <p class="property">{{handlerData.p_last}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import dataJson from '@static/json/overview/cellphone/blackshark.json'
export default {
  name: 'CellphoneBlackShark',
  data () {
    return {
      indexData: null,
      videoData: null,
      screenData: null,
      specialData: null,
      cameraData: null,
      cpuData: null,
      coolingData: null,
      processImgData: null,
      protectEyeData: null,
      micData: null,
      antennaData: null,
      modeData: null,
      dockData: null,
      handlerData: null
    }
  },
  created () {
    // this.indexData = dataJson['section_index']
    // this.videoData = dataJson['section_video']
    // this.screenData = dataJson['section_screen']
    // this.specialData = dataJson['section_special']
    // this.cameraData = dataJson['section_camera']
    // this.cpuData = dataJson['section_cpu']
    // this.coolingData = dataJson['section_cooling']
    // this.processImgData = dataJson['section_proceimg']
    // this.protectEyeData = dataJson['section_protecteyes']
    // this.micData = dataJson['section_micbiso']
    // this.antennaData = dataJson['section_antenna']
    // this.modeData = dataJson['section_sharkmodel']
    // this.dockData = dataJson['section_dock']
    // this.handlerData = dataJson['section_handler']
  }
}
</script>

<style lang="scss" scoped="scoped" type="text/scss">
  .container{
  }
  .content {
  }
  img {
    width: 100%; /* 与父元素一致 */
    min-width: 1226px;
    height: auto; /* 根据宽度自动适应 */
    vertical-align: middle;
  }
  video {
    width: 100%;
    height: auto;
    vertical-align: middle;
  }
  .desc_left_div {
    width: 60%;
    position: absolute;
    top: 35%;
    left: 25%;
    /*border: 1px solid red;*/
  }
  .desc_right_div {
    width: 60%;
    text-align: right;
    position: absolute;
    top: 35%;
    right: 25%;
    /*border: 1px solid red;*/
  }
  .desc_top_center_div {
    position: absolute;
    width: 100%;
    top: 5%;
    text-align: center;
    /*border: 1px solid red;*/
  }
  .desc_middle_center_div {
    position: absolute;
    width: 100%;
    top: 35%;
    text-align: center;
    /*border: 1px solid red;*/
  }
  .title_white {
    margin-top: 0;
    color: white;
    font-size: 2.2rem;
  }
  .section_index {
    position: relative;
    /*border: 5px solid red;*/
    .title {
      margin-top: 0;
      color: white;
      font-size: 2.2rem;
    }
    .property {
      margin-top: -20px;
      font-size: 1.2rem;
      color: #0de216;
    }
    .cpu {
      margin-top: 60px;
      font-size: 1.3rem;
      color: white;
    }
    .memory {
      margin-top: -15px;
      font-size: 1rem;
      color: #b2b2b2;
    }
    .price {
      margin-top: 30px;
      font-size: 0.75rem;
      color: white;
    }
    .strong {
      font-size: 1.2rem;
      color: #0de216;
    }
    .original {
      margin-left: 10px;
      font-size: 1rem;
      color: white;
    }
  }
  .section_video {
    position: relative;
  }
  .section_screen {
    position: relative;
    .title {
      margin-top: 0;
      color: white;
      font-size: 1.5rem;
    }
    .property {
      margin-top: -10px;
      font-size: 0.8rem;
      color: white;
    }
    .cpu {
      margin-top: -10px;
      font-size: 0.8rem;
      color: white;
    }
  }
  .section_special {
    position: relative;
    background-image: url("//i1.mifile.cn/f/i/18/blackshark/index/index_phonebg.png");
    border: 1px solid transparent;  /* 如果不设置border, background-image无法布满由.img通过margin-top出来的130px*/
    .img {
      position: relative;
      width: 100%; /* 与父元素一致 */
      margin-top: 130px;

    }
    .title {
      margin-top: 0;
      color: white;
      font-size: 1.5rem;
    }
    .property {
      margin-top: -10px;
      font-size: 0.8rem;
      color: white;
    }
    .cpu {
      margin-top: -10px;
      font-size: 0.8rem;
      color: white;
    }
  }
  .section_camera{
      position: relative;
      .title {
        margin-top: 0;
        color: white;
        font-size: 2rem;
      }
      .property {
        margin-top: -10px;
        font-size: 0.8rem;
        color: white;
      }
      .cpu {
        margin-top: -10px;
        font-size: 0.8rem;
        color: white;
      }
    }
  .section_cpu {
    position: relative;
    .title {
      margin-top: 0;
      color: white;
      font-size: 1.5rem;
    }
    .property {
      margin-top: -10px;
      font-size: 0.8rem;
      color: white;
    }
    .cpu {
      margin-top: -10px;
      font-size: 0.8rem;
      color: white;
    }
  }
  .section_cooling {
    position: relative;
    .title {
      margin-top: 0;
      color: white;
      font-size: 2.5rem;
    }
    .property {
      margin-top: -10px;
      font-size: 0.8rem;
      color: white;
    }
    .cpu {
      margin-top: -10px;
      font-size: 0.8rem;
      color: white;
    }
  }
  .section_process_img {
    position: relative;
    .video_div {
      position: absolute;
      bottom: 20%;
      left: 20%
    }
    .title {
      margin-top: 0;
      color: white;
      font-size: 1.5rem;
    }
    .property {
      margin-top: -10px;
      font-size: 0.8rem;
      color: white;
    }
    .cpu {
      margin-top: -10px;
      font-size: 0.8rem;
      color: white;
    }
  }
  .section_protect_eyes {
    position: relative;
    .title {
      margin-top: 0;
      color: white;
      font-size: 1.5rem;
    }
    .property {
      margin-top: -10px;
      font-size: 0.8rem;
      color: white;
    }
    .cpu {
      margin-top: -10px;
      font-size: 0.8rem;
      color: white;
    }
  }
  .section_micbiso {
    position: relative;
    .property {
      margin-top: -10px;
      font-size: 0.8rem;
      color: white;
    }
    .cpu {
      margin-top: -10px;
      font-size: 0.8rem;
      color: white;
    }
  }
  .section_antenna {
    position: relative;
    .title {
      margin-top: 0;
      color: white;
      font-size: 1.5rem;
    }
    .property {
      margin-top: -10px;
      font-size: 0.8rem;
      color: white;
    }
  }
  .section_sharkmodel {
    position: relative;
    .title {
      margin-top: 190px;
      color: white;
      font-size: 1.5rem;
    }
    .property {
      margin-top: -10px;
      font-size: 0.8rem;
      color: white;
    }
  }
  .section_dock {
    position: relative;
    .title {
      margin-top: 0;
      color: white;
      font-size: 1.5rem;
    }
    .property {
      margin-top: -10px;
      font-size: 0.8rem;
      color: white;
    }
  }
  .section_handler {}
</style>
