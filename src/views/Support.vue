<template>
  <div class="tech">
    <div class="top">
      <div class="search-box">
        <el-input :placeholder="$t('')" size="small" v-model="searchContent">
          <template slot="append">{{ $t("index.sup.searchBtn") }}</template>
        </el-input>
      </div>
      <div class="nav-box">
        <ul class="newsNav">
          <li
            v-for="item in newsNav"
            :key="item"
            :class="{ active: newsActive === item }"
            @click="selectType(item)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <News />
  </div>
</template>

<script>
import News from '../components/News';

export default {
  name: 'support',
  data() {
    return {
      searchContent: '',
      newsNav: this.$t('index.sup.newsNav'),
      newsActive: this.$t('index.sup.newsNav')[0],
    };
  },
  components: { News },
  mounted() {
    window.scroll({
      top: 0,
      left: 0,
    });
  },
  methods: {
    selectType(item) {
      this.newsActive = item;
    },
  },
};
</script>
<style lang="less" scoped>
.top {
  height: 230px;
  background: linear-gradient(226deg, #2070ff 0%, #3573e2 100%);
  position: relative;
  .search-box {
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .el-input-group__append,
    .el-input-group__prepend {
      background: #00a1f5;
      opacity: 1;
      color: #fff;
    }
  }
  .nav-box {
    width: 100%;
    overflow: auto;
    position: absolute;
    bottom: 10px;
    height: 32px;
    left: 0;
    .newsNav {
      position: absolute;
      left: 50%;
      width: 500px;
      transform: translateX(-50%);
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      li {
        margin: 0;
        padding: 0;
        list-style: none;
        color: #fff;
        line-height: 32px;
        padding: 0px 5px;
        cursor: pointer;
        &.active {
          border-bottom: 2px solid #fff;
        }
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .tech {
    width: 100%;
    .top {
      width: 100%;
      overflow: auto;
      .search-box {
        width: 90%;
        margin: 0 auto;
      }
    }
  }
}
</style>
