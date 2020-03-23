import Loading from '@/components/loading/loading.vue';

const Loadable = (asyncComponent) => {
  const Component = () => ({
    component: asyncComponent(),
    loading: Loading,
  });
  return {
    render(h) {
      return h(Component, {});
    },
  };
};

export default Loadable;
