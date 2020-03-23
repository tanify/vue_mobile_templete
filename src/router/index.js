import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import Lists from './routeList.js';

Vue.use(Router);
const vueRouter = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: Lists,
});
// vueRouter.beforeEach((to, form, next) => {
//   console.log('to', to, form);
//   next();
// });
vueRouter.afterEach((to, form) => {
  document.title = to.meta.title;
  store.dispatch('handleMenuChange', {
    nav: to.path,
    showFooter: !!to.meta.showFooter,
  });
});
export default vueRouter;
