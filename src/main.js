import Vue from 'vue';
import BaiduMap from 'vue-baidu-map';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n/index';
import './assets/css/index.less';
import 'default-passive-events';

Vue.config.productionTip = false;

Vue.use(BaiduMap, {
  /* 需要注册百度地图开发者来获取你的ak */
  ak: '9G0G5QEPfRbSWaiLpCgoGD31DtGjboFc',
});
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
