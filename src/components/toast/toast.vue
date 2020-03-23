<template>
  <transition name="toast" @after-leave="afterLeave">
    <div class="my-toast"
      :class="defineClass"
      v-show="visible"
    >{{message}}</div>
  </transition>
</template>
<style lang="scss" scope>
.my-toast{
  padding:6px 15px;
  background:rgba(0,0,0,.5);
  font-size:16px;
  display:inline-block;
  position:fixed;
  top:50%;
  left:50%;
  transform:translate3d(-50%,-50%,0);
  color:#fff;
  border-radius:4px;
  z-index:999;
}
.toast-enter{
  opacity:0
}
.toast-enter-active{
  transition:opacity .2s linear;
}
.toast-leave-active{
  transition:opacity .2s linear;
}
.toast-leave-to{
  opacity:0;
}
</style>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  props: {
    message: String,
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    defineClass() {
      const classList = [];
      classList.push(this.className);
      return classList.join(' ');
    },
  },
  methods: {
    afterLeave(el) {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
      // console.log('leveled');
    },
  },
};
</script>
