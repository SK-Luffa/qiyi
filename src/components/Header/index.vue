<template>
  <div class="header-container">
    <el-drawer
      :visible.sync="drawer"
      direction="ltr"
      :before-close="handleClose"
      size="160px"
    >
      <img :src="logoUrl" alt="" />
      <el-menu
        class="el-menu-demo"
        @select="handleSelect"
        :router="true"
        :default-active="activeItem"
      >
        <el-menu-item index="/home">{{ $t("home") }}</el-menu-item>
        <el-menu-item index="/tech">{{ $t("technologys") }}</el-menu-item>
        <el-menu-item index="/serve">{{ $t("products") }}</el-menu-item>
        <el-menu-item index="/case">{{ $t("cases") }}</el-menu-item>
        <el-menu-item index="/support">{{ $t("supports") }}</el-menu-item>
        <el-menu-item index="/about">{{ $t("about") }}</el-menu-item>
      </el-menu>
    </el-drawer>
    <div class="logo-box">
      <el-image :src="logoUrl" fit="fill"></el-image>
    </div>
    <div class="nav-box">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        :router="true"
        :default-active="activeItem"
      >
        <el-menu-item index="/home">{{ $t("home") }}</el-menu-item>
        <el-menu-item index="/tech">{{ $t("technologys") }}</el-menu-item>
        <el-menu-item index="/serve">{{ $t("products") }}</el-menu-item>
        <el-menu-item index="/case">{{ $t("cases") }}</el-menu-item>
        <el-menu-item index="/support">{{ $t("supports") }}</el-menu-item>
        <el-menu-item index="/about">{{ $t("about") }}</el-menu-item>
      </el-menu>
    </div>
    <div class="icon-box">
      <div
        class="wx"
        @click="codeHeight == 105 ? (codeHeight = 0) : (codeHeight = 105)"
      >
      <Icon class="el-icon-search" style="font-size:30px" ></Icon>
        <Icon type="wxCirle"></Icon>
        <div class="wxImg" :style="{ height: codeHeight + 'px' }">
          <img :src="code" alt="" />
        </div>
      </div>
      <!-- <div><Icon type="wxCirle"></Icon></div> -->
      <div @click="lnChange">
        <!-- <svg
          t="1629344101934"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="9519"
          width="40"
          height="40"
        >
          <path
            d="M913.066667 579.413333H757.077333v-62.122666c0-14.165333-12.288-25.685333-27.477333-25.685334-15.274667 0-27.477333 11.52-27.477333 25.685334v62.037333H546.133333c-15.189333 0-27.477333 11.52-27.477333 25.856V779.946667c0 14.165333 12.288 25.6 27.477333 25.6h155.989334v107.264c0 14.250667 12.202667 25.770667 27.477333 25.770666 15.189333 0 27.477333-11.52 27.477333-25.770666V805.717333H913.066667c15.189333 0 27.477333-11.52 27.477333-25.685333V605.013333c0-14.250667-12.288-25.770667-27.477333-25.770666zM702.122667 754.090667H573.696V630.869333h128.426667v123.306667z m183.466666 0H756.992V630.869333h128.426667v123.306667z m-484.266666-303.786667c0-13.226667-11.434667-23.893333-25.6-23.893333H136.533333V309.162667h239.189334c14.165333 0 25.6-10.752 25.6-23.893334 0-13.312-11.434667-24.064-25.6-24.064H136.533333V144.128h239.189334c14.165333 0 25.6-10.752 25.6-23.978667 0-13.312-11.434667-23.978667-25.6-23.978666H110.933333c-14.08 0-25.6 10.666667-25.6 23.978666v330.24c0 13.312 11.52 24.064 25.6 24.064h264.789334c14.165333 0 25.6-10.752 25.6-24.064z m118.613333 406.016c-33.536-1.621333-66.56-8.533333-98.048-20.394667-122.538667-46.336-198.656-160.426667-189.44-283.989333a23.210667 23.210667 0 0 0-17.578667-23.722667 25.258667 25.258667 0 0 0-28.416 11.093334L135.68 626.773333a22.272 22.272 0 0 0 9.813333 31.146667c11.861333 6.144 26.794667 1.962667 33.28-9.216l9.728-16.64c21.333333 109.568 100.864 203.349333 215.04 246.613333 36.437333 13.824 74.922667 21.845333 113.834667 23.722667h1.28c12.970667 0 23.893333-9.557333 24.490667-21.845333a23.637333 23.637333 0 0 0-23.210667-24.149334z m-2.56-724.992c33.536 1.536 66.56 8.448 98.048 20.394667 122.538667 46.336 198.656 160.426667 189.44 283.989333a23.04 23.04 0 0 0 17.578667 23.637333 24.832 24.832 0 0 0 28.416-11.093333l50.773333-87.296a22.186667 22.186667 0 0 0-9.813333-31.146667 25.344 25.344 0 0 0-33.28 9.130667l-9.728 16.64c-21.333333-109.482667-100.864-203.349333-215.04-246.613333a372.053333 372.053333 0 0 0-113.834667-23.637334 23.637333 23.637333 0 0 0-25.770667 21.76c-0.682667 12.8 9.728 23.552 23.210667 24.234667z"
            p-id="9520"
          ></path>
        </svg> -->
           <svg
          t="1630306371117"
          class="icon1"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="25634"
          width="36"
          height="36"
          :style="{display:svgPath?`none`:`block`}"
          
        >
        <path class="pu1" d="M512 64.050782c60.495816 0 119.153774 11.836583 174.345794 35.181267 53.335742 22.558785 101.245915 54.864562 142.401244 96.01989s73.461105 89.066525 96.01989 142.401244c23.344684 55.19202 35.181267 113.851001 35.181267 174.345794 0 60.494793-11.836583 119.153774-35.181267 174.345793-22.558785 53.334719-54.864562 101.245915-96.01989 142.401244s-89.066525 73.461105-142.401244 96.019891c-55.19202 23.344684-113.851001 35.181267-174.345794 35.181267s-119.153774-11.836583-174.345794-35.181267c-53.335742-22.558785-101.245915-54.864562-142.401244-96.019891S121.791857 739.679489 99.233072 686.34477c-23.344684-55.19202-35.181267-113.851001-35.181267-174.345793 0-60.495816 11.836583-119.153774 35.181267-174.345794 22.558785-53.335742 54.864562-101.245915 96.01989-142.401244s89.066525-73.461105 142.401244-96.01989c55.19202-23.344684 113.849978-35.181267 174.345794-35.181267m0-51.16531c-275.653107 0-499.114528 223.461421-499.114528 499.114528S236.346893 1011.114528 512 1011.114528s499.114528-223.461421 499.114528-499.114528S787.653107 12.885472 512 12.885472z" fill="" p-id="675"></path><path d="M464.355887 563.062979l38.774095 9.793041c-8.128121 31.847336-22.75219 56.131415-43.87016 72.850191-21.120017 16.72287-46.935985 25.083282-77.447906 25.083282-31.578206 0-57.261145-6.426363-77.046771-19.287276-19.786649-12.856819-34.845623-31.478945-45.169759-55.862285-10.327206-24.38334-15.489786-50.565652-15.489786-78.546937 0-30.509874 5.826705-57.127092 17.488303-79.845513 11.657504-22.715351 28.246321-39.972387 49.766451-51.764967 21.517059-11.791557 45.200458-17.687848 71.051219-17.687848 29.312606 0 53.963029 7.463995 73.950246 22.384823 19.986193 14.923898 33.909297 35.909861 41.771359 62.956868l-38.174438 8.993838c-6.795776-21.316491-16.656355-36.840046-29.579689-46.568619-12.925381-9.724479-29.1806-14.5903-48.76668-14.5903-22.518876 0-41.339524 5.395894-56.461943 16.188705-15.123442 10.79281-25.7515 25.282826-31.878035 43.470047-6.130627 18.187221-9.193383 36.944424-9.193383 56.261375 0 24.917506 3.628644 46.667879 10.893095 65.256236 7.260357 18.587334 18.552541 32.477692 33.876552 41.672098 15.321964 9.193383 31.91078 13.791098 49.76645 13.791098 21.717627 0 40.104393-6.261611 55.162344-18.786879 15.054881-12.521175 25.248034-31.108508 30.578436-55.760978zM550.497802 665.793712V372.792495h39.772843l153.896042 230.04435V372.792495h37.174668v293.001217h-39.772842l-153.896043-230.243895v230.243895h-37.174668z" fill="" p-id="676">

        </path>
          
        </svg>
        <svg
          t="1630306371117"
          class="icon2"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="25634"
          width="36"
          height="36"
           :style="{display:svgPath?`block`:`none`}"
        >
       
          <path
           class="pu2"
            d="M507.12381 1019.12381c-269.312 0-487.619048-218.307048-487.619048-487.619048s218.307048-487.619048 487.619048-487.619048 487.619048 218.307048 487.619047 487.619048-218.307048 487.619048-487.619047 487.619048z m0-48.761905a438.857143 438.857143 0 1 0 0-877.714286 438.857143 438.857143 0 0 0 0 877.714286zM265.654857 393.703619V707.047619h229.522286v-31.158857H301.641143v-114.980572h175.542857v-31.158857h-175.542857V424.862476h186.075428v-31.158857H265.654857z m279.552 0V707.047619h35.986286V449.438476h1.316571L760.685714 707.047619h36.864V393.703619h-35.986285v254.976h-1.316572l-177.298286-254.976h-37.741714z"
            p-id="25635"
          ></path>
        </svg>
      </div>
    </div>
    <div class="icon-flod" @click="drawer = !drawer">
      <i class="el-icon-s-fold"></i>
    </div>
  </div>
</template>

<script>
import logoUrl from '../../assets/images/logo.jpg';
// import wechat from "../../assets/images/wechatIcon.jpg";
import Icon from '../Icon';
import code from '@/assets/images/code.png';

export default {
  data() {
    return {
      svgPath:true,
      logoUrl,
      drawer: false,
      code,
      codeHeight: 0,
    };
  },
  computed: {
    activeItem() {
      const route = this.$route;
      const { meta, path } = route;
      // 可以在路由配置文件中设置自定义的路由路径到meta.activeMenu属性中，来控制菜单自定义高亮显示
      // meta中 有activeMenu 字段的子页面，都会显示高亮
      if (meta.activeMenu) {
        return `/${meta.activeMenu}`;
      }
      return path;
    },
  },
  

  mounted() {
   
    if(localStorage.ln=="undefined"){
   localStorage.setItem('ln', 'zh');
    }
 
    
  if(localStorage.ln==="zh"){
     this.svgPath=false;
  }else{
     this.svgPath=true;
  }  
  },
  components: {
    Icon,
  },
  methods: {
    handleSelect(key, keyPath) {
      this.drawer = false;
      console.log(key, keyPath);
    },
    handleClose() {
      this.drawer = false;
    },
    lnChange() {
      this.svgPath=!this.svgPath
      const ln = localStorage.getItem('ln');
      if (ln === 'en') {
        localStorage.setItem('ln', 'zh');
      } else {
        localStorage.setItem('ln', 'en');
      }
      location.reload();
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/index";

.header-container {
  width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  .logo-box {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 80px;
    height: 80px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .icon-flod {
    display: none;
  }
  .nav-box {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 100px;
    line-height: 100px;
    width: 100%;

    .el-menu--horizontal > .el-menu-item {
      height: 100px;
      line-height: 100px;
      font-size: 16px;
      border: none !important;
      color: #333;
      padding: 0 20px;
      &:hover {
        color: @main;
      }
      &.is-active {
        border: none;
        color: @main;
      }
    }
  }
  .icon-box {
    display: flex;
    height: 100px;
    width: 200px;
    align-items: center;
    justify-content: space-around;
    .wx {
      position: relative;
      .wxImg {
        position: absolute;
        z-index: 99;
        left: 50%;
        transform: translateX(-50%);
        width: 105px;
        transition: all .5s;
        img {
          display: block;
          height: 100%;
          width: 100%;
        }
      }
    }
    .iconfont,
    svg {
      font-size: 36px;
      &:hover {
        color: #5388e3;
      }
    }
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
}
@media screen and (max-width: 1240px) {
  .header-container {
    width: 96%;
  }
}
@media screen and (max-width: 900px) {
  .header-container {
    width: 96%;
    justify-content: space-between;
    .logo-box {
      width: 60px;
      height: 60px;
    }
    .icon-box {
      display: none;
    }
    .nav-box {
      display: none;
    }
    .icon-flod {
      display: block;
      width: 60px;
      height: 60px;
      font-size: 28px;
      line-height: 80px;
      color: @main;
    }
  }
}
.el-drawer__header {
  padding: 0;
}
.el-icon-search{
  position: absolute;
  left: -50px;
  top: 5px;
}
</style>
