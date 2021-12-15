<template>
  <div class="home">
    <Banner :banners="banners" />
    <div class="parts">
      <div class="index-parts ">
      <h1>{{ $t("about") }}</h1>
      <p>{{ $t("index.companyIntro") }}</p>
      <br />

      <el-button round size="small " @click="toPage('About')">{{
        $t("index.more")
      }}</el-button>
    </div>
    </div>
    
    <Tech :indexCardArr="indexCardArr" />
    <el-button round size="small " @click="toPage('Tech')">{{
      $t("index.more")
    }}</el-button>

<div class="parts"  style="margin-top:30px;">
   <Products />
   <el-button round size="small " @click="toPage('Serve')">{{
      $t("index.more")
    }}</el-button>
</div>
    

    <Case />
    <el-button round size="small" @click="toPage('Case')">{{
      $t("index.more")
    }}</el-button>
    <div class="parts" style="margin-top:30px;">
    <Support />
    </div>

    <Contact />

    <Posit />
  </div>
</template>

<script>
// @ is an alias to /src

import Banner from "../components/Banner";
import Tech from "../components/Tech";
import Products from "../components/Products";
import Case from "../components/Case";
import Support from "../components/Support";
import Contact from "../components/Contact";
import Posit from "../components/Posit";
import bn1 from "../assets/images/banner/index/banner01.png";
import bn2 from "../assets/images/banner/index/banner02.png";
import bn3 from "../assets/images/banner/index/banner03.png";

export default {
  name: "Home",
  data() {
    return {
      banners: [bn1, bn2, bn3],
      indexCardArr: this.$t("index.tech"),
    };
  },
  components: {
    Banner,
    Tech,
    Products,
    Case,
    Support,
    Contact,
    Posit,
  },
  mounted() {
    window.scroll({
      top: 0,
      left: 0,
    });
  },
  methods: {
    toPage(name) {
      this.$router.push({
        name,
      });
    },
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
@media screen and (max-width: 1240px) {
  .index-parts {
    margin: 40px auto 10px;
    width: 96%;
  }
}
@media screen and (max-width: 900px) {
  .index-parts {
    margin: 40px auto 10px;
    width: 96%;
  }
}
.posit-container .item[data-v-c1c7cb7c] {
    width: 60px;
    height: 80px;
    cursor: pointer;
    transition: all 0.5s;
    text-align: center !important;
}
.parts{
  background: #f7f8fc;
  width: 100%;
  padding-bottom: 50px;
  padding-top: 10px
}
</style>
