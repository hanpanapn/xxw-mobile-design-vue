<template>
  <div class="com-progress-index">
    <div class="com-progress-index-cur" :style="`width:${percentage}%;`"></div>
    <div class="com-progress-index-point">
      <slot name="tip"></slot>
    </div>
    <div
      class="com-progress-index-last"
      :style="`width:calc(100% - ${percentage}% - 20px);`"
    ></div>
  </div>
</template>
<script>
export default {
  name: "XxwProgress",
  props: {
    //进度条百分比
    percentage: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  computed: {},
  components: {},
  async mounted() {},
  watch: {},
  methods: {},
};
</script>
 <style lang="less">
.com-progress-index {
  width: 100%;
  height: 14px;
  background: #ffffff;
  border-radius: 7px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  .com-progress-index-point {
    width: 20px;
    height: 20px;
    background: #fd5926;
    border-radius: 50%;
    border: 6px solid #ff9979;
    //   position: absolute;
    //   top: -10px;
    //   left: 450px;
    position: relative;
    .tip {
      position: absolute;
      top: -80px;
      left: -300px;
      padding: 20px;
      background: white;
      border-radius: 10px;
      font-size: 25px;
      width: 300px;
      a {
        color: #ff6000;
      }
    }
  }
  .com-progress-index-cur {
    width: 50%;
    height: 10px;
    background: #ff9979;
    border: 3px solid white;
    border-right: 0px;
    border-radius: 7px 0 0 7px;
  }
  .com-progress-index-last {
    width: calc(50% - 24px);
    height: 10px;
    background: #ccc;

    border-radius: 0px 7px 7px 0px;
  }
}
</style>