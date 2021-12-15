<template>
  <div class="tech">
    <Banner :banners="banners" />
    <Case />
  </div>
</template>

<script>
import Banner from '../components/Banner';
import Case from '../components/Case';

import bn1 from '../assets/images/banner/case/1.png';
import bn2 from '../assets/images/banner/case/2.png';
import bn3 from '../assets/images/banner/case/3.png';

export default {
  name: 'case',
  data() {
    return {
      banners: [bn1, bn2, bn3],
      indexCardArr: this.$t('index.cases'),
    };
  },
  components: {
    Banner,
    Case,
  },
  mounted() {
    window.scroll({
      top: 0,
      left: 0,
    });
  },
};
</script>
<style lang="less" scoped>
.index-parts {
  margin: 40px auto 10px;
  width: 1140px;

  p {
    font-size: 14px;
    text-align: justify; //两端对齐
    text-indent: 2em;
  }
}
@media screen and (max-width: 900px) {
  .index-parts {
    margin: 40px auto 10px;
    width: 96%;
  }
}
</style>
