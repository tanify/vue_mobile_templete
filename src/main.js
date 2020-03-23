/* eslint-disable */
import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';
import store from './store';
import '@/css/global.scss';
import utils from '@/utils/utilty';
import Config from '@/config';
import tool from '@/utils/tool';

Vue.config.productionTip = true;
Vue.prototype.$utils = utils;
Vue.prototype.$ApiConfig = Config;
Vue.prototype.$tool = tool;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
