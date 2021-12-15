<template>
  <div class="posit-container">
    <div class="item">
      <img :src="iconArr[0]" alt="" />
      <div class="itemTitle">{{ items[0] }}</div>
    </div>
    <div class="item">
      <a
        href="mailto:yunying@shqitec.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="iconArr[1]" alt="" />
        <div class="itemTitle">{{ items[1] }}</div>
      </a>
    </div>
    <div class="item">
      <a
        href='https://qm.qq.com/cgi-bin/qm/qr?k=zBQ0XdlhjcG74RewPs-FClMRH8S0nqg7&jump_from=webapi">< img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="售前售后咨询" title="售前售后咨询'
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="iconArr[2]" alt="" />
        <div class="itemTitle">{{ items[2] }}</div>
      </a>
    </div>
    <div class="item" style="position:relative" @click="codeHeight == 105 ? (codeHeight = 0) : (codeHeight = 105)">
      <div class="code" :style="{ height: codeHeight + 'px' }" >
        <img :src="code" alt="">
      </div>
      <img :src="iconArr[3]" alt="" />
      <div class="itemTitle">{{ items[3] }}</div>
    </div>
    <div class="item">
      <img :src="iconArr[4]" alt="" />
      <div class="itemTitle">{{ items[4] }}</div>
    </div>
    <div class="item">
      <img :src="iconArr[5]" alt="" />
      <div class="itemTitle">{{ items[5] }}</div>
    </div>
  </div>
</template>

<script>
import qq from "../../assets/images/icon/qq.png"; //weibo
import email from "../../assets/images/icon/email.png";
import idea from "../../assets/images/icon/idea.png";
import online from "../../assets/images/icon/online.png";
import wechat from "../../assets/images/icon/wechat.png";
import weibo from "../../assets/images/icon/weibo.png";
import code from '@/assets/images/code.png';
export default {
  data() {
    return {
      items: this.$t("posit"),
      codeHeight:0,
      iconArr: [online, email, qq, wechat, weibo, idea],
      code
    };
  },
};
</script>

<style lang="less" scoped>
.posit-container {
  position: fixed;
  width: 60px;
  height: 340px;
  // border: 1px solid red;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  padding-bottom: 20px;
  padding-top: 20px;
  border-radius: 30px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  .item {
    width: 60px;
    height: 80px;
    cursor: pointer;
    transition: all 0.5s;
    a {
      text-decoration: none;
      color: #333;
    }
    &:hover {
      transform: scale(1.05);
    }
    // border: 1px solid green;
    & > img {
      display: block;
      margin: 4px auto;
    }
    .code {
      position: absolute;
      z-index: 99;
      left: -105px;
      top: 50%;
      transform: translateY(-50%);
      width: 105px;
      transition: all 0.5s;
      overflow: hidden;
      // img{
      //   width: 105px;
      //   height: 105px;
      //   display: block;
      //   :hover{
      //     transform: scale(1);
      //   }
      // }
    }
    .itemTitle {
      text-align: center;
      font-size: 12px;
    }
  }
}
@media screen and (max-width: 900px) {
  .posit-container {
    display: none;
  }
}
</style>