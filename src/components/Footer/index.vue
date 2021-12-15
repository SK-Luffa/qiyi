<template>
  <footer class="footer-container">
    <div class="clearfix footer_top">
      <div class="foot_nav">
        <ul class="clearfix">
          <li>
            <RouterLink
              :to="{
                name: 'Tech',
              }"
              ><span>{{ $t("technologys") }}</span>
            </RouterLink>

            <a href="/intro/"></a>
            <ul>
              <!-- <li v-for="item in list" :key="item">
                <a href="#">{{ item }}</a>
              </li> -->
              <li v-for="item in list" :key="item.id">
                <RouterLink
                  :to="{
                    name: 'techDetail',
                    params: {
                      id: item.id,
                      activeMenu: 'tech',
                    },
                  }"
                >
                  <span>{{ item.cardTitle }}</span></RouterLink
                >
              </li>
            </ul>
          </li>
          <li>
            <RouterLink
              :to="{
                name: 'Serve',
              }"
              ><span>{{ $t("products") }}</span>
            </RouterLink>
            <!-- <a href="/core-technology/"><span>产品服务</span></a> -->
            <ul>
              <li>
                <!-- <a href="/core-technology/8.html">智能公交</a> -->
                <RouterLink
                  :to="{
                    name: 'ServeDetail',
                    params: {
                      id: '13.3',
                      activeMenu: 'Serve',
                    },
                  }"
                  ><span>{{ $t("index.prod[0].tab") }}</span></RouterLink
                >
              </li>
            </ul>
          </li>
          <li>
            <RouterLink
              :to="{
                name: 'Case',
              }"
              ><span>{{ $t("cases") }}</span></RouterLink
            >
            <ul>
              <li v-for="item in cases" :key="item.id">
                <RouterLink
                  :to="{
                    name: 'Case',
                  }"
                  >{{ item.caseName }}</RouterLink
                >
              </li>
            </ul>
          </li>
          <li>
            <RouterLink
              :to="{
                name: 'Support',
              }"
              ><span>{{ $t("supports") }}</span></RouterLink
            >
            <ul>
              <li>
                <RouterLink
                  :to="{
                    name: 'Support',
                  }"
                  >{{ $t("index.sup.subTitle1") }}</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  :to="{
                    name: 'Support',
                  }"
                  >{{ $t("index.sup.subTitle2") }}</RouterLink
                >
              </li>
            </ul>
          </li>
          <li>
            <RouterLink
              :to="{
                name: 'About',
              }"
              ><span>{{ $t("contact") }}</span></RouterLink
            >
            <ul>
              <li v-for="(item, i) in about" :key="i">

                <RouterLink  
                  :to="{
                    name: 'About',
                    query:{cls:i}
                  }"
                  >{{ item }}</RouterLink
                >
              </li>
            </ul>
          </li>
        </ul>
        <div class="foot_qr">
          <img :src="code" alt="二维码" />
          <div class="CodeText">  
             <span class="text_one">扫一扫，关注我们</span>
          <span class="text_two">了解更多动态</span>
          </div>
       
        </div>
      </div>
    </div>
    <div class="hr"><hr /></div>
    
    <br />
    <div class="clearfix footer_copyright">
      <p>
        Copyright@2016-2021上海祺壹智能科技有限公司All rights reserved
        <!-- <a
          href=" http://www.beian.gov.cn/portal/registerSystemInfo"
          target="_blank"
          rel="noopener noreferrer"
          >沪公网安备 310106xxxxxxxx号</a
        >
        |<a
          href="https://beian.miit.gov.cn/#/Integrated/index"
          target="_blank"
          rel="noopener noreferrer"
          >沪ICP备18013094号-1</a
        > -->
      </p>
    </div>
    <div v-html="copyRight"></div>
    <div class="appfooter_copyright">上海祺壹智能科技有限公司</div>
    <br/>
   
  </footer>
</template>

<script>
import code from "@/assets/images/code.png";

export default {
  data() {
    return {
      list: this.$t("index.footer.list"),
      code,
      tech: this.$t("index.tech"),
      cases: this.$t("index.cases"),
      about: this.$t("index.about.btnArr"),
      copyRight: `  <div class='bottomCopyRight' >
      <a
        target="_blank"
        href=" "
       
      >
        <img src="../icon/pl.png" style="float: left" />
        <p
         
        >
          沪公网安备 31011302006745号
        </p></a
      >&nbsp;<a
          href="https://beian.miit.gov.cn/#/Integrated/index"
          target="_blank"
          rel="noopener noreferrer"
          ><p
          style="
            float: left;
            height: 20px;
            line-height: 20px;
            margin: 0px 0px 0px 5px;
            color: #939393;
          "
        >沪ICP备18013094号-1</p></a
        >
    </div>`
    };
  }
};
</script>

<style lang="less" scoped>
ul,
li,
a {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
.footer-container {
  background: #dddfe9;
  width: 100%;
  padding-top: 20px;
  .footer_top {
    width: 1140px;
    margin: 0 auto;
    .foot_nav {
      display: flex;
      .clearfix {
        display: flex;
        text-align: left;
        width: calc(100% - 120px);
        justify-content: space-between;
        & > li {
          flex: 1;
          line-height: 34px;
          a {
            color: #333;
          }
          ul {
            li {
              a {
                color: #fff;
              }
            }
          }
        }
        a {
          color: #fff;
          &:hover {
            color: #5388e3;
          }
        }
      }
      .foot_qr {
        position: relative;
        width: 120px;
        img {
          width: 100px;
          height: 100px;
          position: absolute;
          left: 50%;
          top: 40%;
          transform: translate(-50%, -50%);
          display: block;
        }
      }
    }
  }
  .appfooter_copyright {
    display: none;
  }
  .footer_copyright {
    width: 1140px;
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
  }
}
@media screen and (max-width: 1200px) {
  .footer-container {
    .footer_top {
      width: 98%;
      .foot_nav {
        .clearfix {
          display: none;
        }
        .foot_qr {
          width: 100%;
          height: 200px;
          img {
            height: 150px;
            width: 150px;
            left: 50%;
          }
        }
      }
    }
    .footer_copyright {
      width: 100%;
    }
    // .appfooter_copyright {
    //   display: block;
    // }
  }
}
.hr {
  width: 60%;
  margin: 0px auto;
}
.CodeText{
  width: 100%;
  position: absolute;
  top: 70%;
  text-align: center;
  .text_one{
    color: #fff;
    font-size: 14px;
    line-height: 20px
  };
  .text_two{
    color: #999;
    font-size: 14px;
    line-height: 20px
  }
}


</style>
