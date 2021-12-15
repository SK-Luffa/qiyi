<template>
  <div class="blog-list-container" ref="mainContainer">
    <ul>
      <li v-for="item in news" :key="item.id">
        <div class="thumb">
          <RouterLink
            :to="{
              name: 'Support',
              params: {
                id: item.id,
                activeMenu: 'support',
              },
            }"
          >
            <img :alt="item.title" :src="item.img" :title="item.title" />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink
            :to="{
              name: 'SupportDetail',
              params: {
                id: item.id,
                activeMenu: 'support',
              },
            }"
          >
            <h2>{{ item.title }}</h2>
            <p>{{ item.intro }}</p>

            <p class="newsTime">
              <span class="type">{{ item.type }} </span>{{ item.time }}
            </p>
          </RouterLink>
          <div class="aside">
            <!-- <RouterLink
              :to="{
                name: 'CategoryBlog',
                params: {
                  categoryId: item.category.id,
                },
              }"
            >
              {{ item.category.name }}
            </RouterLink> -->
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- <Empty v-if="data.rows.length === 0 && !isLoading" /> -->
    <!-- 分页放到这里 -->
    <!-- <Pager
      v-if="data.total"
      :current="routeInfo.page"
      :total="data.total"
      :limit="routeInfo.limit"
      :visibleNumber="10"
      @pageChange="handlePageChange"
    /> -->
  </div>
</template>

<script>
// import Pager from "@/components/Pager";
// import fetchData from "@/mixins/fetchData.js";
// import { getBlogs } from "@/api/blog.js";
// import { formatDate } from "@/utils";
// import mainScroll from "@/mixins/mainScroll.js";
// import Empty from "@/components/Empty";
export default {
  data() {
    return {
      news: [
        {
          id: "support1",
          img: "../news/news1/main.png",
          title: "购买祺壹设备后，如何使用PS软件制作N-Color色板？",
          time: "2021-08-12",
          type: "常见问题",
          color: "",
          intro:
            "制定N-Color色表有两种方式。可以选择将我们提供的色板载入到PS或者自制存储。",
        },
      ],
    };
  },
  components: {},
  computed: {
    // 获取路由信息
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    async fetchData() {
      return await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
    },
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      // 跳转到 当前的分类id  当前的页容量  newPage的页码
      if (this.routeInfo.categoryId === -1) {
        // 当前没有分类
        // /article?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        // /article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
  },
  //   watch: {
  //     async $route() {
  //       this.isLoading = true;
  //       // 滚动高度为0
  //       this.$refs.mainContainer.scrollTop = 0;
  //       this.data = await this.fetchData();
  //       this.isLoading = false;
  //     },
  //   },
};
</script>

<style scoped lang="less">
.blog-list-container {
  width: 1140px;
  margin: 0 auto;
  li {
    display: flex;
    margin: 20px 0;
    text-align: justify;
    .thumb {
      width: 220px;
      img {
        width: 100%;
        display: block;
      }
    }
    .main {
      margin-left: 20px;
      h2 {
        color: #000;
        line-height: 32px;
        margin-top: 10px;
        margin-bottom: 20px;
      }
      p {
        color: #333;
        font-size: 14px;
      }
      .newsTime {
        color: #aaa;
        margin-top: 10px;
        font-size: 14px;
        .type {
          display: inline-block;
          color: #fff;
          text-align: center;
          line-height: 28px;
          width: 96px;
          height: 28px;
          background: #7894E1;
          opacity: 1;
          margin-right: 20px;
          border-radius: 14px;
          
        }
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .blog-list-container {
    margin: 20px auto 10px;
    width: 96%;
    li {
      width: 100%;
      flex-wrap: wrap;
      .thumb {
        width: 100%;
      }
      .main {
        margin-left: 0px;
        margin-top: 10px;
        h2 {
          font-size: 20px;
          margin-bottom: 0px;
        }
      }
    }
  }
}
</style>
