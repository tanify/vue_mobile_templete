import Vue from 'vue';
import Vuex from 'vuex';
import menus from '@/components/footer/menus';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    menus,
    userInfo: {},
    showFooter: false,
  },
  mutations: {
    handleMenuChange: (state, arg) => {
      const menu = menus.map((ele) => {
        if (ele.nav === arg.nav) {
          ele.cur = true;
        } else {
          ele.cur = false;
        }
        return { ...ele };
      });
      state.menus = menu;
      state.showFooter = arg.showFooter;
    },
  },
  actions: {
    handleMenuChange(context, arg) {
      context.commit('handleMenuChange', {
        ...arg,
      });
    },
  },
});
