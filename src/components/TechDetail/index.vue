<template>
  <div class="detail-container">
    <div class="back" @click="$router.go(-1)">
       <el-button size="mini" round class="setupBtn"  icon="el-icon-arrow-left">
           <span class="textBtn">返回</span>
         
          </el-button>
    
    </div>
    <div class="content">
      <h1>{{ data.title }}</h1>
      <div class="time">{{ data.time }}</div>
      <br />
      <div class="article" v-html="data.content"></div>
    </div>
  </div>
</template>

<script>
import Icon from '../Icon';
import getTechDetail from './getTechDetail.js';

export default {
  name: 'Detail',
  data() {
    return {
      data: getTechDetail(this),
    };
  },
  components: {
    Icon,
  },
  mounted() {
    window.scroll({
      top: 0,
      left: 0,
    });
  },
};
</script>

<style lang="less" scoped>
.detail-container {
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
  .content {
    text-align: left;
    h1 {
      margin-bottom: 10px;
    }
    .time {
      color: #999;
    }
    .article {
      text-align: justify;
      text-indent: 2em;
      font-size: 20px;
      /deep/ p {
        margin-bottom: 20px;
      }
      /deep/ img {
        width: 100%;
        display: block;
        margin: 0 auto;
        margin-bottom: 20px;
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .detail-container {
    width: 98%;
  }
}
.setupBtn{
 border: 1px solid #5388e3 !important;

}
.el-button:focus, .el-button:hover {
    color: #5388e3 !important;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}
</style>
