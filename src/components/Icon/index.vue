<template>
  <i class="iconfont" :class="iconClass"></i>
</template>

<script>
const iconObj = {
  nav: 'icon-a-daohanglancebianlandanchuicon',
  right: 'icon-xiaoyouqiehuan',
  danger: 'icon-a-lujing423',
  warn: 'iconxiaoxiicon-normal1',
  wxCirle: 'icon-gongzhonghaohaoicon',
  lnEn: 'icon-zhongyingwenqiehuan',
  lnZh: 'icon-dangqianzhongwen_press',
  back: 'icon-zuoqiehuan',
  select: 'icon-morengouxuanicon',
};
export default {
  data() {
    return {};
  },
  computed: {
    iconClass() {
      console.log(iconObj[this.type]);
      return iconObj[this.type];
    },
  },
  props: {
    type: {
      require: true,
      type: String,
    },
  },
};
</script>

<style lang="less" scoped>
@import "//at.alicdn.com/t/font_2718928_cidkadna13.css";
</style>
