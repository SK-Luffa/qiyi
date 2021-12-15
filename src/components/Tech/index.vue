<template>
  <div class="index-parts">
    <h1>{{ $t("technologys") }}</h1>
    <div class="index-card">
      <el-card v-for="(item, i) in techArr" :key="i">
        <RouterLink
          :to="{
            name: 'techDetail',
            params: {
              id: item.id,
              activeMenu: 'tech',
            },
          }"
        >
          <img :src="item.img" class="image" />
          <h6>{{ item.cardTitle }}</h6>
          <div class="text">{{ item.cardText }}</div>
        </RouterLink>

      </el-card>
    </div>
    <!-- <el-button round size="small" @click="toPage">{{ $t("index.more") }}</el-button> -->
  </div>
</template>

<script>
import img1 from '../../assets/images/tech/1/detail/img.png';
import img2 from '../../assets/images/tech/2/detail/main.png';
import img3 from '../../assets/images/tech/3/detail/main.png';
// import img1 from "../../assets/images/
export default {
  data() {
    return {
      imgs: [img2, img1, img3],
    };
  },
  props: {
    indexCardArr: {
      type: Array,
    },
  },
  computed: {
    techArr() {
      return this.indexCardArr.map((item, i) => ({
        ...item,
        img: this.imgs[i],
      }));
    },
  },
  // methods:{
  //     toPage() {
    
  //     this.$router.push({
  //       name: "Tech",
  //     });
  //   },
  // }
};
</script>

<style lang="less" scoped>
.index-parts {
  margin: 40px auto 10px;
  width: 1140px;

  .el-button {
    margin-top: 20px;
  }
}
.index-card {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  .el-card {
    margin-bottom: 20px;
    width: 32%;
    padding: 16px;
    box-sizing: border-box;
    a {
      color: #303133;
    }

    img {
      width: 100%;
      display: block;
    }
    h6 {
      line-height: 36px;
      font-size: 16px;
    }
    .text {
      font-size: 14px;
      text-align: justify; //两端对齐 \
      width: 96%;
      margin: 0 auto;
      text-indent: 2em;
      padding-bottom: 10px;
    }
  }
}
@media screen and (max-width: 900px) {
  .index-parts {
    margin: 40px auto 10px;
    width: 96%;
  }

  .index-card {
    width: 96%;
    flex-wrap: wrap;
    .el-card {
      width: 100%;
    }
  }
}
</style>
