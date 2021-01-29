import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import config from './assets/js/config';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import VueI18n from 'vue-i18n'
import './assets/css/light.less';
import './assets/css/style.less';
import util from './assets/js/util';
Vue.use(Antd);
Vue.use(VueI18n);
const i18n = new VueI18n({
   locale: 'en-US',    // 语言标识, 通过切换locale的值来实现语言切换,this.$i18n.locale
   messages: {
      'zh-CN': require('./assets/lang/zh'),   // 中文语言包
      'en-US': require('./assets/lang/en')    // 英文语言包
   }
})
Vue.config.productionTip = false;
Vue.prototype.$util=util;
window.util = util;
window.config = config;
window.baseApi = config.baseApi;
window.ajax = util.ajax.bind(util);
new Vue({
   i18n,
   router,
   store,
   render: h => h(App)
}).$mount('#app')
