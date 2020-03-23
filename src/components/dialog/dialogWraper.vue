<template>
<div class="dialog" :class="defineClass">
    <div class="dialog-content">
        <transition name="fadeLayer">
            <div class="dialog-layer" v-show="isShow" @click="handleClose"></div>
        </transition>
        <transition name="dialog" @afterLeave="afterLeave">
            <div class="content-innner" v-show="isShow">
                <slot></slot>
            </div>
        </transition>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import './dialog.scss';
</style>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    title: String,
    content: String,
    className: {
      type: String,
      default: '',
    },
    okText: String,
    cancelText: String,
    afterClose: Function,
    handleOk: Function,
    visible: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    defineClass() {
      const classList = [];
      classList.push(this.className);
      return classList.join(' ');
    },
    isShow() {
      return this.visible;
    },
  },
  methods: {
    afterLeave() {
      this.afterClose();
    },
    handleClose() {
      this.$emit('close');
    },
    handleBtnOk() {
      if (this.handleOk()) {
        this.handleClose();
      }
    },
  },
};
</script>
