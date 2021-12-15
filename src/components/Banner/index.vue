<template>
  <div class="block">
    <el-carousel >
      <el-carousel-item v-for="(item, i) in banners" :key="i">
        <img :src="item" alt="" />
      </el-carousel-item>
      <img :src="banners[0]" class="toolImg" alt="" />
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: {
    banners: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style lang="less" scoped>
.el-carousel__container{
  /* position: relative; */
  height: auto!important;
}

.el-carousel img {
  display: block;
  height: auto;
  width: 100%;
}

.toolImg {
  width: 100%;
  opacity: 0;
}

</style>
