/* eslint-disable */
import { requestPost } from '@/utils/Ajax';
import mix from '@/mixin';

export default {
  name: 'home',
  mixins: [mix],
  components: {
  },
  data() {
    return {
      day: this.$utils.formateDate(),
    };
  },
  mounted() {
  },
  methods: {
    handleToast() {
      this.$tool.Toast('出错了');
    },
    handleDialog() {
      this.$tool.Dialog({
        title: '这是一个弹窗',
        content: '您有一个惊喜是否需要领取？',
        handleOk() {
          this.$tool.Toast('确认成功！');
          return true;
        },
      });
    },
    handleLoading() {
      let loading=this.$tool.Loading();
      setTimeout(() => {
        loading.hide();
      },2000);
    },
    handleJump() {
      this.$router.push('setting');
      // console.log(this.$router.push('setting'));
      // this.$route.push('/setting');
    },
  },
};
