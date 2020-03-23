import Home from '@/views/index/Home.vue';
import Page404 from '@/views/404/404.vue';
import Loadable from './Loadable';

const Lists = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页',
      showFooter: true,
    },
  },
  {
    path: '/bill',
    name: '账单',
    meta: {
      title: '账单',
      showFooter: true,
    },
    component: () => import(/* webpackChunkName: "bill" */ '@/views/bill/index.vue'),
  },
  {
    path: '/my',
    name: '我的',
    meta: {
      title: '我的',
      showFooter: true,
    },
    component: () => import(/* webpackChunkName: "my" */ '@/views/my/index.vue'),
  },
  {
    path: '/setting',
    name: '设置',
    meta: {
      title: '设置',
    },
    component: Loadable(() => import(/* webpackChunkName: "setting" */ '@/views/setting/index.vue')),
  },
  {
    path: '*',
    meta: {
      title: '404',
    },
    component: Page404,
  },
];

export default Lists;
