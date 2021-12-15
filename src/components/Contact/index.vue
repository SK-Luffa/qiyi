<template>
  <div class="index-parts contact-contaner">
    <h1>{{ $t("contact") }}</h1>

    <el-row class="map-lay">
      <el-col :span="16">
        <div class="map">
          <baidu-map
            class="bmView"
            :scroll-wheel-zoom="false"
            :center="location"
            :zoom="zoom"
            ak="9G0G5QEPfRbSWaiLpCgoGD31DtGjboFc"
          >
            <bm-marker
              :position="location"
              :dragging="false"
              @click="infoWindowOpen"
            >
              <bm-info-window
                :show="mapShow"
                @close="infoWindowClose"
                @open="infoWindowOpen"
                >{{ $t("companyName") }}</bm-info-window
              >
            </bm-marker>
          </baidu-map>
        </div></el-col
      >
      <el-col :span="8">
        <div class="tt">
          <p>
            <span v-for="item in declarations" :key="item"
              >{{ item }}<br
            /></span>
          </p></div
      ></el-col>
    </el-row>
    <el-row class="need-lay">
      <el-col :span="8" v-for="(item, i) in departments" :key="i">
        <div class="need-box">
          <div class="tt">
            <div class="title">
              <span class="svg" v-html="item.svg">
                <!-- {{ item.svg }} -->
              </span>
              <span class="text">{{ item.name }}</span>
            </div>
            <p>
              {{ item.phone }}<br />
              {{ item.mail }}<br />
              {{ item.tel }}
            </p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Icon from "../Icon";
// import svg1 from "../../assets/images/svg/need (1).svg";
// import svg2 from "../../assets/images/svg/need (2).svg";
// import svg3 from "../../assets/images/svg/need (3).svg";
import svgArr from "./svg";
export default {
  data() {
    // 121.356353,31.317195
    return {
      location: {
        lng: 121.356353,
        lat: 31.317195,
      },
      zoom: 18,
      mapShow: true,
      departmentText: this.$t("index.departments"),
      declarations: this.$t("index.declaration"),
    };
  },
  components: {
    Icon,
  },
  computed: {
    departments() {
      // console.log(this.departmentText);

      let arr = this.departmentText.map((item, i) => {
        return {
          ...item,
          svg: svgArr.svgArr[i],
        };
      });

      return arr;
    },
  },
  methods: {
    infoWindowClose() {
      this.mapShow = false;
    },
    infoWindowOpen() {
      this.mapShow = true;
    },
  },
};
</script>

<style lang="less" scoped>
.contact-contaner {
  width: 1140px;
  margin: 0 auto;
  .el-col {
    padding: 0 10px;
  }
  .map-lay {
    margin-bottom: 20px;
    .el-col {
      .map {
        height: 300px;
        width: 100%;
        background-color: #ccc;
        .bmView {
          height: 100%;
        }
      }
      .tt {
        height: 300px;
        background: linear-gradient(339deg, #4897ff 0%, #78c9ff 100%);
        border-radius: 4px;
        text-align: left;
        position: relative;
        p {
          position: absolute;
          left: 30px;
          top: 50%;
          font-size: 16px;
          line-height: 34px;
          transform: translateY(-50%);
          color: #fff;
          &::after {
            content: "";
            width: 4px;
            height: 16px;
            background: #0083ff;
            opacity: 1;
            position: absolute;
            top: 8px;
            left: -10px;
          }
        }
      }
    }
  }
  .need-lay {
    margin-bottom: 20px;
    .need-box {
      box-shadow: 1px 5px 10px rgba(0, 116, 224, 0.3);
      opacity: 1;
      border-radius: 4px;
      padding: 20px 0;
      .tt {
        text-align: left;
        width: 70%;
        margin: 0 auto;
        .title {
          text-align: center;
          font-size: 20px;
          .text {
            display: inline-block;
            line-height: 55px;
            font-size: 20px;
            font-weight: bold;
            // vertical-align:middle;
            text-anchor: middle; /* 文本水平居中 */
            // dominant-baseline: middle; /* 文本垂直居中 */
          }
          .svg {
            vertical-align: middle;
            display: inline-block;
            height: 55px;
            margin-right: 10px;
          }
        }
        p {
          color: rgba(101, 112, 137, 1);
          font-size: 14px;
          line-height: 26px;
        }
      }
    }
  }
}
@media screen and(max-width: 900px) {
  .contact-contaner {
    .el-col {
      padding: 0;
    }
    .map-lay,
    .need-lay {
      .el-col-16,
      .el-col-8 {
        margin-bottom: 10px;
        width: 100% !important;
      }
    }
    .map-lay {
      .map {
        height: 300px;
      }

      .tt {
        height: 200px !important;
      }
    }
  }
}
</style>
