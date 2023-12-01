<template>
  <LuckyWheel
    ref="myLucky" :default-config="defaultConfig" width="300px" height="300px" :prizes="prizes" :blocks="blocks" :buttons="buttons"
    @start="startCallback" @end="endCallback"
  />
</template>

<script lang="ts">
export default {
  data() {
    return {
      defaultConfig: {
        accelerationTime: 700,
        decelerationTime: 700,
        stopRange: 0.8,
      },
      history: 0,
      next: null,
      blocks: [{ padding: "13px", background: "#ff6f00" }],
      prizes: [
        { range: 26.5, fonts: [{ text: "10分钟", top: "10%" }], background: "#ffcc80" },
        { range: 13, fonts: [{ text: "30分钟", fontColor: "#fff", top: "10%" }], background: "#ff8f00" },
        { range: 21, fonts: [{ text: "20分钟", top: "10%" }], background: "#ffcc80" },
        { range: 1, fonts: [{ text: "1000分钟", fontColor: "#fff", top: "10%" }], background: "#ff8f00" },
        { range: 0.5, fonts: [{ text: "谢谢参与", top: "10%" }], background: "#ffcc80" },
        { range: 16, fonts: [{ text: "-10分钟", fontColor: "#fff", top: "10%" }], background: "#ff8f00" },
        { range: 10, fonts: [{ text: "-30分钟", top: "10%" }], background: "#ffcc80" },
        { range: 10.5, fonts: [{ text: "-20分钟", fontColor: "#fff", top: "10%" }], background: "#ff8f00" },
        { range: 1, fonts: [{ text: "-1000分钟", top: "10%" }], background: "#ffcc80" },
        { range: 0.5, fonts: [{ text: "谢谢参与", fontColor: "#fff", top: "10%" }], background: "#ff8f00" },
      ],
      buttons: [{
        radius: "35%",
        background: "#ff6f00",
        pointer: true,
        fonts: [{ text: "健身环，启动!", fontColor: "#fff", fontSize: "14px", fontWeight: "bold", top: "-10px" }],
      }],
    };
  },
  methods: {
    // 点击抽奖按钮会触发star回调
    startCallback() {
      // 调用抽奖组件的play方法开始游戏
      this.$refs.myLucky.play();
      // 模拟调用接口异步抽奖
      setTimeout(() => {
        // 假设后端返回的中奖索引是0
        // const index = 0;
        // 调用stop停止旋转并传递中奖索引
        this.$refs.myLucky.stop(this.next === null ? undefined : this.next);
        this.next = null;
      }, 1000);
    },
    // 抽奖结束会触发end回调
    endCallback(prize) {
      console.log(prize);
      const text = prize.fonts[0].text;
      if (text !== "谢谢参与") {
        this.history += Number(text.split("分钟")[0]);
      }
      if (this.history <= -20 && this.history > -1000) {
        this.next = 1;
      } else if (this.history >= 50 && this.history < 1000) {
        this.next = 6;
      }
      console.log(this.history);
    },
  },
};
</script>
