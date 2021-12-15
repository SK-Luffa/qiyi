<template>
  <div class="tech">
    <Banner :banners="banners" />
    <div class="index-parts">
      <h1>{{ $t("about") }}</h1>
      <div class="about-btns">
        <el-button
          v-for="(item, i) in btnsArr"
          :key="item"
          @click="btnChange(i)"
          size="small"
          :class="{ active: activeIndex === i }"
          >{{ item }}</el-button
        >
      </div>
      <div class="swapper" v-show="activeIndex === 0">
        <div
          v-for="(item, i) in companyItem"
          :key="i"
          class="about-item"
          :class="{ active: cardIndex == i }"
          @click="cardIndex = i"
        >
          <el-card :body-style="{ padding: '0px' }">
            <div class="about-us">
              <h1>{{ item.itemName }}</h1>
              <br />
              <p v-for="(tt, textIndex) in item.text" :key="textIndex">
                {{ tt }}
              </p>
            </div>
            <div></div>
          </el-card>
          <div class="about-item-img">
            <img :src="item.img" alt="" />
            <h5>{{ item.itemName }}</h5>
          </div>
        </div>
      </div>
      <div class="swapper" v-show="activeIndex === 1">
        <div
          v-for="(item, i) in companyNeed"
          :key="i"
          class="about-item"
          :class="{ active: needActiveIndex == i }"
          @click="needActiveIndex = i"
        >
          <el-card>
            <div class="about-us">
              <h1>{{ item.itemName }}</h1>
              <p>
                {{ item.text }}
              </p>
            </div>
            <div></div>
          </el-card>
          <div class="about-item-img">
            <img :src="item.img" alt="" />
          </div>
        </div>
      </div>
      <div
        class="swapper"
        style="justify-content: space-around"
        v-show="activeIndex === 2"
      >
        <div v-for="(item, i) in shops" :key="i" class="about-item">
          <div class="about-item-img" style="min-width: 221px">
            <a :href="item.src" target="_blank" rel="noopener noreferrer">
              <img :src="item.img" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div
        class="swapper"
        style="justify-content: space-around"
        v-show="activeIndex === 3"
      >
        <el-carousel>
          <el-carousel-item v-for="(item, i) in news" :key="i">
            <el-card>
              <!-- <img :src="item" class="image" /> -->
              <div class="case-card-container">
                <h1>{{ item.title }}</h1>
                <div class="left">
                  <img :src="item.img" alt="" />
                </div>
                <div class="right">
                  <div class="pcontent" v-for="it in item.text" :key="it">
                    <p>{{ it }}</p>
                    <br />
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>
            </el-card>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner';
import img1 from '../assets/images/chanpinxilie.jpg';
import aboutPng from '../assets/images/about/about.png';
import newPng from '../assets/images/about/new.png';
import historyPng from '../assets/images/about/history.png';
import connectPng from '../assets/images/about/connect.png';
import honnerPng from '../assets/images/about/honner.png';

import designPng from '../assets/images/about/need/design.png';
import mannagerPng from '../assets/images/about/need/mannager.png';
import productPng from '../assets/images/about/need/product.png';
import skillPng from '../assets/images/about/need/skill.png';
import techPng from '../assets/images/about/need/tech.png';

import jdPng from '../assets/images/about/shop/jd.png';
import Png1688 from '../assets/images/about/shop/1688.png';
import tbPng from '../assets/images/about/shop/tb.png';

import newsPic from '../assets/images/news/news1/main.png';

export default {
  name: 'about',
  data() {
    return {
   
      banners: [img1, img1, img1],
      activeIndex: 0,
      btnsArr: this.$t('index.about.btnArr'),
      img: img1,

      cardIndex: 0,
      needActiveIndex: 0,
      companyItemText: this.$t('index.about.companyItems'),
      companyItemPng: [aboutPng, historyPng, newPng, honnerPng, connectPng],
      companyNeedText: this.$t('index.about.companyNeed'),
      companyNeedPng: [productPng, mannagerPng, designPng, techPng, skillPng],
      shopsText: this.$t('index.about.shops'),
      shopsPng: [Png1688, jdPng, tbPng],
      newsArr: this.$t('index.about.news'),
      newsPicArr: [newsPic],
    };
  },
  computed: {
    companyItem() {
      return this.companyItemText.map((it, i) => ({
        ...it,
        img: this.companyItemPng[i],
      }));
    },
    companyNeed() {
      return this.companyNeedText.map((it, i) => ({
        ...it,
        img: this.companyNeedPng[i],
      }));
    },
    shops() {
      return this.shopsText.map((it, i) => ({
        ...it,
        img: this.shopsPng[i],
      }));
    },
    news() {
      return this.newsArr.map((it, i) => ({
        ...it,
        img: this.newsPicArr[i],
      }));
    },
  },
  components: {
    Banner,
  },
  watch:{
    '$route.query.cls':function(){
      

    this.btnChange(this.$route.query.cls)
    },
    // this.$route.query.cls:{},

    
  },
  mounted() {
   
    window.scroll({
      top: 0,
      left: 0,
    });
  },
  methods: {
    btnChange(i) {
      this.activeIndex = i;
    },
  },
};
</script>
<style lang="less" scoped>
.index-parts {
  margin: 40px auto 10px;
  width: 1140px;
  .about-btns {
    width: 100%;
    display: flex;
    justify-content: space-around;
    .active {
      color: #5388e3;
    }
  }
  .swapper {
    min-height: 600px;
    display: flex;
    margin-top: 20px;
    flex-wrap: nowrap;
    .el-carousel {
      min-height: 450px;
      width: 100%;
      height: "" !important;
      /deep/.el-carousel__container {
        min-height: 450px !important;
      }
      .el-carousel__item {
        overflow: auto;
      }
      .case-card-container {
        width: 98%;
        margin: 0 auto;
        // display: flex;

        justify-content: space-between;
        padding: 12px;
        h1 {
          line-height: 20px;
          font-size: 18px;
        }
        .left {
          width: 45%;
          float: left;
          margin-right: 12px;
          margin-top: 14px;
          img {
            margin-top: 0px;
            width: 100%;
            display: block;
          }
        }
        .right {
          width: calc(55% - 24px);

          margin-top: 14px;
          overflow: auto;
          float: left;
          font-size: 14px;
          text-align: justify;
          max-height: 36a0px;
          .pcontent {
            p {
              text-indent: 2em;
              padding-right: 16px;
              box-sizing: border-box;
            }
            width: 98%;
            margin: 0 auto;
          }
        }
      }
    }
    .about-item {
      width: 12%;
      cursor: pointer;
      .el-card {
        display: none;
        padding: 10px;
        height: 100%;
        box-sizing: border-box;
        h1 {
          font-size: 20px;
          margin-bottom: 10px;
        }
        p {
          font-size: 14px;
          text-align: justify;
          width: 90%;
          margin: 0 auto;
          word-break: break-all;
          text-indent: 2em;
        }
      }
      .about-item-img {
        display: block;
        box-sizing: border-box;
        height: 100%;
        margin: 0 10px;
        position: relative;
        overflow: hidden;
        border-radius: 10px;
        h5 {
          position: absolute;
          right: 20px;
          -webkit-writing-mode: vertical-rl;
          writing-mode: vertical-rl;
          color: #ffffff;
          font-size: 24px;
          line-height: 36px;
          font-weight: bold;
          letter-spacing: 4px;
          bottom: 10px;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      &.active {
        width: 50%;
        .el-card {
          display: block;
        }
        .about-item-img {
          display: none;
        }
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .index-parts {
    margin: 40px auto 10px;
    width: 96%;
    .swapper {
      flex-wrap: wrap;
      .el-carousel {
        .case-card-container {
          position: relative;
          padding: 0;
          margin: 0;
          width: 100%;
          padding-top: 14px;
          .left {
            width: 100%;
            h1 {
              position: absolute;
              width: 100%;
              text-align: center;
              bottom: 10px;
              color: #fff;
              line-height: 36px;
              font-size: 18px;
              font-weight: normal;
            }
            img {
              width: 100%;
              height: 100%;
              margin-top: 0px;
            }
          }
          .right {
            width: 100%;
          }
        }
      }
      .about-item {
        width: 100%;
        margin-bottom: 20px;
        &.active {
          width: 100%;
        }
        .el-card {
          display: block;
          width: 100%;
        }
        .about-item-img {
          display: none;
        }
      }
    }
  }
}
</style>
