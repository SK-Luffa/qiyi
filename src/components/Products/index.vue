<template>

  <div class="index-parts ">
    <h1>{{ $t("products") }}</h1>
    <div class="produtions">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          v-for="item in $t('index.prod')"
          :label="item.tab"
          :name="item.name"
          :key="item.name"
        >
          <div class="index-card">
            <el-card class="plate" v-for="(it, i) in indexCardArr" :key="i">
              <RouterLink
                :to="{
                  name: 'ServeDetail',
                  params: {
                    id: it.id,
                    activeMenu: 'serve',
                  },
                }"
                ><h1 class="h1S">
                  {{ it.name }}
                </h1>
                <img :src="it.img" class="image" />
              </RouterLink>
            </el-card>
          </div>

         
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- <el-button round size="small">{{ $t("index.more") }}</el-button> -->
  </div>
</template>

<script>
import enter from "../../assets/images/13.3c/main/enter.png";
import enter_2 from "../../assets/images/31.2c/bg2.png"

export default {
  data() {
    return {
      activeName: "bus",
      indexCardArr: [
        {
          id: "13.3",
          name: "13.3寸黑白电子墨水屏电子站牌",
          img: enter,
        },
        {
          id:"31.2",
          name:"31.2寸黑白电子水墨屏电子站牌",
          img:enter_2,
        },
        {
          id:"42",
          name:"42寸黑白电子水墨屏电子站牌",
          img:enter,
        },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log("tab",tab.name)
      // console.log(tab, event);
      if (tab.name === "bus") {
        this.indexCardArr = [
          { id: "13.3", name: "13.3寸黑白电子墨水屏", img: img1 },
        ];
      }
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
    position: relative;
    h1 {
      position: absolute;
      font-size: 24px;
      right: 40px;
      color: #fff;
      margin-top: 135px;
    }
    img {
      width: 100%;
      display: block;
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
        h1 {
          font-size: 18px;
          right: 10px;
          bottom: 6px;
          color: #fff;
        }
      }
    }
  }
}
.plate{
  margin-top:20px ;
}
.cp{
  background: #f7f8fc
}

</style>
