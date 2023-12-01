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
      blocks: [{ padding: "13px", background: "#ff6f00" }],
      prizes: [
        { range: 20, fonts: [{ text: "10分钟", top: "10%" }], background: "#ffcc80" },
        { range: 4.5, fonts: [{ text: "30分钟", fontColor: "#fff", top: "10%" }], background: "#ff8f00" },
        { range: 24, fonts: [{ text: "5分钟", top: "10%" }], background: "#ffcc80" },
        { range: 1, fonts: [{ text: "1000分钟", fontColor: "#fff", top: "10%" }], background: "#ff8f00" },
        { range: 0.5, fonts: [{ text: "谢谢参与", top: "10%" }], background: "#ffcc80" },
        { range: 20, fonts: [{ text: "-10分钟", fontColor: "#fff", top: "10%" }], background: "#ff8f00" },
        { range: 4.5, fonts: [{ text: "-30分钟", top: "10%" }], background: "#ffcc80" },
        { range: 24, fonts: [{ text: "-5分钟", fontColor: "#fff", top: "10%" }], background: "#ff8f00" },
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
        const index = 0;
        // 调用stop停止旋转并传递中奖索引
        this.$refs.myLucky.stop();
      }, 1000);
    },
    // 抽奖结束会触发end回调
    endCallback(prize) {
      console.log(prize);
    },
  },
};
</script>
