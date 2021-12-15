<template>
  <div>
    <Banner :banners="banners" />
    <div class="serve-detail">
      <div class="back" @click="$router.go(-1)">
        <el-button size="mini" round class="setupBtn"  icon="el-icon-arrow-left">
          
          <span class="textBtn">返回</span>
          </el-button>
       
      </div>
      <div class="serve-detail-card">
        <div class="detail">
          <div class="img-box">
            <div class="block">
              <h4>{{ detailData.title }}</h4>
              <el-carousel height="412px!important">
                <el-carousel-item
                  class="el-carousel-items"
                  v-for="item in detailData.indexImgs"
                  :key="item"
                >
                  <img :src="item" alt="" style="width: 100%" />
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <div class="text">
            <p v-for="p in detailData.text" :key="p">
              {{ p }}
            </p>
          </div>
        </div>
        <div class="imgs">
          <img
            v-for="(img, i) in detailData.detailImgs"
            :key="i"
            :src="img"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../Banner";
import img1 from "../../assets/images/chanpinxilie.jpg";
import indexImg from "../../assets/images/13.3c/main/13.3.png";
import indexImg31 from "../../assets/images/31.2c/31.2.png";
import indexImg31z from "../../assets/images/31.2c/31.2-z.png";
import detail1 from "../../assets/images/13.3c/detail/1.jpg";
import detail2 from "../../assets/images/13.3c/detail/2.jpg";
import detail3 from "../../assets/images/13.3c/detail/3.jpg";
import detail4 from "../../assets/images/13.3c/detail/4.jpg";
import detail5 from "../../assets/images/13.3c/detail/5.jpg";

export default {
  data() {
    return {
      banners: [img1, img1, img1],
      detailData: {
        title: "13.3寸黑白电子墨水屏",
        indexImgs: [indexImg, indexImg, indexImg, indexImg],
        text: [
          `Ei-133BW-LAI 13.3寸黑白电子墨水显示屏采用台湾E-ink的电子墨水显示技术，是一款绿色环保、低耗电、视觉效果与纸张一样，可在阳光下直视内容、不刺眼、柔和、
        极具省电环保概念的高科技产品，传达给人一种独特的柔和艺术感视觉感受，是一般液晶显示器无法比拟的。电子墨水显示屏适合于公交站牌、政府公告、博物馆、医院等场所使用。`,
          "可应用于公交站台、公告栏、电子阅报栏、图书馆、博物馆、医院等需要减少光污染的场合，以及没有市电供给的场所。",
        ],
        detailImgs: [detail1, detail2, detail3, detail4, detail5],
      },
    };
  },
  components: {
    Banner,
  },

  mounted() {
    switch (location.href.split("/")[5]) {
      case "31.2":
        this.detailData.indexImgs = [
          indexImg31,
          indexImg31,
          indexImg31,
          indexImg31,
        ];
        this.detailData.text = [
          `Ei-312BW1-LAO 31.2寸黑白电子墨水显示屏采用台湾E-ink的电子墨水显示技术，是一款绿色环保、低耗电、视觉效果与纸张一样，可在阳光下直视内容、不刺眼、柔和、
        极具省电环保概念的高科技产品，传达给人一种独特的柔和艺术感视觉感受，是一般液晶显示器无法比拟的。电子墨水显示屏适合于公交站牌、政府公告、博物馆、医院等场所使用。`,
          "可应用于公交站台、公告栏、电子阅报栏、图书馆、博物馆、医院等需要减少光污染的场合，以及没有市电供给的场所。",
        ];
        this.detailData.title = "31.2寸黑白电子墨水屏";
        this.detailData.detailImgs = [indexImg31z];
        break;

      case "13.3":
        this.detailData.indexImgs = [indexImg, indexImg, indexImg, indexImg];
        this.detailData.text = [
          `Ei-133BW-LAI 13.3寸黑白电子墨水显示屏采用台湾E-ink的电子墨水显示技术，是一款绿色环保、低耗电、视觉效果与纸张一样，可在阳光下直视内容、不刺眼、柔和、
        极具省电环保概念的高科技产品，传达给人一种独特的柔和艺术感视觉感受，是一般液晶显示器无法比拟的。电子墨水显示屏适合于公交站牌、政府公告、博物馆、医院等场所使用。`,
        ];
        this.detailData.title = "13.3寸黑白电子墨水屏";
        this.detailData.detailImgs = [
          detail1,
          detail2,
          detail3,
          detail4,
          detail5,
        ];
        break;
    }
    var elcarousel__container = document.getElementsByClassName(
      "el-carousel__container"
    )[1];
    elcarousel__container.style.width = "430px";
    elcarousel__container.style.margin = "auto";
    window.scroll({
      top: 0,
      left: 0,
    });
  },
};
</script>

<style lang="less" scoped>
.serve-detail {
  width: 1140px;
  margin: 0 auto;
  .back {
    font-size: 20px;
    text-align: left;
    line-height: 60px;
    i {
      margin-right: 4px;
      color: #5388e3;
      font-size: 20px;
    }
  }
  .serve-detail-card {
    width: 98%;
    margin: 0 auto;
    padding: 40px 20px;
    box-sizing: border-box;
    .detail {
      display: flex;
      .img-box {
        width: 50%;
        h4 {
          text-align: center;
          margin-bottom: 10px;
        }
        img {
          display: block;
          width: 80%;
          margin: 0 auto;
        }
      }
      .text {
        width: 50%;
        box-sizing: border-box;
        padding: 20px;
        text-align: left;
        text-indent: 2em;
        p {
          margin-bottom: 1em;
        }
      }
    }
    .imgs {
      margin: 20px auto;
      width: 100%;

      img {
        width: 100%;
        margin-bottom: 60px;
        display: block;
      }
    }
  }
}
@media screen and(max-width: 900px) {
  .serve-detail {
    width: 96%;
    .serve-detail-card {
      padding: 0px;
      .detail {
        flex-wrap: wrap;
        .img-box {
          width: 100%;
          img {
            width: 100%;
          }
        }
        .text {
          width: 100%;
        }
      }
    }
  }
}
.small {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item{
 border-radius: 15px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.setupBtn{
 margin-left: 85px;
 margin-top: 20px;
 border: 1px solid #5388e3 !important;

}
.el-button:focus, .el-button:hover {
    color: #5388e3 !important;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}

</style>
