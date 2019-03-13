<template>
  <div class="container">
    <div class="content">
      <div class="start_time">{{startTime}} 场</div>
      <img src="@assets/images/flashpurchase.png">
      <div class="notice">{{startOrEnd}}</div>
      <div class="time_remaining"> <!--下面几元素要写在一行-->
        <div class="hour">{{reHour}}</div><span class="sep">:</span><span class="minute">{{reMin}}</span><span class="sep">:</span><span class="second">{{reSec}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlashBuyTime',
  data: function () {
    return {
      timeArray: [0, 10, 12, 18, 20, 22],
      remTime: 1,
      reHour: '4',
      reMin: '24',
      reSec: '60',
      startTime: '0',
      timeClock: null,
      startOrEnd: '距离开始还有',
      isStarted: 'false'
    }
  },
  mounted: function () {
    this.timeClock = setInterval(this.renewTime, 1000)
  },
  props: {
    borderTopColor: {
      type: String,
      default: 'blue'
    }
  },
  methods: {
    renewTime: function () {
      let date = new Date() // 获取日期和时间
      let hour = date.getHours()
      let min = date.getMinutes()
      let sec = date.getSeconds()
      this.getRemainingTime(this.getStartTime(hour), hour, min, sec)
    },
    getStartTime: function (hour) {
      for (let i = 0; i < this.timeArray.length; i++) {
        if (this.timeArray[i] >= hour) {
          // console.log('hour:' + hour + '  start: ' + this.timeArray[i])
          this.isStarted = this.timeArray[i] === hour
          return this.timeArray[i]
        }
      }
    },
    getRemainingTime: function (stHour, hour, min, sec) {
      let temp
      if (this.isStarted) { // 已经开始， 距离结束还有
        this.startOrEnd = '距离结束还有'
        this.startTime = stHour >= 10 ? stHour + ':00' : '0' + stHour + ':00'
        temp = sec ? 60 - sec : 0
        this.reSec = temp >= 10 ? temp : '0' + temp
        temp = sec ? 59 - min : 60 - min // 秒是否有从分钟借位
        this.reMin = temp >= 10 ? temp : '0' + temp
        this.reHour = '00'
      } else { // 未开始
        this.startOrEnd = '距离开始还有'
        this.startTime = stHour >= 10 ? stHour + ':00' : '0' + stHour + ':00'
        temp = sec ? 60 - sec : 0
        this.reSec = temp >= 10 ? temp : '0' + temp
        temp = sec ? 59 - min : 60 - min // 秒是否有从分钟借位
        this.reMin = temp >= 10 ? temp : '0' + temp
        temp = min ? stHour - hour - 1 : stHour - hour // 分钟是否有从小时借位
        this.reHour = temp >= 10 ? temp : '0' + temp
      }
    }
  }
}
</script>

<style scoped>
  .container {
    width: 234px;
    height: 340px;
  }
  .content {
    position: absolute;
    width: inherit;
    height: 339px;
    background: #f1eded;
    border-top: 1px solid #E53935;
    text-align: center; /* 子元素将继承 */
  }
  .start_time {
    color: #ff3d1b;
    margin-top: 50px;
    font-size: 1.3em;
    /*border: 1px solid black;*/
  }
  img {
    display: block;
    margin-top: 25px;
    margin-left: auto; /* 水平居中 */
    margin-right: auto; /* 水平居中 */
    left: 0;
    right: 0;
    width: 34px;
    height: 53px;
  }
  .notice {
    margin-top: 40px;
    font-size: 1em;
    color: grey;
  }
  .time_remaining {
    margin-top: 35px;
    margin-left: auto; /* 水平居中 */
    margin-right: auto; /* 水平居中 */
    left: 0;
    right: 0;
    width: 180px;
    height: 46px;
  }
  .hour, .minute, .second {
    display: inline-block;
    margin-left: 5px; /* 与冒号间的距离 */
    margin-right: 5px;
    content: '25';
    width: 46px;
    height:  46px;
    background: #605751;
    font-size: 1.3rem;
    font-weight: normal;
    text-align: center;
    line-height: 46px;
    color: white;
  }
  .sep {
    font-size: 1.6rem;
    font-weight: normal;
  }
</style>
