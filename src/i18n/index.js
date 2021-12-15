import Vue from 'vue';
import VueI18n from 'vue-i18n';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

function getLn() {
  return localStorage.getItem('ln') ? localStorage.getItem('ln') : 'zh';
}
const ln = getLn();
if (ln === 'en') { document.title = 'Shanghai Qiyi Intelligent Technology Co., Ltd'; } else { document.title = '上海祺壹智能科技'; }
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: ln,
  messages: {
    zh: require('./zh'),
    en: require('./en'),
  },
  silentTranslationWarn: true, // 去除国际化警告
});
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value),
});
export default i18n;
