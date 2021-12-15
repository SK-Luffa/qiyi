<template>
  <div class="tech">
    <Banner :banners="banners" />
    <Tech :indexCardArr="indexCardArr" />
  </div>
</template>

<script>
import Banner from '../components/Banner';
import Tech from '../components/Tech';
import bn1 from '../assets/images/banner/tech/1.png';
import bn2 from '../assets/images/banner/tech/2.png';
import bn3 from '../assets/images/banner/tech/3.png';

export default {
  name: 'tech',
  data() {
    return {
      banners: [bn3, bn2, bn1],
      indexCardArr: this.$t('index.tech'),
    };
  },
  components: {
    Banner,
    Tech,
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
