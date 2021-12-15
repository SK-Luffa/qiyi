<template>
  <div class="support-container index-parts">
    <h1>{{ $t("supports") }}</h1>
    <div class="wrapper">
      <div class="left">
        <h3>{{ $t("index.sup.title") }}</h3>
        <h5>
          <Icon type="select" style="color: #8a8a8a" />{{
            $t("index.sup.subTitle1")
          }}
        </h5>
        <p>{{ $t("index.sup.text1") }}</p>
        <br />
        <div class="btn">
          <el-button round size="small" @click="toPage('Support')"  >{{
            $t("index.sup.enterBtn")
          }}</el-button>
        </div>
        <br />
        <br />
        <h5>
          <Icon type="select" style="color: #8a8a8a" />{{
            $t("index.sup.subTitle2")
          }}
        </h5>
        <p>{{ $t("index.sup.text2") }}</p>
        <br />
        <div class="btn">
          <el-button round size="small" @click="toPage('Support')" >{{
            $t("index.sup.enterBtn")
          }}</el-button>
        </div>
        <br />
        <br />
      </div>
      <div class="right">
        <img :src="bg" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<script>
import bg from '@/assets/images/banner01.jpg';
import Icon from '../Icon';

export default {
  data() {
    return {
      bg,
    };
  },
  components: {
    Icon,
  },
  methods:{
     toPage(name) {
      this.$router.push({
        name,
      });
    },
  }
};
</script>

<style lang='less' scoped>
.index-parts {
  width: 1140px;
  .wrapper {
    display: flex;
    & > div {
      width: 50%;
    }
    .left {
      text-align: left;
      .btn {
        width: 40%;
        text-align: center;
      }
      h3 {
        line-height: 60px;
      }
      h5 {
        line-height: 24px;
        font-size: 16px;
        i.iconfont{
          margin-right: 2px;
        }
      }
      p {
        line-height: 28px;
        font-size: 14px;
        color: #555;
      }
    }
    .right {
      border-radius:10px ;
      overflow: hidden;
      img {
        width: 100%;
        display: block;
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .index-parts {
    margin: 40px auto 10px;
    width: 96%;
    .wrapper {
      flex-wrap: wrap;
      justify-content: center;
      & > div {
        margin: 0 auto;
        width: 90%;
      }
    }
  }
}
</style>
