<template>
    <Wraper
      :visible="visible"
      :afterClose="afterClose"
      v-on:close="handleClose"
      >
        <div class="innerContent">
            <h3 class="dialog-title" v-if="!!title">titles</h3>
            <div class="dialog-info">
                info
            </div>
            <div class="dialog-footer">
                <div @click="handleClose">cancel</div>
                <div @click="handleBtnOk">ok</div>
            </div>
        </div>
    </Wraper>
</template>
<style lang="scss" scoped>
@import './index.scss';
</style>
<script>
import Wraper from '../../dialogWraper.vue';

export default {
  data() {
    return {
      visible: false,
    };
  },
  props: {
    title: {
      type: String,
      default: 'title',
    },
    afterClose: Function,
    handleOk: Function,
  },
  components: {
    Wraper,
  },
  computed: {
  },
  methods: {
    handleClose() {
      this.visible = false;
    },
    handleBtnOk() {
      if (this.handleOk()) {
        this.visible = false;
      }
    },
  },
};
</script>
