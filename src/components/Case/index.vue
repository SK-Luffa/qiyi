<template>
  <div class="index-parts">
    <h1>{{ $t("cases") }}</h1>
    <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="2021" name="2021"></el-tab-pane>
      <el-tab-pane label="2020" name="2020"></el-tab-pane>
      <el-tab-pane label="2019" name="2019"></el-tab-pane>
      <el-tab-pane label="2018" name="2018"></el-tab-pane>
      <el-tab-pane label="2017" name="2017"></el-tab-pane>
    </el-tabs> -->
    <div class="produtions">
      <div class="index-card">
        <el-card v-for="(item, i) in cases" :key="i">
          <!-- <img :src="item" class="image" /> -->
          <div class="case-card-container">
            <h1>{{ item.caseName }}</h1>
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
      </div>
    </div>
  </div>
</template>

<script>
import imgCase1 from '../../assets/images/case/shbus/main.png';
import imgCase2 from '../../assets/images/case/nbring/main.png';
import imgCase3 from '../../assets/images/case/tengcent/main.png';

export default {
  data() {
    return {
      caseArr: this.$t('index.cases'),
      indexCardArr: [imgCase1, imgCase2, imgCase3],
      activeName: '2021',
    };
  },
  computed: {
    cases() {
      return this.caseArr.map((item, i) => ({
        ...item,
        img: this.indexCardArr[i],
      }));
    },
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="less" scoped>
.produtions {
  margin-bottom: 20px;
}
.index-parts {
  margin: 40px auto 10px;
  width: 96%;
  .index-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .el-card {
      width: 32.5%;
      margin-bottom: 20px;
      .case-card-container {
        width: 98%;
        margin: 0 auto;
        // display: flex;
        justify-content: space-between;
        padding: 12px;
        h1 {
          line-height: 18px;
          font-size: 20px;
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
          max-height: 157px;
          margin-top: 14px;
          overflow: auto;
          float: left;
          font-size: 14px;
          text-align: justify;
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
  }
}

@media screen and (max-width: 900px) {
  .index-parts {
    margin: 40px auto 10px;
    width: 96%;
    .index-card {
      width: 96%;
      margin: 0 auto;
      flex-wrap: wrap;
      .el-card {
        width: 100%;
        margin-bottom: 6px;
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
    }
  }
}
</style>
