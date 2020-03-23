<template>
  
    <div class="loading"
      :class="defineClass"
      v-show="visible"
    >
      <div class="inner_action">
      </div>
    </div>
</template>
<style lang="scss" scope>
.loading{
  width:100%;
  height:100%;
  background:transparent;
  font-size:16px;
  position:fixed;
  top:0;
  left:0;
  z-index:999;
  display:flex;
  align-items:center;
  justify-content: center;

}
.inner_action{
  width:40px;
  height:40px;
  background:transparent;
  border-width: 2px;
  border-style:solid;
  border-color:#FF6A22 #FF6A22 transparent #FF6A22;
  border-radius:50%;
  transform:rotate(-45deg);
  animation:circle .6s linear infinite;

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
@keyframes circle{
  0%{
    transform:rotate(0deg)
  }
  50%{
    transform:rotate(180deg)
  }
  100%{
    transform:rotate(360deg);
  }
}
</style>
<script>
export default {
  data() {
    return {
      visible:true,
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
