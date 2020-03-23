/* eslint-disable */
import Vue from 'vue';
import LoadingComponent from './loading.vue';

class LoadingCom {
  constructor(options) {
    this.text = options.text || 'toast';
    this.duration = options.duration || 3000;
    this.parent = options.el || document.createElement('div');
    this.rootDom = document.body;
    const ToastConstructor = Vue.extend(LoadingComponent);
    this.toastInst = new ToastConstructor({
      el: this.parent,
    });
    this.toastInst.message = this.text;
    this.toastInst.className = options.className || '';
    this.timer = null;
    return this;
  }

  show() {
    document.body.appendChild(this.toastInst.$el);
    const inst = this.toastInst;
    Vue.nextTick(() => {
      inst.visible = true;
    });
  }

  hide() {
    // this.toastInst.$el.addEventListener('transitionend', ToastCom.removeDom);
    this.toastInst.visible = false;
    this.removeDom();
  }

  removeDom() {
   
    this.toastInst.$el.parentNode.removeChild(this.toastInst.$el);
    
  }
}
const Loading = (options = {}) => {
  let param = options;
  if (typeof options === 'string') {
    param = {
      text: options,
    };
  }
  const loading = new LoadingCom(param);
  loading.show();
  return loading;
};

export default Loading;
