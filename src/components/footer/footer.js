import { mapState } from 'vuex';

export default {
  name: 'Footer',
  data() {
    return {};
  },
  props: {},
  methods: {
    handleNav(path) {
      this.$router.replace(path);
    },
  },
  created() {
  },
  computed: mapState({
    list: state => state.menus,
    showFooter: state => state.showFooter,
  }),
};
